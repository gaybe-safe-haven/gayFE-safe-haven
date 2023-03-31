"use client"
import styles from "./Form.module.css";
import { useState } from "react";

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
  const [newShelter, setNewShelter] = useState({})

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
    setNewShelter(formData)
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

  function addShelter(newShelter) {
    fetch("https://postman-echo.com/shelters", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newShelter)
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        return Promise.reject(response.status)
      }
    })
  }

    return (
      <form id="addForm" onSubmit={handleSubmit} className={styles.formContainer}>
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
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <input 
            type="text" 
            name="city" 
            placeholder="city" 
            className={styles.formInput}
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <input 
            type="text" 
            name="state" 
            placeholder="state" 
            className={styles.formInput}
            value={formData.state}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <input 
            type="text" 
            name="phoneNumber" 
            placeholder="phone number" 
            className={styles.formInput}
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <input 
            type="text" 
            name="website" 
            placeholder="website" 
            className={styles.formInput}
            value={formData.website}
            onChange={handleChange}
          />
        </div>
        <button className={styles.button}>Add Shelter</button>
      </form>    
    )
}