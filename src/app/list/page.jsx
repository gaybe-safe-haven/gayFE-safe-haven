"use client"
import styles from "../page.module.css"
import {getShelterData} from "../../apiCalls"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function List() {
	const [shelterData, setShelterData] = useState([])
	// const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		getShelterData('shelters')
		.then((data) => {
			if(data.ok) {
				return data.json()}})
		.then((data) => {
			setShelterData(data.data)
			// setIsLoading(false)
		})
	},[])

	// if (isLoading) {
	// 	return <p>Loading...</p>
	// }

	// const shelterData = await getShelterData('shelters')
	shelterData.sort((a,b) => a.attributes.name.localeCompare(b.attributes.name))
	const mappedData = shelterData.map(data => <p><Link href={`/list/${data.id}`} key={data.attributes.id} >{data.attributes.name}</Link></p>)
	return (
		<main className={styles.main}>
			<p>list</p>
			<div>
				{mappedData}
			</div>
		</main>
	)
}