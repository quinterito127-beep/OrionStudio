import "./Footer.css";
import logo from "../../assets/OrionStudio.png";
import FadeIn from "../FadeIn/FadeIn";

import {
    FaInstagram,
    FaLinkedin,
    FaGithub,
    FaArrowUp
} from "react-icons/fa";

export default function Footer() {

    function scrollTop() {

        window.scrollTo({

            top: 0,

            behavior: "smooth",

        });

    }

    return (

        <footer className="footer">

            <div className="footer-top">

                <FadeIn x={-60}>

                    <div className="footer-brand">

                        <img
                            src={logo}
                            alt="OrionStudio Logo"
                        />

                        <h2>OrionStudio</h2>

                        <p>

                            Designed for those who move differently.
                            Premium sneakers inspired by innovation,
                            comfort and timeless design.

                        </p>

                    </div>

                </FadeIn>

                <FadeIn
                    x={60}
                    delay={0.2}
                >

                    <div className="footer-links">

                        <div>

                            <h4>Products</h4>

                            <a href="#collection">Collection</a>

                            <a href="#technology">Technology</a>

                            <a href="#features">Features</a>

                        </div>

                        <div>

                            <h4>Company</h4>

                            <a href="#">About</a>

                            <a href="#">Support</a>

                            <a href="#">Contact</a>

                        </div>

                        <div>

                            <h4>Follow</h4>

                            <a href="#" aria-label="Instagram">

                                <FaInstagram />

                                Instagram

                            </a>

                            <a href="#" aria-label="LinkedIn">

                                <FaLinkedin />

                                LinkedIn

                            </a>

                            <a href="#" aria-label="GitHub">

                                <FaGithub />

                                GitHub

                            </a>

                        </div>

                    </div>

                </FadeIn>

            </div>

            <FadeIn delay={0.35}>

                <div className="footer-bottom">

                    <span>

                        © 2026 OrionStudio.
                        All rights reserved.

                    </span>

                    <button
                        onClick={scrollTop}
                        aria-label="Back to top"
                    >

                        <FaArrowUp />

                    </button>

                </div>

            </FadeIn>

        </footer>

    );

}