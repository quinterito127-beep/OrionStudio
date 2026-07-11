import "./Technology.css";
import products from "../../data/products";
import FadeIn from "../FadeIn/FadeIn";

export default function Technology() {
    return (
        <section className="technology">

            <div className="technology-content">

                <FadeIn x={-200}>

                    <div className="technology-text">

                        <p className="technology-subtitle">
                            PREMIUM TECHNOLOGY
                        </p>

                        <h2>
                            Designed to Perform.
                            Built to Last.
                        </h2>

                        <span>
                            Every pair combines innovative engineering,
                            lightweight construction and premium materials
                            to deliver maximum comfort and outstanding
                            performance every single day.
                        </span>

                        <div className="technology-stats">

                            <FadeIn delay={0.2} y={30}>

                                <div className="stat-card">
                                    <h3>15K+</h3>
                                    <p>Happy Customers</p>
                                </div>

                            </FadeIn>

                            <FadeIn delay={0.35} y={30}>

                                <div className="stat-card">
                                    <h3>4.9★</h3>
                                    <p>Customer Rating</p>
                                </div>

                            </FadeIn>

                            <FadeIn delay={0.5} y={30}>

                                <div className="stat-card">
                                    <h3>250+</h3>
                                    <p>Premium Models</p>
                                </div>

                            </FadeIn>

                        </div>

                        <FadeIn delay={0.65}>

                            <button className="technology-btn">
                                Discover More
                            </button>

                        </FadeIn>

                    </div>

                </FadeIn>

                <FadeIn x={200} delay={0.35}>

                    <div className="technology-image">

                        <div className="technology-circle"></div>

                        <img
                            src={products[2].image}
                            alt="Technology Shoe"
                        />

                    </div>

                </FadeIn>

            </div>

        </section>
    );
}