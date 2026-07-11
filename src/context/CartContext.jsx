import {
    createContext,
    useContext,
    useState,
    useEffect,
} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

    const [cart, setCart] = useState(() => {

        const savedCart = localStorage.getItem("orion-cart");

        return savedCart
            ? JSON.parse(savedCart)
            : [];

    });

    useEffect(() => {

        localStorage.setItem(
            "orion-cart",
            JSON.stringify(cart)
        );

    }, [cart]);

    function addToCart(product) {

        setCart((current) => {

            const existing = current.find(

                (item) =>

                    item.id === product.id &&
                    item.size === product.size

            );

            if (existing) {

                return current.map((item) =>

                    item.id === product.id &&
                        item.size === product.size

                        ? {

                            ...item,

                            quantity:

                                item.quantity +
                                product.quantity,

                        }

                        : item

                );

            }

            return [...current, product];

        });

    }

    function increaseQuantity(id, size) {

        setCart((current) =>

            current.map((item) =>

                item.id === id &&
                    item.size === size

                    ? {

                        ...item,

                        quantity: item.quantity + 1,

                    }

                    : item

            )

        );

    }

    function decreaseQuantity(id, size) {

        setCart((current) =>

            current

                .map((item) => {

                    if (

                        item.id === id &&
                        item.size === size

                    ) {

                        return {

                            ...item,

                            quantity:

                                item.quantity - 1,

                        };

                    }

                    return item;

                })

                .filter(

                    (item) => item.quantity > 0

                )

        );

    }

    function removeFromCart(id, size) {

        setCart((current) =>

            current.filter(

                (item) => !(

                    item.id === id &&
                    item.size === size

                )

            )

        );

    }

    function clearCart() {

        setCart([]);

    }

    const totalItems = cart.reduce(

        (total, item) =>

            total + item.quantity,

        0

    );

    const totalPrice = cart.reduce(

        (total, item) =>

            total +

            item.price * item.quantity,

        0

    );

    return (

        <CartContext.Provider

            value={{

                cart,

                addToCart,

                increaseQuantity,

                decreaseQuantity,

                removeFromCart,

                clearCart,

                totalItems,

                totalPrice,

            }}

        >

            {children}

        </CartContext.Provider>

    );

}

export function useCart() {

    return useContext(CartContext);

}