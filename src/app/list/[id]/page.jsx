"use client"
import { getShelterData } from '../../../apiCalls'
import { useState, useEffect } from 'react'
import RateForm from '../../../components/RateForm/RateForm.jsx'

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
			console.log(data.data.data)
		})
	},[])

  const submitReview = (review) => {

  }

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
      <div>
        <p>stayed here?</p>
        <p>rate your experience</p>
      </div>
      <RateForm id={params.id} submitReview={submitReview} />
    </main>

  )
}

