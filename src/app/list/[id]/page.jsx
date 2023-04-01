"use client";
import { getShelterData } from '../../../apiCalls';
import { useState, useEffect } from 'react';
import styles from "../../page.module.css";
import LoadingShelterPage from './loading';

export default function ShelterPage({ params }) {
    const [shelter, setShelter] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
		    getShelterData("list/1") //this is hard coded for mock data, change to params.id for real data
		    .then((data) => {
			      if (data.ok) {
				        return data.json()
			      } else {
                throw new Error("Failed to fetch shelter data")
            }
		    })
		    .then((data) => {
            if (data && data.data && data.data.length > 0) {
                setShelter(data.data.attributes)
            } else {
                throw new Error("Empty response from server")
            }
		    })
        .catch((error) => {
            setError(error.message)
        })
        .finally(() => {
            setIsLoading(false)
        })
	  },[])

    if (isLoading) {
      return <LoadingShelterPage />
    }
  
    if (error) {
      return <p>Error: {error}</p>
    }

  return (
    <main className={styles.main}>
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
    </main>

  )
}

