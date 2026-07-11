import shoeWhite from "../assets/shoes/shoe-white.png";
import shoeBlack from "../assets/shoes/shoe-black.png";
import shoeBlue from "../assets/shoes/shoe-blue.png";
import shoeRed from "../assets/shoes/shoe-red.png";
import shoeBeige from "../assets/shoes/shoe-beige.png";

const products = [
    {
        id: 1,
        name: "Air Motion X",
        subtitle: "Running Premium",
        description:
            "Engineered for maximum performance and exceptional all-day comfort.",
        price: 149,
        color: "#F5F7FF",
        accent: "#5B7CFF",
        glow: "#9CC8FF",
        image: shoeWhite,
        sizes: [40, 41, 42, 43, 44],
    },

    {
        id: 2,
        name: "Urban Runner",
        subtitle: "Street Collection",
        description:
            "Urban style with premium materials and a modern silhouette.",
        price: 179,
        color: "#F1F1F1",
        accent: "#222222",
        glow: "#BDBDBD",
        image: shoeBlack,
        sizes: [39, 40, 41, 42, 43],
    },

    {
        id: 3,
        name: "Velocity Pro",
        subtitle: "Sport Edition",
        description:
            "Lightweight, fast and built for intense training sessions.",
        price: 199,
        color: "#EDF5FF",
        accent: "#4A90E2",
        glow: "#4F8EF7",
        image: shoeBlue,
        sizes: [40, 41, 42, 43, 44],
    },

    {
        id: 4,
        name: "Classic Elite",
        subtitle: "Luxury Collection",
        description:
            "Elegant design with premium finishes for every occasion.",
        price: 219,
        color: "#FFF2F2",
        accent: "#E53935",
        glow: "#FF7A7A",
        image: shoeRed,
        sizes: [39, 40, 41, 42, 43],
    },

    {
        id: 5,
        name: "Future One",
        subtitle: "Modern Collection",
        description:
            "The perfect combination of technology, comfort and style.",
        price: 249,
        color: "#F9F5EC",
        accent: "#C8A96A",
        glow: "#E6C78D",
        image: shoeBeige,
        sizes: [40, 41, 42, 43, 44],
    },
];

export default products;