import Image from "next/image";
import { Inter } from 'next/font/google'
import styles from "./page.module.css";
import imageStyles from "./styles/images.module.css";
import makeupTeens from "../../public/makeup-teens.jpg";
import facepaintTeenPic from "../../public/facepaint-teen.jpg";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
     <p id="statistic120" className={styles.purplePTag}>LGBTQ+ youth are 120% more likely to experience homelessness.</p>
     <Image id="makeupTeensImg" className={imageStyles.makeupTeensImage} src={makeupTeens} alt="makeup teens"/>
     <p className={styles.greenPTag}>But not all shelters are safe for queer and trans folks.</p>
     <Image id="facepaintTeenImg" className={imageStyles.facepaintTeen} src={facepaintTeenPic} alt="face paint teen" />
     <p className={styles.pinkPTag}>We&apos;re asking you to help us track the ones that are.</p>
    </main>
  )
}
