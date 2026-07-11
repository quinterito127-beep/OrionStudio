import "./Reviews.css";
import FadeIn from "../FadeIn/FadeIn";

const reviews = [
    {
        id: 1,
        name: "Michael Brown",
        job: "Marathon Runner",
        avatar: "M",
        review:
            "Walking in these feels incredibly natural. They're lightweight, responsive and comfortable even after long training sessions.",
    },
    {
        id: 2,
        name: "Emma Wilson",
        job: "Fitness Coach",
        avatar: "E",
        review:
            "The perfect combination of premium design and everyday comfort. They instantly became my favorite sneakers.",
    },
    {
        id: 3,
        name: "Daniel Carter",
        job: "Creative Director",
        avatar: "D",
        review:
            "Clean design, premium materials and outstanding comfort. They look as good in the office as they do on weekends.",
    },
];

export default function Reviews() {
    return (
        <section className="reviews">

            <FadeIn>

                <div className="reviews-header">

                    <p>TESTIMONIALS</p>

                    <h2>
                        Loved by People Everywhere.
                    </h2>

                    <span>
                        Thousands of customers trust OrionStudio for comfort,
                        quality and timeless style.
                    </span>

                </div>

            </FadeIn>

            <div className="reviews-grid">

                {reviews.map((review, index) => (

                    <FadeIn
                        key={review.id}
                        delay={index * 0.15}
                    >

                        <article className="review-card">

                            <div className="quote-mark">
                                “
                            </div>

                            <div className="review-avatar">
                                {review.avatar}
                            </div>

                            <p className="review-text">
                                {review.review}
                            </p>

                            <div className="review-divider"></div>

                            <div className="review-footer">

                                <div>

                                    <h3>
                                        {review.name}
                                    </h3>

                                    <span>
                                        {review.job}
                                    </span>

                                </div>

                                <div className="review-stars">
                                    ★★★★★
                                </div>

                            </div>

                        </article>

                    </FadeIn>

                ))}

            </div>

        </section>
    );
}