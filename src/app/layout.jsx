import "./styles/globals.css";
import Link from 'next/link'
import navStyles from "./styles/nav.module.css"
import { Suspense } from "react";
import LoadingListPage from "./list/loading";
import PropTypes from 'prop-types';
import headerStyles from "./page.module.css";
import { CiStar } from "react-icons/ci";
import { BsHouseHeart } from "react-icons/bs";

export const metadata = {
  title: 'S.A.F.E.R. Kids',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <nav className={navStyles.navContainer}>
          <div className={navStyles.navContentWrapper}>
            <div className={navStyles.linkContainer}>
              <Link href="/"><button alt="home" className={navStyles.linkButton}>home</button></Link>
              <Link href="/about"><button alt="about" className={navStyles.linkButton}>about</button></Link>
              <Link href="/list"><button alt="list" className={navStyles.linkButton}>list</button></Link>
              <Link href="/add-shelter"><button alt="add a shelter" className={navStyles.linkButton}>add a shelter</button></Link>
              <Link href="/public-api"><button alt="public api" className={navStyles.linkButton}>public api</button></Link>
            </div>
            <CiStar className={navStyles.navIcon}/>
          </div>
        </nav>
        <div className={headerStyles.header}>
          <div className={headerStyles.headerWrapper}>
            <Link href="/">
              <button alt="main page" className={headerStyles.headerLinkButton}>
                <h1 className={headerStyles.title}><BsHouseHeart classname={headerStyles.houseIcon}/>&nbsp;S.A.F.E.R. Kids</h1>    
              </button>
            </Link>
            <p className={headerStyles.acronym}>Safer Access to Free Emergency Respite for LGBTQ+ Kids</p>
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

RootLayout.propTypes = {
 children: PropTypes.node.isRequired,
};
