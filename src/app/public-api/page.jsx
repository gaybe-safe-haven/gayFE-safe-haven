import Link from "next/link"
import styles from "../page.module.css";
import Image from "next/image";
import imageStyles from "../styles/images.module.css"
import example from "../../../public/example.png"

export default function publicApi() {
	return (
		<main className={styles.main}>
			<div className={styles.wrapperAPI}>
				<div className={styles.leftWrapperAPI}>
					<h2>Here is our free public API</h2>
					<p>Use this API to get a community created list of shelters</p>
					<hr className={styles.hr}/>
					<p><span className={styles.span}>GET</span> endpoint for all shelters: 
					</p>
					<p>
						<Link href={"https://gaybe-safe-haven.herokuapp.com/api/v1/shelters"} >https://gaybe-safe-haven.herokuapp.com/api/v1/shelters</Link>
					</p>
					<hr className={styles.hr}/>
					<p><span className={styles.span}>GET</span> endpoint for a single shelter: 
					</p>
					<p>
						<Link href={"https://gaybe-safe-haven.herokuapp.com/api/v1/shelters"} >https://gaybe-safe-haven.herokuapp.com/api/v1/shelters/:id</Link>
					</p>
					<hr className={styles.hr}/>
				</div>
				<Image className={imageStyles.example} src={example} alt="API get request example" />
			</div>
		</main>
	)
}