'use client'
import styles from "./Card.module.css";
import { BiCheckboxChecked, BiCheckbox } from "react-icons/bi";
import Link from "next/link";
import PropTypes from 'prop-types';

export default function Card({data}) {

    const validation = data.attributes.verified ? <BiCheckboxChecked id="validationIcon" alt="validated shelter" className={styles.validateIcon} /> : <BiCheckbox id="notValidatedIcon" alt="not validated" className={styles.notValidatedIcon}/>;

    return (
        <div key={data.id} className={styles.listItemContainer}>
            <Link href={`/list/${data.id}`} className={styles.linkText}>
                {data.attributes.name}
            </Link>
            {validation}
        </div>
    );
}

Card.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        attributes: PropTypes.shape({
            name: PropTypes.string.isRequired,
            verified: PropTypes.bool.isRequired,
        })
    })
}
