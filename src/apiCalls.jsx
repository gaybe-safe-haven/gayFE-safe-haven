export const getShelterData = async () => {
	const shelterData = await fetch ('https://bcc0d6a3-cbd5-41b7-be05-284d9753c510.mock.pstmn.io/shelters')
	return shelterData.json()
}