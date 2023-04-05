"use client"
import styles from "./Form.module.css";
import { postData } from "../apiCalls";
import { useState } from "react";
import PropTypes from 'prop-types';

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

  function handleChange(e) {
    setFormData(prevFormData => {
      return {
        ...prevFormData, 
        [e.target.name]: e.target.value
      }
    })
  }
  
  function handleSubmit(e) {
    e.preventDefault()
    postData(formData, 'shelters')
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        return Promise.reject(response.status)
      }
    })
    .then(data => {
      setPostSuccess(true)
    })
    setTimeout(() => {setPostSuccess(false)}, 3000)
    clearInputs()
  }

  function clearInputs() {
    setFormData(
      {
        name: "",
        streetAddress: "",
        city: "",
        state: "",
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
      <button type="submit" className={styles.button} onClick={(e) => handleSubmit(e)}>Add Shelter</button>
      {postSuccess && <p className="message">Your addition was successful!</p> }
    </form>    
  )
}