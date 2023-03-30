export const getShelterData = async (path) => {
	const url = `https://bcc0d6a3-cbd5-41b7-be05-284d9753c510.mock.pstmn.io/${path}`
	try {
		const shelterData = await fetch (url, { cache: "no-store"})
		return shelterData.json()
	} catch (error) {
		console.log(error)
		return error
	}
}
// export const getServerSideProps = async ({ req, res }) => {
// 	res.setHeader(
// 		'Cache-Control',
// 		'public, s-maxage=10, stale-while-revalidate=59'
// 	)

// 	return {
// 		props: {},
// 	}
// }