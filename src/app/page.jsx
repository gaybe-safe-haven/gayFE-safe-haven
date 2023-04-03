//root page/main

import Image from "next/image";
import { Roboto } from 'next/font/google'
import styles from "./page.module.css";
import imageStyles from "./styles/images.module.css";
import makeupTeens from "../../public/makeup-teens.jpg";
import facepaintTeenPic from "../../public/facepaint-teen.jpg";
const roboto = Roboto({ 
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900' ]
})

export default function Home() {
  return (
    <main className={styles.main}>
     <p className={styles.purplePTag}>LGBTQ+ youth are 120% more likely to experience homelessness.</p>
     <Image className={imageStyles.makeupTeensImage} src={makeupTeens} alt="makeup teens"/>
     <p className={styles.greenPTag}>But not all shelters are safe for queer and trans folks.</p>
     <Image className={imageStyles.facepaintTeen} src={facepaintTeenPic} alt="face paint teen" />
     <p className={styles.pinkPTag}>We&apos;re asking you to help us track the ones that are.</p>
    </main>
  )
}
