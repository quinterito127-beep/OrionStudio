import {
    createContext,
    useContext,
    useState,
} from "react";

const UIContext = createContext();

export function UIProvider({ children }) {

    const [bagOpen, setBagOpen] = useState(false);

    const [checkoutOpen, setCheckoutOpen] = useState(false);

    const [orderSuccessOpen, setOrderSuccessOpen] = useState(false);

    const [toast, setToast] = useState({
        open: false,
        product: null,
    });

    function openBag() {

        setBagOpen(true);

    }

    function closeBag() {

        setBagOpen(false);

    }

    function openCheckout() {

        setBagOpen(false);

        setCheckoutOpen(true);

    }

    function closeCheckout() {

        setCheckoutOpen(false);

    }

    function openOrderSuccess() {

        setCheckoutOpen(false);

        setOrderSuccessOpen(true);

    }

    function closeOrderSuccess() {

        setOrderSuccessOpen(false);

    }

    function showToast(product) {

        setToast({

            open: true,

            product,

        });

        setTimeout(() => {

            setToast({

                open: false,

                product: null,

            });

        }, 3000);

    }

    return (

        <UIContext.Provider

            value={{

                bagOpen,
                openBag,
                closeBag,

                checkoutOpen,
                openCheckout,
                closeCheckout,

                orderSuccessOpen,
                openOrderSuccess,
                closeOrderSuccess,

                toast,
                showToast,

            }}

        >

            {children}

        </UIContext.Provider>

    );

}

export function useUI() {

    return useContext(UIContext);

}