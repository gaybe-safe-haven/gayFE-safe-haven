"use client"
import styles from "./Form.module.css";
import { postData } from "../apiCalls";
import { useState } from "react";
import { checkSite, checkZip, checkPhone } from '../util'

export default function Form() {
  const [formData, setFormData] = useState(
    {
      name: "",
      streetAddress: "",
      city: "",
      state: "",
      zip: "",
      phoneNumber: "",
      websiteURL: ""
    }
  )

  const [postSuccess, setPostSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [incomplete, setIncomplete] = useState(true)
  const [feedback, setFeedback] = useState('')

  function handleChange(e) {
    setIncomplete(false)
    setFormData(prevFormData => {
      return {
        ...prevFormData, 
        [e.target.name]: e.target.value
      }
    })
  }

  function checkForm() {
    if(formData.websiteURL && !checkSite(formData.websiteURL)) {
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

    const inputs = Object.keys(formData)
    inputs.forEach(key => {
      if(key !== 'websiteURL' && !formData[key]) {
        setIncomplete(true)
      }
    })
    return incomplete ? false : true
  }
  
  function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setFeedback('')

    if(checkForm()) {
      postData(formData, 'shelters')
    .then(response => {
      if (response.ok) {
        console.log('successful post!')
        return response.json()
      } else {
        return Promise.reject(response.status)
      }
    })
    .then(data => {
      setPostSuccess(true)
      setTimeout(() => {setPostSuccess(false)}, 3000)
      clearInputs()
    })
    .catch(error => {
      console.log(error)
      //this will come in as an object and we will need to set different error messages depending
      setError(error)
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
        website: ""
      }
    )
  }

  return (
    <form className={styles.formContainer}>
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
          name="websiteURL" 
          placeholder="website" 
          className={styles.formInput}
          value={formData.websiteURL}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <button type="submit" className={styles.button} disabled={incomplete} onClick={(e) => handleSubmit(e)}>Add Shelter</button>
      {error && <p className="message">There was an error with your submission. Please try again.</p>}
      {feedback && <p className="message">{feedback}</p>}
      {postSuccess && <p className="message">Your submission was successful!</p> }
    </form>    
  )
}