export default function Collectioncard({ product }) {
    return (
        <article
            className="collection-card"
            style={{
                background: product.color,
            }}
        >
            <div className="collection-image-wrapper">

                <div
                    className="collection-glow"
                    style={{
                        background: product.accent,
                    }}
                ></div>

                <img
                    src={product.image}
                    alt={product.name}
                    className="collection-image"
                />

            </div>

            <p className="collection-subtitle">
                {product.subtitle}
            </p>

            <h3>{product.name}</h3>

            {/* ESTA LÍNEA ES LA QUE FALTA */}
            <p className="collection-price">
                ${product.price}
            </p>

            <button
                style={{
                    background: product.accent,
                }}
            >
                Explore →
            </button>

        </article>
    );
}