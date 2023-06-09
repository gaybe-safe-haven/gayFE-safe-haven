// "/list"

"use client";
import styles from "../page.module.css";
import listBoxStyles from "./listPage.module.css";
import { getShelterData } from "../../apiCalls";
import { useEffect, useState } from "react";
import LoadingListPage from "./loading";
import Card from "@/Components/Card/Card";
import shelterListNotFound from "./not-found";
import { notFound } from "next/navigation";


export default function List() {
	const [shelterData, setShelterData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		getShelterData('shelters')
		.then((data) => {
			if(!data.ok) {
				throw new Error('Failed to fetch shelter data')
			}
			return data.json();
		})	
		.then((data) => {
			if (data && data.data && data.data.length > 0){
				setShelterData(data.data)
			} else {
				throw new Error('Empty response from server')
			}
		})
		.catch((error) => {
				setError(shelterListNotFound())
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
		return <Card  key={data.id} data={data} />;
	})

	return (
		<main className={styles.main}>
			{/* //filter container goes here */}
			<h2 className={styles.h2Styling}>Shelter List</h2>
			<div className={listBoxStyles.grid}>
				{mappedData}
			</div>
		</main>
	)
}
