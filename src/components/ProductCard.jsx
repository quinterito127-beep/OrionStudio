import { motion } from "framer-motion";

export default function ProductCard({ product }) {
    return (
        <motion.div
            className="product-card"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="product-image">
                <img src={product.image} alt={product.name} />
            </div>

            <div className="product-info">
                <span className="subtitle">{product.subtitle}</span>

                <h1>{product.name}</h1>

                <h2>${product.price}</h2>

                <div className="sizes">
                    {product.sizes.map((size) => (
                        <button key={size}>{size}</button>
                    ))}
                </div>

                <button className="buy-btn">
                    Comprar Ahora
                </button>
            </div>
        </motion.div>
    );
}