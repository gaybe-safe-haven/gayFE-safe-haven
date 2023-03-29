import styles from "../page.module.css"
import { GetMockData } from "../../apiCalls"

const fetchMockData = async () => {
	const fetchData = await fetch ('https://bcc0d6a3-cbd5-41b7-be05-284d9753c510.mock.pstmn.io/shelters')
	return fetchData.json()
}

export default async function List() {
	const mockData = await fetchMockData()
	// console.log(mockData.data)
	const mappedData = mockData.data.map(data => data.attributes.name)
	return (
		<main className={styles.main}>
			<p>list</p>
			<p>{mappedData}</p>
		</main>
	)
}