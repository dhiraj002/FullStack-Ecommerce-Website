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

    const getCartCount = function () {
        let count = 0;
        for (const item in cartItems) {
            for (const size in cartItems[item]) {
                try {
                    if (cartItems[item][size] > 0) {
                        count += cartItems[item][size];
                    }
                } catch (error) {
                    console.error("Error in getCartCount:", error);
                }
            }
        }
        return count;
    };

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
        getCartCount,
    };

    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
