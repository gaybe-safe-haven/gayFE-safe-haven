'use client'

import styles from "../form.module.css";

export default function add() {
  return (
    <form className={styles.formContainer}>
      <h3 className={styles.formHeading}>My Form</h3>
      <div className={styles.inputContainer}>
          <label htmlFor="something" >something:&nbsp;</label>
          <input 
            type="text" 
            name="something" 
            placeholder="something" 
            className={styles.formInput}
          />
      </div>
      <div className={styles.inputContainer}>
          <label htmlFor="quickly">quickly:&nbsp;</label>
          <input 
            type="text" 
            name="quickly" 
            placeholder="quickly" 
            className={styles.formInput}
          />
      </div>
      <div className={styles.inputContainer}>
      <label htmlFor="coming">coming:&nbsp;</label>
          <input 
            type="text" 
            name="coming" 
            placeholder="coming" 
            className={styles.formInput}
          />
      </div>
      <button className={styles.button}>Yikes</button>
    </form>    
  )
}