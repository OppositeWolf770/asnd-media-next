import ProjectItem from "@/components/pages/Home/ProjectItem";

import styles from '../../../styles/components/Home/projects.module.sass'
import { projectItems } from "@/components/data/projectItems";

export default function Projects() {
    return (
        <>
            <div className={styles.projects}>
                {projectItems.map((projectItem) => (
                    <ProjectItem img={projectItem.img} name={projectItem.name} key={projectItem.id} />
                ))}
            </div>
        </>
    )
}