"use client"
import { getShelterData } from '../../../apiCalls'
import { useState, useEffect } from 'react'

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
			setShelter(data.data.attributes)
			console.log(data.data)
		})
	},[])

  console.log(shelter.name)
  return (
    <main>
      <h1>{shelter.name}</h1>
      <div>
        <p>{shelter.streetAddress}</p>
        <p>{`${shelter.city}, ${shelter.state} ${shelter.zip}`}</p>
      </div>
      <div>
        {shelter.websiteUrl && <a href={`${shelter.websiteUrl}`}>website</a>}
        <p>{shelter.phoneNumber}</p>
      </div>
      <section>
        <div>
          <p>{shelter.avgStaff}</p>
          <img src={'/flag.png'} />
        </div>
        <div>
          <p>{shelter.avgSafety}</p>
          <img src={'/home.png'} />
        </div>
        <div>
          <p>{shelter.avgClean}</p>
          <img src={'/mop.png'} />
        </div>
      </section>
    </main>

  )
}

