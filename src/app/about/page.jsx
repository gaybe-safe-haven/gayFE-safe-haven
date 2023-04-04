//about page

import Image from "next/image";
import styles from "../page.module.css";
import imageStyles from "../styles/images.module.css";
import hairPaintTeen from "../../../public/hair-paint-teen.jpg";
import groupTeensPic from "../../../public/group-teens.jpg";

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.mainContentTop}>

          <div className={styles.textWrapper}>
            <p className={styles.bluePTag}>In the face of an increasingly hostile political climate towards LGBTQ+ individuals, it&apos;s more important than ever to provide safe spaces for homeless LGBTQ+ youth</p>
            <p className={styles.greenPTagThin}>We wanted to make an app that would let vulnerable youth search for LGBTQ+-friendly shelters across the United States</p>
          </div>
{/* change purplePTag selector */}
          <p className={styles.purplePTag}>but  a national database of LGBTQ+-friendly shelters didn&apos;t exist!</p>
          <Image id="hairPaintTeenImg" className={imageStyles.hairPaintTeenImage} src={hairPaintTeen} alt="hair paint teen" />
      </div>

        <div className={styles.mainContentBottom}>
          <div className={styles.textWrapper2}>
            <p className={styles.bluePTag}>So, we&apos;re building a comprehensive list of LGBTQ+-friendly youth shelters across the United States</p>
            <p className={styles.pinkPTag}>and we need YOUR HELP!</p>
          </div>
          <Image className={imageStyles.groupTeens} src={groupTeensPic} alt="group of teens" />
          <p className={styles.greenPTagThin}>If you know of a shelter that should be on our list, please add it. And if you&apos;ve had an experience with a shelter that&apos;s already on our list, please rate it to help others make informed decisions. Together, we can create a network of support and protection for queer and trans youth who need it the most.</p>
        </div>

    </main>
  )
}