"use client"
import { getShelterData } from '../../../apiCalls'
import {useState, useEffect} from 'react'

export default function ShelterPage({ params }) {
	const [shelter, setShelter] = useState({})

	useEffect(() => {
		getShelterData(`shelters/1`) //this is hard coded for mock data, change to params.id for real data
		.then((data) => {
			if (data.ok) {
				return data.json()
			}
		})
		.then((data) => {
			setShelter(data.data)
			console.log(data)
		})
	},[])
  return (
    <main>
      <h1>{shelter.attributes.name}</h1>
      <div>
        <p>{shelter.attributes.address}</p>
        <p>{`${shelter.attributes.city}, ${shelter.attributes.state} ${shelter.attributes.zip}`}</p>
      </div>
      <div>
        {shelter.attributes.websiteUrl && <a href={`${shelter.attributes.websiteUrl}`}>website</a>}
        <p>{shelter.attributes.phoneNumber}</p>
      </div>
    </main>
    
  )
}