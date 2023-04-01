'use client'
import styles from "./Card.module.css";
import { BiCheckboxChecked, BiCheckbox } from "react-icons/bi";
import Link from "next/link";


export default function Card({data}) {

    const validation = data.attributes.verified ? <BiCheckboxChecked className={styles.validateIcon} /> : <BiCheckbox className={styles.notValidatedIcon}/>;

    return (
        <div 
        key={data.attributes.id} 
        className={styles.listItemContainer}>
            <Link href={`/list/${data.id}`} className={styles.linkText}>
                {data.attributes.name}
            </Link>
            {validation}
        </div>
    );
}