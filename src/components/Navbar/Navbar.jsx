import "./Navbar.css";
import logo from "../../assets/OrionStudio.png";

import { useEffect, useState } from "react";

import {
    FaBars,
    FaTimes,
    FaShoppingBag,
} from "react-icons/fa";

import SneakerBag from "../SneakerBag/SneakerBag";

import { useCart } from "../../context/CartContext";
import { useUI } from "../../context/UIContext";

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const { totalItems } = useCart();

    const {

        bagOpen,
        openBag,
        closeBag,
        openCheckout,

    } = useUI();

    useEffect(() => {

        const handleScroll = () => {

            setScrolled(window.scrollY > 50);

        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener("scroll", handleScroll);

    }, []);

    useEffect(() => {

        document.body.style.overflow =
            menuOpen || bagOpen
                ? "hidden"
                : "auto";

        return () => {

            document.body.style.overflow = "auto";

        };

    }, [menuOpen, bagOpen]);

    useEffect(() => {

        const resize = () => {

            if (window.innerWidth > 900) {

                setMenuOpen(false);

            }

        };

        window.addEventListener("resize", resize);

        return () =>
            window.removeEventListener("resize", resize);

    }, []);

    useEffect(() => {

        const handleEscape = (event) => {

            if (event.key === "Escape") {

                setMenuOpen(false);
                closeBag();

            }

        };

        window.addEventListener("keydown", handleEscape);

        return () =>
            window.removeEventListener("keydown", handleEscape);

    }, [closeBag]);

    function closeMenu() {

        setMenuOpen(false);

    }

    function toggleMenu() {

        if (bagOpen) return;

        setMenuOpen((prev) => !prev);

    }

    return (

        <>

            <header
                className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
            >

                <div className="navbar-logo">

                    <img
                        src={logo}
                        alt="OrionStudio"
                    />

                    <div className="navbar-brand">

                        <h3>OrionStudio</h3>

                        <span>Designed & Developed</span>

                    </div>

                </div>

                <nav
                    className="navbar-links"
                    aria-label="Primary Navigation"
                >

                    <a href="#hero">Home</a>

                    <a href="#collection">Collection</a>

                    <a href="#features">Features</a>

                    <a href="#technology">Technology</a>

                    <a href="#reviews">Reviews</a>

                </nav>

                <div className="navbar-actions">

                    <button
                        className="navbar-cart"
                        aria-label={`Shopping Bag (${totalItems} items)`}
                        onClick={openBag}
                    >

                        <FaShoppingBag />

                        <span>

                            {totalItems}

                        </span>

                    </button>

                    <button className="navbar-button">

                        Shop Now

                    </button>

                    <button
                        className="navbar-menu-btn"
                        aria-label={
                            menuOpen
                                ? "Close menu"
                                : "Open menu"
                        }
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                        onClick={toggleMenu}
                    >

                        {

                            menuOpen

                                ? <FaTimes />

                                : <FaBars />

                        }

                    </button>

                </div>

                <div
                    className={`navbar-overlay ${menuOpen ? "active" : ""}`}
                    onClick={closeMenu}
                />

                <aside
                    id="mobile-menu"
                    className={`mobile-menu ${menuOpen ? "active" : ""}`}
                >

                    <a href="#hero" onClick={closeMenu}>Home</a>

                    <a href="#collection" onClick={closeMenu}>Collection</a>

                    <a href="#features" onClick={closeMenu}>Features</a>

                    <a href="#technology" onClick={closeMenu}>Technology</a>

                    <a href="#reviews" onClick={closeMenu}>Reviews</a>

                    <button
                        className="mobile-shop-btn"
                        onClick={closeMenu}
                    >

                        Shop Now

                    </button>

                </aside>

            </header>

            <SneakerBag

                open={bagOpen}

                onClose={closeBag}

                onCheckout={openCheckout}

            />

        </>

    );

}