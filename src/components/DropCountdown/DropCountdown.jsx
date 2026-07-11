import Particles from "../Particles/Particles";
import FadeIn from "../FadeIn/FadeIn";
import "./DropCountdown.css";
import { useEffect, useState } from "react";
import products from "../../data/products";

export default function DropCountdown() {

    const targetDate = new Date("2026-08-15T18:00:00");

    const calculateTimeLeft = () => {

        const difference = targetDate - new Date();

        if (difference <= 0) {

            return {
                days: "00",
                hours: "00",
                minutes: "00",
                seconds: "00",
            };

        }

        return {

            days: String(
                Math.floor(difference / (1000 * 60 * 60 * 24))
            ).padStart(2, "0"),

            hours: String(
                Math.floor(
                    (difference / (1000 * 60 * 60)) % 24
                )
            ).padStart(2, "0"),

            minutes: String(
                Math.floor(
                    (difference / (1000 * 60)) % 60
                )
            ).padStart(2, "0"),

            seconds: String(
                Math.floor(
                    (difference / 1000) % 60
                )
            ).padStart(2, "0"),

        };

    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {

        const timer = setInterval(() => {

            setTimeLeft(calculateTimeLeft());

        }, 1000);

        return () => clearInterval(timer);

    }, []);

    return (

        <section className="drop">

            <Particles />

            <div className="drop-background">

                <img
                    src={products[4].image}
                    alt="Exclusive Drop"
                />

            </div>

            <div className="drop-content">

                <FadeIn x={-80}>

                    <div className="drop-left">

                        <span className="drop-badge">
                            ● LIMITED DROP
                        </span>

                        <h2>
                            DROP 07
                        </h2>

                        <p>
                            Our most exclusive sneaker collection
                            launches very soon.
                        </p>

                        <FadeIn delay={0.35}>

                            <button>
                                Notify Me
                            </button>

                        </FadeIn>

                    </div>

                </FadeIn>

                <FadeIn x={80} delay={0.15}>

                    <div className="drop-right">

                        <div className="countdown">

                            <FadeIn delay={0.2}>
                                <div className="time-card">
                                    <h3>{timeLeft.days}</h3>
                                    <span>Days</span>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.3}>
                                <div className="time-card">
                                    <h3>{timeLeft.hours}</h3>
                                    <span>Hours</span>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.4}>
                                <div className="time-card">
                                    <h3>{timeLeft.minutes}</h3>
                                    <span>Minutes</span>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.5}>
                                <div className="time-card">
                                    <h3>{timeLeft.seconds}</h3>
                                    <span>Seconds</span>
                                </div>
                            </FadeIn>

                        </div>

                        <FadeIn delay={0.65}>

                            <div className="stock">

                                <div className="stock-header">

                                    <span>Only 27 pairs remaining</span>

                                    <strong>82%</strong>

                                </div>

                                <div className="stock-bar">

                                    <div className="stock-progress"></div>

                                </div>

                            </div>

                        </FadeIn>

                    </div>

                </FadeIn>

            </div>

        </section>

    );

}