"use client"
import styles from "./Form.module.css";
import { addShelter } from "../apiCalls";
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
  // const [newShelter, setNewShelter] = useState({})

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
    addShelter(formData)
    console.log('A', formData)
    // clearInputs()
  }

  function clearInputs() {
    // addShelter(newShelter)
    // console.log('B', newShelter)
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
      <form id="addForm" className={styles.formContainer}>
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
        <button className={styles.button} onClick={ (e) => handleSubmit(e) }>Add Shelter</button>
      </form>    
    )
}