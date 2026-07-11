import "./SneakerBag.css";

import {
    FaTimes,
    FaTrash,
    FaMinus,
    FaPlus,
} from "react-icons/fa";

import { useEffect } from "react";

import { useCart } from "../../context/CartContext";

export default function SneakerBag({

    open,

    onClose,

    onCheckout,

}) {

    const {

        cart,

        totalItems,

        totalPrice,

        removeFromCart,

        increaseQuantity,

        decreaseQuantity,

        clearCart,

    } = useCart();

    useEffect(() => {

        document.body.style.overflow = open
            ? "hidden"
            : "auto";

        return () => {

            document.body.style.overflow = "auto";

        };

    }, [open]);

    useEffect(() => {

        const handleEscape = (event) => {

            if (event.key === "Escape") {

                onClose();

            }

        };

        window.addEventListener("keydown", handleEscape);

        return () =>

            window.removeEventListener(
                "keydown",
                handleEscape
            );

    }, [onClose]);

    return (

        <>

            <div

                className={`bag-overlay ${open ? "active" : ""}`}

                onClick={onClose}

            />

            <aside

                className={`bag ${open ? "active" : ""}`}

                aria-hidden={!open}

                aria-label="Shopping Bag"

            >

                <div className="bag-header">

                    <h2>

                        Shopping Bag

                        <span>

                            {totalItems} items

                        </span>

                    </h2>

                    <button

                        aria-label="Close Shopping Bag"

                        onClick={onClose}

                    >

                        <FaTimes />

                    </button>

                </div>

                <div className="bag-content">

                    {

                        cart.length === 0 ? (

                            <div className="bag-empty">

                                <h3>

                                    Your bag is empty

                                </h3>

                                <p>

                                    Start exploring the collection and add your favorite sneakers.

                                </p>

                            </div>

                        ) : (

                            cart.map((product) => (

                                <article

                                    key={`${product.id}-${product.size}`}

                                    className="bag-item"

                                >

                                    <img

                                        src={product.image}

                                        alt={product.name}

                                    />

                                    <div className="bag-info">

                                        <h3>

                                            {product.name}

                                        </h3>

                                        <span>

                                            Size: {product.size}

                                        </span>

                                        <strong>

                                            ${product.price}

                                        </strong>

                                        <div className="bag-quantity">

                                            <button

                                                aria-label="Decrease quantity"

                                                onClick={() =>

                                                    decreaseQuantity(

                                                        product.id,

                                                        product.size

                                                    )

                                                }

                                            >

                                                <FaMinus />

                                            </button>

                                            <span>

                                                {product.quantity}

                                            </span>

                                            <button

                                                aria-label="Increase quantity"

                                                onClick={() =>

                                                    increaseQuantity(

                                                        product.id,

                                                        product.size

                                                    )

                                                }

                                            >

                                                <FaPlus />

                                            </button>

                                        </div>

                                    </div>

                                    <button

                                        className="bag-delete"

                                        aria-label="Remove product"

                                        onClick={() =>

                                            removeFromCart(

                                                product.id,

                                                product.size

                                            )

                                        }

                                    >

                                        <FaTrash />

                                    </button>

                                </article>

                            ))

                        )

                    }

                </div>

                {

                    cart.length > 0 && (

                        <div className="bag-footer">

                            <div className="bag-total">

                                <span>

                                    Total

                                </span>

                                <strong>

                                    ${totalPrice.toFixed(2)}

                                </strong>

                            </div>

                            <button

                                className="clear-bag"

                                onClick={clearCart}

                            >

                                Clear Bag

                            </button>

                            <button

                                className="checkout-btn"

                                onClick={onCheckout}

                            >

                                Checkout

                            </button>

                        </div>

                    )

                }

            </aside>

        </>

    );

}