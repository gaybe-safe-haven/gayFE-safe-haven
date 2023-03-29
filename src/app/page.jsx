// import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from "./page.module.css";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
     <p className={styles.purplePTag}>LGBTQ+ youth are 120% more likely to experience homelessness.</p>
     {/* <img></img> */}
     <p className={styles.greenPTag}>But not all shelters are safe for queer and trans folks.</p>
     {/* <img></img> */}
     <p className={styles.pinkPTag}>We&apos;re asking you to help us track the ones that are.</p>
    </main>
  )
}