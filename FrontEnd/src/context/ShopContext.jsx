import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
    const currency = "$";
    const deliveryFee = 10;
    const [searchQuery, setSearchQuery] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const value = {
        products,
        currency,
        deliveryFee,
        searchQuery,
        setSearchQuery,
        showSearch,
        setShowSearch,
    };

    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
