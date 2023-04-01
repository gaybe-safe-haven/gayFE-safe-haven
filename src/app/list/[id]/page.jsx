"use client";
import { getShelterData, postData } from '../../../apiCalls';
import { useState, useEffect } from 'react';
import styles from "./shelter.module.css";
import LoadingShelterPage from './loading';
import RateForm from '../../../components/RateForm/RateForm.jsx'

export default function ShelterPage({ params }) {
    const [shelter, setShelter] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [reviewed, setReviewed] = useState('')
    const [revError, setRevError] = useState('')

    useEffect(() => {
      getShelterData("shelters/1") //this is hard coded for mock data, change to params.id for real data
      .then((data) => {
        if (data.ok) {
          return data.json()
        } else {
              throw new Error("Failed to fetch shelter data")
          }
      })
      .then((data) => {
        setShelter(data.data.attributes)
      })
      .catch((error) => {
          setError(error.message)
      })
      .finally(() => {
          setIsLoading(false)
      })
    }, [])

    useEffect(() => {
      getShelterData("shelters/1") //this is hard coded for mock data, change to params.id for real data
      .then((data) => {
        if (data.ok) {
          return data.json()
        } else {
              throw new Error("Failed to fetch shelter data")
          }
      })
      .then((data) => {
        setShelter(data.data.attributes)
      })
      .catch((error) => {
          setError(error.message)
      })
      .finally(() => {
          setIsLoading(false)
      })
    }, [reviewed])

    if (isLoading) {
      return <LoadingShelterPage />
    }
  
    if (error) {
      return <p>Error: {error}</p>
    }
  const submitReview = (review) => {
    postData(review, 'reviews')
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        throw new Error ('review failed to submit, please try again later')
      }
    })
    .then(data => {
      console.log(data)
      setReviewed(data.data.attributes)
    })
    .catch(error => {
      setRevError(error)
    })
    //update state to show success or error
    //redo get request
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.name}>{shelter.name}</h1>
      <div className={styles.address}>
        <p>{shelter.streetAddress}</p>
        <p>{`${shelter.city}, ${shelter.state} ${shelter.zip}`}</p>
      </div>
      <div className={styles.address}>
        {shelter.websiteUrl && <a href={`${shelter.websiteUrl}`}>website</a>}
        <p>{shelter.phoneNumber}</p>
      </div>
      <section className={styles.reviews}>
        <article className={styles.scores}>
        <div>
          <p>{shelter.avgStaff}</p>
          <img className={styles.icons} src={'/flag.png'} />
        </div>
        <div>
          <p>{shelter.avgSafety}</p>
          <img className={styles.icons} src={'/home.png'} />
        </div>
        <div>
          <p>{shelter.avgClean}</p>
          <img className={styles.icons} src={'/mop.png'} />
        </div>
        </article>
        
        {shelter.verified ? 
          <p className={styles.verify}>the contact information for this shelter has been verified by our team</p> :
          <p className={styles.verify}>the contact information for this shelter was submitted by a community member and has not been verified</p>}
      </section>
      <div>
        <p>stayed here?</p>
        <p>rate your experience</p>
      </div>
      <RateForm id={params.id} error={revError} reviewed={reviewed} submitReview={submitReview} />
    </main>

  )
}

