"use client";
import { getShelterData, postData } from '../../../apiCalls';
import { useState, useEffect } from 'react';
import styles from "../../page.module.css"
import shelterPage from "./shelter.module.css";
import LoadingShelterPage from './loading';
import RateForm from '@/Components/RateForm/RateForm';
import { notFound } from "next/navigation";
import sheltertNotFound from './not-found';
import PropTypes from 'prop-types';

export default function ShelterPage({ params }) {
	const [shelter, setShelter] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [reviewed, setReviewed] = useState('')
	const [revError, setRevError] = useState('')

	useEffect(() => {
		getShelterData("shelters/1") //this is hard coded for mock data, change to params.id for real data
			.then((data) => {
				if (!data.ok) {
					notFound()
				}
				return data.json()
			})
			.then((data) => {
				setShelter(data.data.attributes)
			})
			.catch(() => {
				setError(sheltertNotFound())
			})
			.finally(() => {
				setIsLoading(false)
			})
	}, [])

	useEffect(() => {
		getShelterData("shelters/1") //this is hard coded for mock data, change to params.id for real data
			.then((data) => {
				if (!data.ok) {
					notFound()
				}
				return data.json()
			})
			.then((data) => {
				setShelter(data.data.attributes)
			})
			.catch(() => {
				setError(sheltertNotFound())
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
				if (response.ok) {
					return response.json()
				} else {
					throw new Error('review failed to submit, please try again later')
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
      <div className={shelterPage.mainContainer}>
        <section className={shelterPage.contact}>
          <h2 className={shelterPage.name}>{shelter.name}</h2>
          <div className={shelterPage.address}>
            <p>{shelter.streetAddress}</p>
            <p>{`${shelter.city}, ${shelter.state} ${shelter.zip}`}</p>
          </div>
          <div className={shelterPage.clientServices}>
            {shelter.websiteUrl && <a href={`http://${shelter.websiteUrl}`}>website</a>}
            <p>{shelter.phoneNumber}</p>
          </div>
          <div className={shelterPage.verify} >
          {shelter.verified ? 
              <p>the contact information for this shelter has been verified by our team</p> :
              <p>the contact information for this shelter was submitted by a community member and has not been verified</p>
            }
          </div>
        </section>
        <section className={shelterPage.reviews}>
          <h2>Community Reviews</h2>
          {!shelterPage.reviews 
            ? <p>There are no reviews of this shelter</p>  
            :<article className={shelterPage.scores}>
              <div>
                <p>{shelter.avgStaff}</p>
                <img className={shelterPage.icons} src={'/flag.png'} />
              </div>
              <div>
                <p>{shelter.avgSafety}</p>
                <img className={shelterPage.icons} src={'/home.png'} />
              </div>
              <div>
                <p>{shelter.avgClean}</p>
                <img className={shelterPage.icons} src={'/mop.png'} />
              </div>
            </article>
          }
          <p>these ratings are averaged from community reviews and are intended to reflect the experience of those who have received services here, not those who provide them</p>
        </section>
        <RateForm id={params.id} error={revError} reviewed={reviewed} submitReview={submitReview} />
      </div>
    </main>
  )
}

