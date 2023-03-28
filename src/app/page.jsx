// import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
     <p>LGBTQ+ youth are 120% more likely to experience homelessness.</p>
     {/* <img></img> */}
     <p>But not all shelters are safe for queer and trans folks.</p>
     {/* <img></img> */}
     <p>We're asking you to help us track the ones that are.</p>
    </main>
  )
}
