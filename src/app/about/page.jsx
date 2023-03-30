import Image from "next/image";
import styles from "../page.module.css";
import imageStyles from "../styles/images.module.css"
import hairPaintTeen from "../../../public/hair-paint-teen.jpg"

export default function About() {
  return (
    <main className={styles.main}>
      <p className={styles.greenPTagThin}>In the face of an increasingly hostile political climate towards LGBTQ+ individuals, it&apos;s more important than ever to provide safe spaces for homeless LGBTQ+ youth</p>
      {/* <img src={hairPaintTeen} alt="hair paint teen" className={styles.hairPaintTeen}></img> */}
      <Image className={imageStyles.hairPaintTeenImage} src={hairPaintTeen} alt="hair paint teen"/>
      <p className={styles.greenPTagThin}>We wanted to make an app that would let vulnerable youth search for LGBTQ+-friendly shelters across the United States</p>
      <p className={styles.pinkPTag}>but  a national database of LGBTQ+-friendly shelters didn&apos;t exist!</p>
      <p className={styles.greenPTagThin}>So, we&apos;re building a comprehensive list of LGBTQ+-friendly youth shelters across the United States</p>
      <p className={styles.purplePTag}>and we need YOUR HELP!</p>
      <img></img>
      <p className={styles.greenPTagThin}>If you know of a shelter that should be on our list, please add it. And if you&apos;ve had an experience with a shelter that&apos;s already on our list, please rate it to help others make informed decisions. Together, we can create a network of support and protection for queer and trans youth who need it the most.</p>
    </main>
  )
}