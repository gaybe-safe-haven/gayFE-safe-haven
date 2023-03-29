export default function GetMockData() {
	return fetch ('https://bcc0d6a3-cbd5-41b7-be05-284d9753c510.mock.pstmn.io/shelters')
	.then(response => {
		if (response.ok) {
			return response.json()}})
}