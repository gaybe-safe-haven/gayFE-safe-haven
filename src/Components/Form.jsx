"use client"
import styles from "./Form.module.css";
import { useRouter } from 'next/navigation'
import { postData } from "../apiCalls";
import { useEffect, useState } from "react";
import { checkSite, checkZip, checkPhone } from '../util'

export default function Form() {
  const router = useRouter()
  const [formData, setFormData] = useState(
    {
      name: "",
      streetAddress: "",
      city: "",
      state: "",
      zip: "",
      phoneNumber: "",
      websiteUrl: ""
    }
  )

  const [postSuccess, setPostSuccess] = useState({
            name: '',
            streetAddress: '',
            city: '',
            state: '',
            zip: '',
            websiteUrl: '',
            phoneNumber: '',
            verified: '',
            avgStaff: '',
            avgSafety: '',
            avgClean: ''
  })
  const [error, setError] = useState(false)
  const [incomplete, setIncomplete] = useState(true)
  const [feedback, setFeedback] = useState('')

  useEffect(() => {
    setIncomplete(false)
    const inputs = Object.keys(formData)
    inputs.forEach(key => {
      if(key !== 'websiteUrl' && !formData[key]) {
        setIncomplete(true)
      }
    })
  }, [formData])
  
  function handleChange(e) {
    setFormData(prevFormData => {
      return {
        ...prevFormData, 
        [e.target.name]: e.target.value
      }
    })
  }

  function checkForm() {
    if(formData.websiteUrl && !checkSite(formData.websiteUrl)) {
      setFeedback('please enter a valid web address beginning with www.')
      return false
    }
    if(!checkPhone(formData.phoneNumber)) {
      setFeedback('please enter a valid phone number')
      return false
    }
    if(!checkZip(formData.zip)) {
      setFeedback('please enter a valid zipcode')
      return false
    }
    return true
  }
  
  function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setFeedback('')

    if(checkForm()) {
      postData(formData, 'shelters')
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        return Promise.reject(response)
      }
    })
    .then(data => {
      setPostSuccess({...data.data.attributes, id: data.data.id})
      clearInputs()
    })
    .catch(error => {
      console.log('error: ', error)
      //this will come in as an object and we will need to set different error messages depending
      if(error.message === "Unique constraint failed. Shelter already exists at this location") {
        setError('A shelter at this location is already listed! Please only enter shelters that are not included in our directory')
      } else {
        setError('Whoops! Something went wrong. Please check all fields are correct and try again')
      }
    })
    }
  }

  function clearInputs() {
    setFormData(
      {
        name: "",
        streetAddress: "",
        city: "",
        state: "",
        zip: "",
        phoneNumber: "",
        websiteUrl: ""
      }
    )
  }


  function clearPost() {
    setPostSuccess({
      id: '',
      name: '',
      streetAddress: '',
      city: '',
      state: '',
      zip: '',
      websiteUrl: '',
      phoneNumber: '',
      verified: '',
      avgStaff: '',
      avgSafety: '',
      avgClean: ''
  })
}

function goToShelter(id) {
  clearPost()
  router.push(`/list/${id}`)
}

  return (
    <section className={styles.formContainer}>
      {postSuccess.name ? 
      <section>
        <h2 className="message">Your submission was successful!</h2> 
        <div className={styles.receipt}>
          <p>{postSuccess.name}</p>
          <p>{postSuccess.streetAddress}</p>
          <p>{`${postSuccess.city}, ${postSuccess.state} ${postSuccess.zip}`}</p>
          <p>{postSuccess.phoneNumber}</p>
          {postSuccess.websiteUrl && <p>{postSuccess.websiteUrl}</p>}
        </div>
        <button onClick={() => {goToShelter(postSuccess.id)}}>See the Shelter</button>
        <button onClick={clearPost}>Add Another Shelter</button>
      </section> :
      <form>
        <h3 className={styles.formHeading}>Add A Shelter</h3>
        <div className={styles.inputContainer}>
          <input 
            type="text" 
            name="name" 
            placeholder="shelter name" 
            className={styles.formInput}
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <input 
            type="text" 
            name="streetAddress" 
            placeholder="street address" 
            className={styles.formInput}
            value={formData.streetAddress}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className={styles.inputContainer}>
          <input 
            type="text" 
            name="city" 
            placeholder="city" 
            className={styles.formInput}
            value={formData.city}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className={styles.inputContainer}>
          <input 
            type="text" 
            name="state" 
            placeholder="state" 
            className={styles.formInput}
            value={formData.state}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className={styles.inputContainer}>
          <input 
            type="text" 
            name="zip" 
            placeholder="zipcode" 
            className={styles.formInput}
            value={formData.zip}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className={styles.inputContainer}>
          <input 
            type="text" 
            name="phoneNumber" 
            placeholder="phone number" 
            className={styles.formInput}
            value={formData.phoneNumber}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className={styles.inputContainer}>
          <input 
            type="text" 
            name="websiteUrl" 
            placeholder="website" 
            className={styles.formInput}
            value={formData.websiteUrl}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button type="submit" className={styles.button} disabled={incomplete} onClick={(e) => handleSubmit(e)}>Add Shelter</button>
        {error && <p className="message">{error}</p>}
        {feedback && <p className="message">{feedback}</p>}
      </form>
    }
    </section>
  )
}