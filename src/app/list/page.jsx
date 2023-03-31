"use client"
import styles from "../page.module.css"
import {getShelterData} from "../../apiCalls"
import Link from "next/link"
import { useEffect, useState } from "react"
import LoadingListPage from "./loading"


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
	const mappedData = shelterData.map(data => <p key={data.attributes.id}><Link href={`/list/${data.id}`}  >{data.attributes.name}</Link></p>)
	return (
		<main className={styles.main}>
			<p>list</p>
			<div>
				{mappedData}
			</div>
		</main>
	)
}

// function LoadingListPage() {
// 	return (
// 		<p>loading...</p>
// 	)
// }