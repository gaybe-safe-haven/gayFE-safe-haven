'use client'
import Form from "../Components/Form";
import styles from "../page.module.css"

export default function add() {
  return (
    <main className={styles.main}>
      <h2>Add a shelter to our list</h2>
      <p>know of a shelter, but don’t see it here? Fill out the form below to add it to our database</p>
      <Form />   
      <p>newly posted shelters will be added to the list immediately, but will remain unverified until our staff have reviewed them</p>
    </main>
  )
}