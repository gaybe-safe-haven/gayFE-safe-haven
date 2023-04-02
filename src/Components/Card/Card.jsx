'use client'
import styles from "./Card.module.css";
import { BiCheckboxChecked, BiCheckbox } from "react-icons/bi";
import Link from "next/link";


export default function Card({data}) {

    const validation = data.attributes.verified ? <BiCheckboxChecked id="validationIcon" alt="validated shelter" className={styles.validateIcon} /> : <BiCheckbox id="validationIcon" alt="not validated" className={styles.notValidatedIcon}/>;

    return (
        <div 
        id="shelterCard"
        className={styles.listItemContainer}>
            <Link href={`/list/${data.id}`} id="shelterLink" className={styles.linkText}>
                {data.attributes.name}
            </Link>
            {validation}
        </div>
    );
}