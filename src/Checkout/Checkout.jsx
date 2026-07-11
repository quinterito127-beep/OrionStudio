import "./Checkout.css";

import { useState } from "react";

import {
    FaTimes,
    FaLock,
} from "react-icons/fa";

import { useUI } from "../context/UIContext";
import { useCart } from "../context/CartContext";

export default function Checkout() {

    const {
        checkoutOpen,
        closeCheckout,
    } = useUI();

    const {
        cart,
        totalPrice,
        clearCart,
    } = useCart();

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        zip: "",
        country: "",
    });

    function handleChange(e) {

        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });

    }

    function handleSubmit(e) {

        e.preventDefault();

        const values = Object.values(form);

        if (values.some(value => value.trim() === "")) {

            alert("Please complete all fields.");

            return;

        }

        alert("Order completed successfully!");

        clearCart();

        closeCheckout();

    }

    if (!checkoutOpen) return null;

    const shipping = 0;

    const taxes = totalPrice * 0.08;

    const finalTotal = totalPrice + shipping + taxes;

    return (

        <>

            <div
                className="checkout-overlay"
                onClick={closeCheckout}
            />

            <section className="checkout">

                <div className="checkout-header">

                    <h2>

                        Secure Checkout

                    </h2>

                    <button
                        onClick={closeCheckout}
                    >

                        <FaTimes />

                    </button>

                </div>

                <div className="checkout-content">

                    <form
                        className="checkout-left"
                        onSubmit={handleSubmit}
                    >

                        <h3>

                            Customer Information

                        </h3>

                        <div className="checkout-grid">

                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={form.firstName}
                                onChange={handleChange}
                            />

                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={form.lastName}
                                onChange={handleChange}
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={form.email}
                                onChange={handleChange}
                            />

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone"
                                value={form.phone}
                                onChange={handleChange}
                            />

                        </div>

                        <input
                            className="checkout-full"
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={form.address}
                            onChange={handleChange}
                        />

                        <div className="checkout-grid">

                            <input
                                type="text"
                                name="city"
                                placeholder="City"
                                value={form.city}
                                onChange={handleChange}
                            />

                            <input
                                type="text"
                                name="zip"
                                placeholder="ZIP Code"
                                value={form.zip}
                                onChange={handleChange}
                            />

                        </div>

                        <input
                            className="checkout-full"
                            type="text"
                            name="country"
                            placeholder="Country"
                            value={form.country}
                            onChange={handleChange}
                        />

                        <button
                            className="complete-order"
                            type="submit"
                        >

                            <FaLock />

                            Complete Order

                        </button>

                    </form>

                    <div className="checkout-right">

                        <h3>

                            Order Summary

                        </h3>

                        <div className="checkout-products">

                            {

                                cart.map(item => (

                                    <div
                                        className="checkout-item"
                                        key={`${item.id}-${item.size}`}
                                    >

                                        <img
                                            src={item.image}
                                            alt={item.name}
                                        />

                                        <div>

                                            <h4>

                                                {item.name}

                                            </h4>

                                            <span>

                                                Size {item.size}

                                            </span>

                                            <p>

                                                Qty {item.quantity}

                                            </p>

                                        </div>

                                        <strong>

                                            ${(item.price * item.quantity).toFixed(2)}

                                        </strong>

                                    </div>

                                ))

                            }

                        </div>

                        <div className="summary-row">

                            <span>

                                Subtotal

                            </span>

                            <strong>

                                ${totalPrice.toFixed(2)}

                            </strong>

                        </div>

                        <div className="summary-row">

                            <span>

                                Shipping

                            </span>

                            <strong>

                                Free

                            </strong>

                        </div>

                        <div className="summary-row">

                            <span>

                                Taxes

                            </span>

                            <strong>

                                ${taxes.toFixed(2)}

                            </strong>

                        </div>

                        <div className="summary-total">

                            <span>

                                Total

                            </span>

                            <strong>

                                ${finalTotal.toFixed(2)}

                            </strong>

                        </div>

                    </div>

                </div>

            </section>

        </>

    );

}