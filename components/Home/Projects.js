import ProjectItem from "@/components/Home/ProjectItem";

import styles from '../../styles/components/Home/projects.module.sass'

export default function Projects() {
    return (
        <>
            <div className={styles.projects}>
                <ProjectItem img={"/images/efird-leather.JPG"} name={"Efird Leather"}></ProjectItem>
                <ProjectItem img={"/images/red-barn.jpg"} name={"Red Barn Market"}></ProjectItem>
                <ProjectItem img={"/images/Spirited-Recreations.jpg"} name={"Spirited Recreations"}></ProjectItem>
                <ProjectItem img={"/images/2-Crafty-Sisters.jpg"} name={"2 Crafty Sisters"}></ProjectItem>
                <ProjectItem img={"/images/bee_assets/bees.jpg"} name={"Bee Placeholder"}></ProjectItem>
            </div>
        </>
    )
}