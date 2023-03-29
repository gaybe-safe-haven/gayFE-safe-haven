import styles from "../page.module.css"
import {getShelterData} from "../../apiCalls"

export default async function List() {
	const shelterData = await getShelterData()
	// console.log(mockData.data)
	shelterData.data.sort((a,b) => a.attributes.name.localeCompare(b.attributes.name))
	const mappedData = shelterData.data.map(data => data.attributes.name)
	console.log(mappedData)
	return (
		<main className={styles.main}>
			<p>list</p>
			<p>{mappedData}</p>
		</main>
	)
}