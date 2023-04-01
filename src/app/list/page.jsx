"use client";
import styles from "../page.module.css";
import listPage from "./listPage.module.css"
import { getShelterData } from "../../apiCalls";
import Link from "next/link";
import { useEffect, useState } from "react";
import LoadingListPage from "./loading";
import { BiCheckboxChecked, BiCheckbox } from "react-icons/bi";


export default function List() {
	const [shelterData, setShelterData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		getShelterData('shelters')
		.then((data) => {
			if(data.ok) {
				return data.json();
			} else {
				throw new Error('Failed to fetch shelter data')
			}
		})	
		.then((data) => {
			if (data && data.data && data.data.length > 0){
				setShelterData(data.data)
			} else {
				throw new Error('Empty response from server')
			}
		})
		.catch((error) => {
			setError(error.message)
		})
		.finally(() => {
			setIsLoading(false)
		})
	},[])

	if (isLoading) {
		return <LoadingListPage />
	}

	if (error) {
		return <p>Error: {error}</p>
	}

	shelterData.sort((a,b) => a.attributes.name.localeCompare(b.attributes.name))

	const mappedData = shelterData.map(data => {
		const validation = data.attributes.verified ? <BiCheckboxChecked className={listPage.validateIcon} /> : <BiCheckbox className={listPage.notValidatedIcon}/>;
		return <div 
				key={data.attributes.id} 
				className={listPage.listItemContainer}>
					<Link href={`/list/${data.id}`} className={listPage.linkText}>
						{data.attributes.name}
					</Link>
					{validation}
				</div>;
	})

	return (
		<main className={styles.main}>
			<h2 className={styles.h2Styling}>Shelter List</h2>
			<div>
				{mappedData}
			</div>
		</main>
	)
}
