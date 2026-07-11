import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";

import products from "../../data/products";

import Shoe from "./Shoe";
import ProductInfo from "./ProductInfo";
import Navigation from "./Navigation";
import Indicators from "./Indicators";

import ProductOptionsModal from "../ProductOptionsModal/ProductOptionsModal";

import "./Hero.css";

export default function Hero() {

    const [current, setCurrent] = useState(0);

    const [modalOpen, setModalOpen] = useState(false);

    const [selectedProduct, setSelectedProduct] = useState(null);

    const intervalRef = useRef(null);

    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    function next() {

        setCurrent((prev) =>

            (prev + 1) % products.length

        );

    }

    function previous() {

        setCurrent((prev) =>

            prev === 0
                ? products.length - 1
                : prev - 1

        );

    }

    function restartSlider() {

        if (prefersReducedMotion) return;

        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {

            setCurrent((prev) =>

                (prev + 1) % products.length

            );

        }, 7000);

    }

    useEffect(() => {

        restartSlider();

        return () => clearInterval(intervalRef.current);

    }, []);

    useEffect(() => {

        restartSlider();

    }, [current]);

    function handleBuy(product) {

        setSelectedProduct(product);

        setModalOpen(true);

    }

    function closeModal() {

        setModalOpen(false);

    }

    function handleNext() {

        next();

    }

    function handlePrevious() {

        previous();

    }

    return (

        <>

            <section

                className="hero"

                id="hero"

                style={{
                    background: products[current].color,
                }}

                onMouseEnter={() =>
                    clearInterval(intervalRef.current)
                }

                onMouseLeave={restartSlider}

            >

                <Navigation

                    next={handleNext}

                    previous={handlePrevious}

                />

                <AnimatePresence mode="wait">

                    <div

                        key={products[current].id}

                        className="hero-container"

                    >

                        <ProductInfo

                            product={products[current]}

                            onBuy={handleBuy}

                        />

                        <Shoe

                            product={products[current]}

                        />

                    </div>

                </AnimatePresence>

                <Indicators

                    total={products.length}

                    current={current}

                />

            </section>

            <ProductOptionsModal

                open={modalOpen}

                product={selectedProduct}

                onClose={closeModal}

            />

        </>

    );

}