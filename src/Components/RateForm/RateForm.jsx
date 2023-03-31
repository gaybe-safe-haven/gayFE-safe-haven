import styles from "./RateForm.module.css";

export default function RateForm() {
  return (
  <form className={styles.review}>
    <p className={styles.label}>Staff was LGBTQ friendly</p>
    <div className={styles.rating}>
      <label for="staff"><img src="/flag.png" alt="lgbtq flag icon" className={styles.icon} /></label>
      <input type="range" id="staff" name="staff" min="0" max="10"/>
    </div>
    <p className={styles.label}>I was physically safe</p>
    <div className={styles.rating}>
      <label for="staff"><img src="/home.png" alt="safe house icon" className={styles.icon} /></label>
      <input type="range" id="safety" name="safety" min="0" max="10"/>
    </div>
    <p className={styles.label}>Facility was clean and sanitary</p>
    <div className={styles.rating}>
      <label for="staff"><img src="/mop.png" alt="mop icon" className={styles.icon} /></label>
      <input type="range" id="clean" name="clean" min="0" max="10"/>
    </div>
    <p className={styles.label}>Please only submit a rating if you have stayed at this shelter.</p> 
    <p className={styles.label}>This is community-driven information and we trust you to accurately report your experience.</p>
    <button className={styles.submit}>submit review</button>
  </form>
  )
}