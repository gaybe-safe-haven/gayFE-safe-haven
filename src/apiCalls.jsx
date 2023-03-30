export const getShelterData = async (path) => {
	const url = `https://bcc0d6a3-cbd5-41b7-be05-284d9753c510.mock.pstmn.io/${path}`
	try {
		const shelterData = await fetch (url)
		return shelterData.json()
	} catch (error) {
		console.log(error)
		return error
	}
}