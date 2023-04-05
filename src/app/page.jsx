// "/"

import Image from "next/image";
import styles from "./page.module.css";
import imageStyles from "./styles/images.module.css";
import makeupTeens from "../../public/makeup-teens.jpg";
import facepaintTeenPic from "../../public/facepaint-teen.jpg";
import Link from "next/link";


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mainContentTop}>
        <p className={styles.mainPagePTag1}>LGBTQ+ youth are 120% more likely to experience homelessness.</p>
        <Image className={imageStyles.makeupTeensImage} src={makeupTeens} alt="makeup teens"/>
        <p className={styles.mainPagePTag2}>But not all shelters are safe for queer and trans folks.</p>
      </div>
      <div className={styles.mainContentBottom}>
        <Image className={imageStyles.facepaintTeen} src={facepaintTeenPic} alt="face paint teen" />
        <div className={styles.boxLowerRight}>
          <p className={styles.mainPagePTag3}>We&apos;re asking you to help us track the ones that are.</p>
          <Link href="/list" className={styles.linkWidth}><button alt="list" className={styles.buttonLink}>go to list</button></Link>
          <Link href="/add-shelter" className={styles.linkWidth}><button alt="add a shelter" className={styles.buttonLink}>add a shelter</button></Link>
        </div>
      </div>
    </main>
  )
}