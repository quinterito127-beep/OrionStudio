import "./ProductOptionsModal.css";

import { useState, useEffect } from "react";

import {
    FaTimes,
    FaMinus,
    FaPlus,
} from "react-icons/fa";

import { useCart } from "../../context/CartContext";
import { useUI } from "../../context/UIContext";

const sizes = [39, 40, 41, 42, 43, 44];

export default function ProductOptionsModal({

    open,
    product,
    onClose,

}) {

    const { addToCart } = useCart();

    const {

        showToast,
        openBag,

    } = useUI();

    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {

        if (!open) {

            setSelectedSize(null);
            setQuantity(1);

        }

    }, [open]);

    useEffect(() => {

        function handleKeyDown(e) {

            if (e.key === "Escape") {

                onClose();

            }

        }

        if (open) {

            window.addEventListener("keydown", handleKeyDown);

        }

        return () =>
            window.removeEventListener(
                "keydown",
                handleKeyDown
            );

    }, [open, onClose]);

    if (!open || !product) return null;

    function handleAdd() {

        if (!selectedSize) return;

        addToCart({

            ...product,

            size: selectedSize,

            quantity,

        });

        showToast({

            ...product,

            size: selectedSize,

            quantity,

        });

        openBag();

        onClose();

    }

    return (

        <>

            <div

                className="product-modal-overlay"

                onClick={onClose}

            />

            <div

                className="product-modal"

                role="dialog"

                aria-modal="true"

                aria-labelledby="product-modal-title"

            >

                <button

                    className="modal-close"

                    onClick={onClose}

                    aria-label="Close modal"

                >

                    <FaTimes />

                </button>

                <img

                    src={product.image}

                    alt={product.name}

                    loading="lazy"

                />

                <h2 id="product-modal-title">

                    {product.name}

                </h2>

                <span className="modal-price">

                    ${product.price.toFixed(2)}

                </span>

                <div className="modal-section">

                    <h4>Select Size</h4>

                    <div className="sizes">

                        {sizes.map((size) => (

                            <button

                                key={size}

                                type="button"

                                className={
                                    selectedSize === size
                                        ? "active"
                                        : ""
                                }

                                aria-pressed={
                                    selectedSize === size
                                }

                                onClick={() =>
                                    setSelectedSize(size)
                                }

                            >

                                {size}

                            </button>

                        ))}

                    </div>

                </div>

                <div className="modal-section">

                    <h4>Quantity</h4>

                    <div className="quantity">

                        <button

                            type="button"

                            aria-label="Decrease quantity"

                            onClick={() =>
                                setQuantity(q =>
                                    Math.max(1, q - 1)
                                )
                            }

                        >

                            <FaMinus />

                        </button>

                        <span>

                            {quantity}

                        </span>

                        <button

                            type="button"

                            aria-label="Increase quantity"

                            onClick={() =>
                                setQuantity(q => q + 1)
                            }

                        >

                            <FaPlus />

                        </button>

                    </div>

                </div>

                <button

                    className="add-to-bag"

                    disabled={!selectedSize}

                    onClick={handleAdd}

                >

                    Add to Shopping Bag

                </button>

            </div>

        </>

    );

}