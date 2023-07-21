import Image from "next/image";

import styles from '../../../styles/components/Home/projectItem.module.sass'

export default function ProjectItem({ img, name }) {
    return (
        <>
            <div className={styles.projectItem}>
                <Image
                    src={img}
                    alt={""}
                    width={350}
                    height={250}
                    className={styles.image}
                />
                <div className={styles.name}>{name}</div>
            </div>
        </>
    )
}