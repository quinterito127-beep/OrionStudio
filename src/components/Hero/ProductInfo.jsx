import { motion } from "framer-motion";

export default function ProductInfo({

    product,

    onBuy,

}) {

    return (

        <motion.div

            className="product-info"

            initial={{
                opacity: 0,
                x: -80,
            }}

            animate={{
                opacity: 1,
                x: 0,
            }}

            exit={{
                opacity: 0,
                x: -80,
            }}

            transition={{
                duration: 0.6,
            }}

        >

            <p className="subtitle">

                {product.subtitle}

            </p>

            <h1>

                {product.name}

            </h1>

            <p className="description">

                {product.description}

            </p>

            <h2 className="price">

                ${product.price}

            </h2>

            <div className="sizes">

                {product.sizes.map((size) => (

                    <button key={size}>

                        {size}

                    </button>

                ))}

            </div>

            <button

                className="buy-btn"

                onClick={() => onBuy(product)}

            >

                Buy Now

            </button>

        </motion.div>

    );

}