import Link from "next/link"
import styles from "../page.module.css";
import Image from "next/image";
import imageStyles from "../styles/images.module.css"
import example from "../../../public/example.png"

export default function publicApi() {
	return (
		<main className={styles.main}>
			<h1>Here is our free public API</h1>
			<p>Use this API to get a community created list of shelters</p>
			<p><span className={styles.span}>GET</span> endpoint for all shelters: 
				<Link href={"https://gaybe-safe-haven.herokuapp.com/api/v1/shelters"} >https://gaybe-safe-haven.herokuapp.com/api/v1/shelters</Link>
			</p>
			<p><span className={styles.span}>GET</span> endpoint for a single shelter: 
				<Link href={"https://gaybe-safe-haven.herokuapp.com/api/v1/shelters"} >https://gaybe-safe-haven.herokuapp.com/api/v1/shelters/:id</Link>
			</p>
			<Image className={imageStyles.example} src={example} alt="API get request example" />
		</main>
	)
}