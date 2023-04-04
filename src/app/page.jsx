import Image from "next/image";
import { Roboto } from 'next/font/google'
import styles from "./page.module.css";
import imageStyles from "./styles/images.module.css";
import makeupTeens from "../../public/makeup-teens.jpg";
import facepaintTeenPic from "../../public/facepaint-teen.jpg";


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
        <p className={styles.mainPagePTag3}>We&apos;re asking you to help us track the ones that are.</p>
      </div>
    </main>
  )
}
