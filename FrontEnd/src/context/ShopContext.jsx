import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
    const currency = "$";
    const deliveryFee = 10;
    const [searchQuery, setSearchQuery] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});

    const addToCart = async (id, size) => {
        if (!size) {
            toast.error("Please select a size");
            return;
        }
        let cartData = structuredClone(cartItems);
        console.log(size);
        if (cartData[id]) {
            if (cartData[id][size]) {
                cartData[id][size] += 1;
            } else {
                cartData[id][size] = 1;
            }
        } else {
            cartData[id] = {};
            cartData[id][size] = 1;
        }
        setCartItems(cartData);
    };

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    const value = {
        products,
        currency,
        deliveryFee,
        searchQuery,
        setSearchQuery,
        showSearch,
        setShowSearch,
        addToCart,
        cartItems,
    };

    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
