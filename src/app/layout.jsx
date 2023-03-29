import "./styles/globals.css";
import Link from 'next/link'
import styles from "./styles/nav.module.css"
// FE friends! here's a note on styling: you should be able to use dot notation to refer to classNames directly from our module.css files, like you see below with our nav. I imported/declared "styles" from nav.module.css, and then referred to the exact class name: {styles.navContainer} similar to the way we have been doing it in React/JSX, like when we do <div style={{alignSelf: "end"}}></div> //which with modular css would be: <div className={styles.someClassName}></div>
export const metadata = {
  title: 'Gaybe Safe Haven',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body>
        <nav className={styles.navContainer}>
          <div className={styles.navContentWrapper}>
            <h1 className={styles.title}>Our App &#60;3</h1>
            {/* we should have a link to "/" and the h1 could do this or a logo? */}
            <div className={styles.linkContainer}>
              <Link href="/about"><button className={styles.linkButton}>about</button></Link>
              <Link href="/list"><button className={styles.linkButton}>list</button></Link>
              <Link href="/add-shelter"><button className={styles.linkButton}>add a shelter</button></Link>
              <Link href="/api"><button className={styles.linkButton}>public api</button></Link>
            </div>
          </div>
        </nav>
        {children}
        <div className="stripes">
          <div className="purpleStripe"></div>
          <div className="tealStripe"></div>
          <div className="greenStripe"></div>
          <div className="roseStripe"></div>
        </div>
      </body>
    </html>
  );
}
