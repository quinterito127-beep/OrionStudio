import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProductCard from "./ProductCard";
import products from "../data/products";

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);
    function next() {
        setCurrent((prev) => (prev + 1) % products.length);
    }

    function previous() {
        setCurrent((prev) =>
            prev === 0 ? products.length - 1 : prev - 1
        );
    }

    return (
        <section
            className="hero"
            style={{
                background: products[current].color,
            }}
        >
            <button className="nav left" onClick={previous}>
                ←
            </button>

            <AnimatePresence mode="wait">
                <motion.div
                    key={products[current].id}
                    initial={{
                        opacity: 0,
                        x: 120,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    exit={{
                        opacity: 0,
                        x: -120,
                    }}
                    transition={{
                        duration: 0.55,
                    }}
                >
                    <ProductCard product={products[current]} />
                </motion.div>
            </AnimatePresence>

            <button className="nav right" onClick={next}>
                →
            </button>
        </section>
    );
}