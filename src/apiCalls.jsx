export const getShelterData = (path) => {
	const url = `https://gaybe-safe-haven.herokuapp.com/api/v1/${path}`
	return fetch (url, { cache: "no-store"})
}



export const postData = (newData, path) => {
	const postURL = `https://gaybe-safe-haven.herokuapp.com/api/v1/${path}`

	return fetch(postURL, {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(newData)
	})
}