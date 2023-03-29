async function GetMockData() {
	const mockData = await fetch ('https://bcc0d6a3-cbd5-41b7-be05-284d9753c510.mock.pstmn.io/shelters')
	return mockData.json()
}

export default {GetMockData}