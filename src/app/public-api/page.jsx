import Link from "next/link"

export default function publicApi() {
	return (
		<>
		<h1>Here is our free public api</h1>
		<p>For all shelter GET requests: <Link href={"https://gaybe-safe-haven.herokuapp.com/api/v1/shelters"} >https://gaybe-safe-haven.herokuapp.com/api/v1/shelters</Link></p>
		</>
	)
}