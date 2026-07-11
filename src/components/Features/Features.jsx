import "./Features.css";
import {
    FaBolt,
    FaShieldAlt,
    FaRocket,
} from "react-icons/fa";

import FadeIn from "../FadeIn/FadeIn";

export default function Features() {
    return (
        <section className="features" id="features">

            <FadeIn>

                <div className="features-header">

                    <p>WHY CHOOSE US</p>

                    <h2>Crafted for Every Journey.</h2>

                    <span>
                        Every pair is designed with premium materials,
                        cutting-edge technology and exceptional comfort
                        to keep you moving in style.
                    </span>

                </div>

            </FadeIn>

            <div className="features-grid">

                <FadeIn delay={0.1}>

                    <article className="feature-card">

                        <div className="feature-icon">
                            <FaBolt />
                        </div>

                        <h3>Ultra Lightweight</h3>

                        <p>
                            Engineered with lightweight materials that reduce fatigue
                            while maximizing performance.
                        </p>

                    </article>

                </FadeIn>

                <FadeIn delay={0.25}>

                    <article className="feature-card">

                        <div className="feature-icon">
                            <FaShieldAlt />
                        </div>

                        <h3>Premium Materials</h3>

                        <p>
                            Crafted with breathable fabrics and durable finishes
                            for everyday comfort.
                        </p>

                    </article>

                </FadeIn>

                <FadeIn delay={0.4}>

                    <article className="feature-card">

                        <div className="feature-icon">
                            <FaRocket />
                        </div>

                        <h3>Maximum Comfort</h3>

                        <p>
                            Advanced cushioning technology provides
                            all-day support with every step.
                        </p>

                    </article>

                </FadeIn>

            </div>

        </section>
    );
}