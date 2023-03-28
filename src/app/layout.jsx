import './globals.css'
import Link from 'next/link'
import styles from "./nav.module.css"

export const metadata = {
  title: 'Gaybe Safe Haven',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body>
        <nav className={styles.navContainer}>
          <Link href="/about"><button className={styles.linkButton}>about</button></Link>
          <Link href="/list"><button className={styles.linkButton}>list</button></Link>
          <Link href="/add-shelter"><button className={styles.linkButton}>add a shelter</button></Link>
          <Link href="/api"><button className={styles.linkButton}>public api</button></Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
