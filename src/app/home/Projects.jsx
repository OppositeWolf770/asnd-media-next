import ProjectItem from "./ProjectItem";

import styles from "./projects.module.scss";
import { projectItems } from "src/components/data/projectItems";

export default function Projects() {
  return (
    <>
      <div className={styles.projects}>
        {projectItems.map((projectItem) => (
          <ProjectItem
            img={projectItem.img}
            name={projectItem.name}
            key={projectItem.id}
          />
        ))}
      </div>
    </>
  );
}
