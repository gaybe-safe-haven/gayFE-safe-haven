import styles from "../page.module.css"
import {getShelterData} from "../../apiCalls"
import Link from "next/link"

export default async function List() {
	const shelterData = await getShelterData()
	// console.log(mockData.data)
	shelterData.data.sort((a,b) => a.attributes.name.localeCompare(b.attributes.name))
	const mappedData = shelterData.data.map(data => <p><Link href={`/${data.id}`} key={data.attributes.id} >{data.attributes.name}</Link></p>)
	console.log(mappedData)
	return (
		<main className={styles.main}>
			<p>list</p>
			<div>
				{mappedData}
			</div>
		</main>
	)
}