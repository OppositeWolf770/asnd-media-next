import styles from "@/styles/pages/portfolio.module.sass";

export const slides = [
    {
        id: 1,
        header: "Bee Placeholder",
        slides: [
            { url: "/images/bee_assets/bees.jpg" },
            { url: "/images/bee_assets/bees_2.jpg" },
            { url: "/images/bee_assets/bees_honey.jpg" },
        ],
        style: styles.headerLeft
    },
    {
        id: 2,
        header: "Red Barn",
        slides: [
            { url: "/images/red-barn.jpg" },
        ],
        style: styles.headerRight
    },
    {
        id: 3,
        header: "Efird Leather",
        slides: [
            { url: "/images/efird-leather.JPG" },
        ],
        style: styles.headerLeft
    },
    {
        id: 4,
        header: "Spirited Recreations",
        slides: [
            { url: "/images/Spirited-Recreations.jpg" },
        ],
        style: styles.headerRight
    },
    {
        id: 5,
        header: "2 Crafty Sisters",
        slides: [
            { url: "/images/2-Crafty-Sisters.jpg" },
        ],
        style: styles.headerLeft
    },
]