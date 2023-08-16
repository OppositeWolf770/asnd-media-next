import Image from "next/image";

import styles from "./projectItem.module.scss";

export default function ProjectItem({ img, name }) {
  return (
    <>
      <div className={`contentBox ${styles.projectBox}`}>
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
      </div>
    </>
  );
}
