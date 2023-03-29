export const getShelterData = async () => {
	const url = 'https://bcc0d6a3-cbd5-41b7-be05-284d9753c510.mock.pstmn.io/shelters'
	try {
		const shelterData = await fetch (url)
		return shelterData.json()
	} catch (error) {
		console.log(error)
		return error
	}
}