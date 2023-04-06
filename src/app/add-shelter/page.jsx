//"add-shelter"

'use client'
import Form from "../../Components/Form";
import styles from "../page.module.css"

export default function add() {
  return (
    <main className={styles.main}>
      <div className={styles.addWrapper1}>
        <h2 className={styles.addH2}>Add a shelter to our list</h2>
        <p className={styles.greenPTagThin}>Know of a shelter, but don’t see it here? Fill out the form below to add it to our database</p>
      </div>
      <div className={styles.addWrapper2}>
        <Form />   
      </div>
      <div className={styles.addWrapper3}>
        <p className={styles.greenPTagThin}>Newly posted shelters will be added to the list immediately, but will remain unverified until our staff have reviewed them</p>
      </div>
    </main>
  )
}