import "./Collection.css";
import products from "../../data/products";
import CollectionCard from "./Collectioncard";
import FadeIn from "../FadeIn/FadeIn";

export default function Collection() {
    return (
        <section className="collection" id="collection">

            <FadeIn>

                <div className="collection-header">

                    <p>FEATURED COLLECTION</p>

                    <h2>Designed for Every Step.</h2>

                    <span>
                        Explore our premium footwear collection crafted with
                        innovation, comfort and timeless design.
                    </span>

                </div>

            </FadeIn>

            <div className="collection-grid">

                {products.slice(0, 3).map((product, index) => (

                    <FadeIn
                        key={product.id}
                        delay={index * 0.15}
                    >

                        <CollectionCard
                            product={product}
                        />

                    </FadeIn>

                ))}

            </div>

        </section>
    );
}