import "./styles/globals.css";
import Link from 'next/link'
import styles from "./styles/nav.module.css"
import heroStyles from "./page.module.css";
// import LoadingListPage from "./list/loading";
import { CiStar } from "react-icons/ci";


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
            <div className={styles.linkContainer}>
              <Link href="/about"><button alt="about" className={styles.linkButton}>about</button></Link>
              <Link href="/list"><button alt="list" className={styles.linkButton}>list</button></Link>
              <Link href="/add-shelter"><button alt="add a shelter" className={styles.linkButton}>add a shelter</button></Link>
              <Link href="/api"><button alt="public api" className={styles.linkButton}>public api</button></Link>
            </div>
            <CiStar className={styles.headerIcon}/>
          </div>
        </nav>
        <div className={heroStyles.hero}>
          <div className={heroStyles.heroWrapper}>
            <h1 className={heroStyles.title}>&nbsp;S.A.F.E.R. List</h1>
            <p className={heroStyles.titleDescription}>Safer Access to Free Emergency Respite: Youth Shelter and Housing Resources</p>
          </div>
        </div>
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
