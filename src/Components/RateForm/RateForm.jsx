import styles from "./RateForm.module.css";
import { useState } from 'react'

export default function RateForm({ id, reviewed, error, submitReview }) {
  const [review, setReview] = useState({
    cleanliness: '',
    safety: '',
    staff: '',
  })
  const [missing, setMissing] = useState('')

  const clearInputs = () => {
    setReview({
      cleanliness: '',
      safety: '',
      staff: '',
    })
  }
  
  const handleChange = (target) => {
    setReview(prevState => {
      return {
        ...prevState,
        [target.name]: [target.value]
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newReview = {
      ...review,
      id
    }
  
    if(newReview.cleanliness && newReview.safety && newReview.staff) {
      submitReview(newReview)
      clearInputs()
    } else {
      setMissing('please rate all fields before submitting')
    }
  }
  
  if(reviewed) {
    return (
      <section id="thankYou" className={styles.review}>
        <p>thank you for taking the time to share your experience with us</p>
      </section>
    )
  }

  return (
  <form className={styles.review}>
    <div className={styles.invitation}>
        <h2 id="rateFormTitle">Rate Your Experience</h2>
        <p className={styles.plea}>Please only submit a rating if you have received services here</p> 
    </div>
    <div className={styles.rating}>
      <label htmlFor="staff"><img id="flag2" src="/flag.png" alt="lgbtq flag icon" className={styles.icon} /></label>
      <input type="range" id="staff" name="staff" min="0" max="10" value={review.staff} onChange={(e) => handleChange(e.target)} />
    </div>
    <p className={styles.label}>Staff was LGBTQ friendly</p>
    <div className={styles.rating}>
      <label htmlFor="staff"><img id="home2" src="/home.png" alt="safe house icon" className={styles.icon} /></label>
      <input type="range" id="safety" name="safety" min="0" max="10" value={review.safety} onChange={(e) => handleChange(e.target)}/>
    </div>
    <p className={styles.label}>I was physically safe</p>
    <div className={styles.rating}>
      <label htmlFor="staff"><img id="mop2" src="/mop.png" alt="mop icon" className={styles.icon} /></label>
      <input type="range" id="cleanliness" name="cleanliness" min="0" max="10" value={review.cleanliness} onChange={(e) => handleChange(e.target)}/>
    </div>
    <p className={styles.label}>Facility was clean and sanitary</p>
    
    <button id="rateFormSubmitButton" className={styles.submit} onClick={(e) => handleSubmit(e)}>submit review</button>
    {error && <p>your review was not processed, please try again</p>}
    {missing && <p>{missing}</p>}
  </form>
  )
}