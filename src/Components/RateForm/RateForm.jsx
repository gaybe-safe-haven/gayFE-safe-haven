import styles from "./RateForm.module.css";
import { useState, useEffect } from 'react'

export default function RateForm({ id, reviewed, error, submitReview }) {
  const [review, setReview] = useState({
    cleanliness: '',
    safety: '',
    staff: '',
  })

  const clearInputs = () => {
    setReview({
      cleanliness: '',
      safety: '',
      staff: '',
    })
  }

  //add useEffect to rerender if props have changed??
  
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
    console.log(newReview)
    submitReview(newReview)
    clearInputs()
  }
  if(reviewed) {
    return (
      <section>
        <p>thank you for taking the time to share your experience with us</p>
      </section>
    )
  }

  return (
  <form className={styles.review}>
    <p className={styles.label}>Staff was LGBTQ friendly</p>
    <div className={styles.rating}>
      <label for="staff"><img src="/flag.png" alt="lgbtq flag icon" className={styles.icon} /></label>
      <input type="range" id="staff" name="staff" min="0" max="10" value={review.staff} onChange={(e) => handleChange(e.target)} />
    </div>
    <p className={styles.label}>I was physically safe</p>
    <div className={styles.rating}>
      <label for="staff"><img src="/home.png" alt="safe house icon" className={styles.icon} /></label>
      <input type="range" id="safety" name="safety" min="0" max="10" value={review.safety} onChange={(e) => handleChange(e.target)}/>
    </div>
    <p className={styles.label}>Facility was clean and sanitary</p>
    <div className={styles.rating}>
      <label for="staff"><img src="/mop.png" alt="mop icon" className={styles.icon} /></label>
      <input type="range" id="cleanliness" name="cleanliness" min="0" max="10" value={review.cleanliness} onChange={(e) => handleChange(e.target)}/>
    </div>
    <p className={styles.label}>Please only submit a rating if you have stayed at this shelter.</p> 
    <p className={styles.label}>This is community-driven information and we trust you to accurately report your experience.</p>
    <button className={styles.submit} onClick={(e) => handleSubmit(e)}>submit review</button>
    {error && <p>your review was not processed, please try again</p>}
  </form>
  )
}