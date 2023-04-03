"use client"
import styles from "./Form.module.css";
import { postData } from "../apiCalls";
import { useState } from "react";
import { checkSite, checkZip } from '../util'

export default function Form() {
  const [formData, setFormData] = useState(
    {
      name: "",
      streetAddress: "",
      city: "",
      state: "",
      phoneNumber: "",
      website: ""
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
    if(checkZip(formData)) {

    }
    const inputs = Object.keys(formData)
    inputs.forEach(key => {
      //we don't care if the website is filled out or not
      if(key !== 'website' && !formData[key]) {
        setIncomplete(true)
        console.log('form incomplete')
      }
    })
    return incomplete ? false : true
  }
  
  function handleSubmit(e) {
    e.preventDefault()
    setError(false)

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
          name="website" 
          placeholder="website" 
          className={styles.formInput}
          value={formData.website}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <button type="submit" className={styles.button} disabled={incomplete} onClick={(e) => handleSubmit(e)}>Add Shelter</button>
      {error && <p className="message">There was an error with your submission. Please try again.</p>}
      {/* {incomplete && <p>please make sure all fields are complete</p>} */}
      {postSuccess && <p className="message">Your submission was successful!</p> }
    </form>    
  )
}