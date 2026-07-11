import "./Toast.css";

import { FaCheckCircle } from "react-icons/fa";

export default function Toast({

    open,

    product,

}) {

    if (!open || !product) return null;

    return (

        <div className="toast">

            <div className="toast-icon">

                <FaCheckCircle />

            </div>

            <img

                src={product.image}

                alt={product.name}

            />

            <div className="toast-info">

                <h4>

                    Added to Shopping Bag

                </h4>

                <span>

                    {product.name}

                </span>

            </div>

        </div>

    );

}