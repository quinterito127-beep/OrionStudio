import { motion } from "framer-motion";

export default function Shoe({ product }) {
    return (
        <motion.div
            className="shoe-container"
            initial={{
                opacity: 0,
                x: 120,
                rotate: 15,
            }}
            animate={{
                opacity: 1,
                x: 0,
                rotate: -10,
            }}
            exit={{
                opacity: 0,
                x: -120,
                rotate: -20,
            }}
            transition={{
                duration: 0.6,
            }}
        >
            <div
                className="shoe-glow"
                style={{
                    background: product.glow,
                }}
            />

            <img
                src={product.image}
                alt={product.name}
                className="shoe-image"
            />
        </motion.div>
    );
}