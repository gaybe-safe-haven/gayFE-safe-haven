import Link from "next/link"
import styles from "../page.module.css"

export default function publicApi() {
	return (
		<main className={styles.main}>
			<h1>Here is our free public API</h1>
			<p>Use this API to get a community created list of shelters</p>
			<p>GET endpoint for all shelters: <Link href={"https://gaybe-safe-haven.herokuapp.com/api/v1/shelters"} >https://gaybe-safe-haven.herokuapp.com/api/v1/shelters</Link></p>
			<p>GET endpoint for a single shelter: <Link href={"https://gaybe-safe-haven.herokuapp.com/api/v1/shelters"} >https://gaybe-safe-haven.herokuapp.com/api/v1/shelters/:id</Link></p>
		</main>
	)
}