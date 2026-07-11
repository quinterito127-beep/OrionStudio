import "./Newsletter.css";
import { FaCheck } from "react-icons/fa";
import FadeIn from "../FadeIn/FadeIn";

export default function Newsletter() {
    return (
        <section className="newsletter">

            <FadeIn>

                <div className="newsletter-card">

                    <span className="newsletter-tag">
                        EXCLUSIVE MEMBERS
                    </span>

                    <h2>
                        Join the Orion Circle
                    </h2>

                    <p>
                        Be the first to discover exclusive sneaker drops,
                        early releases and members-only offers.
                    </p>

                    <FadeIn delay={0.2}>

                        <form className="newsletter-form">

                            <input
                                type="email"
                                placeholder="Enter your email"
                            />

                            <button type="submit">
                                Join Now
                            </button>

                        </form>

                    </FadeIn>

                    <div className="newsletter-benefits">

                        <FadeIn delay={0.35}>

                            <div>
                                <FaCheck />
                                <span>Early Access</span>
                            </div>

                        </FadeIn>

                        <FadeIn delay={0.5}>

                            <div>
                                <FaCheck />
                                <span>Limited Drops</span>
                            </div>

                        </FadeIn>

                        <FadeIn delay={0.65}>

                            <div>
                                <FaCheck />
                                <span>Members Only</span>
                            </div>

                        </FadeIn>

                    </div>

                </div>

            </FadeIn>

        </section>
    );
}