export const getShelterData = (path) => {
	const url = `https://bcc0d6a3-cbd5-41b7-be05-284d9753c510.mock.pstmn.io/${path}`
	return fetch (url, { cache: "no-store"})
}



export const postData = (newData, path) => {
	const postURL = `https://bcc0d6a3-cbd5-41b7-be05-284d9753c510.mock.pstmn.io/${path}`

	return fetch(postURL, {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(newData)
	})
}