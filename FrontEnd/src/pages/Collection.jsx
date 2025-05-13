import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContex";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import CheckboxFilter from "../components/CheckboxFilter";

const Collection = () => {
    const { products } = useContext(ShopContext);
    const [showFilters, setShowFilters] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedSubCategory, setSelectedSubCategory] = useState([]);

    const [sortType, setSortType] = useState("relavent");

    const handleCategoryChange = (e) => {
        if (selectedCategory.includes(e.target.value)) {
            setSelectedCategory((prev) => prev.filter((item) => item !== e.target.value));
        } else {
            setSelectedCategory((prev) => [...prev, e.target.value]);
        }
    };

    const handleSubCategoryChange = (e) => {
        if (selectedSubCategory.includes(e.target.value)) {
            setSelectedSubCategory((prev) => prev.filter((item) => item !== e.target.value));
        } else {
            setSelectedSubCategory((prev) => [...prev, e.target.value]);
        }
    };

    let applyFilters = () => {
        let producCopy = [...products];
        if (selectedCategory.length > 0) {
            producCopy = producCopy.filter((item) => selectedCategory.includes(item.category));
            // setFilteredProducts(filtered);
        }
        if (selectedSubCategory.length > 0) {
            producCopy = producCopy.filter((item) => selectedSubCategory.includes(item.subCategory));
            // setFilteredProducts(filtered);
        }
        switch (sortType) {
            case "low-high":
                producCopy.sort((a, b) => a.price - b.price);
                break;
            case "high-low":
                producCopy.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }

        setFilteredProducts(producCopy);
    };

    useEffect(() => {
        applyFilters();
    }, [selectedCategory, selectedSubCategory, sortType]);

    return (
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
            {/* filter options */}
            <div className="min-w-60">
                <p className="my-2 text-xl flex items-center cursor-pointer gap-2" onClick={() => setShowFilters(!showFilters)}>
                    FILTERS
                    <img className={`h-3 sm:hidden ${showFilters ? "rotate-90" : ""} `} src={assets.dropdown_icon} alt="" />
                </p>
                {/* categores filfter */}

                <CheckboxFilter title="Categories" options={["Men", "Women", "Kids"]} selectedOptions={selectedCategory} onChange={handleCategoryChange} showFilter={showFilters} />

                {/* subCategory filter */}
                <CheckboxFilter title="Type" options={["Topwear", "Bottomwear", "Winterwear"]} selectedOptions={selectedSubCategory} onChange={handleSubCategoryChange} />
                <button
                    onClick={() => {
                        setSelectedCategory([]);
                        setSelectedSubCategory([]);
                        setSortType("relavent");
                    }}
                    className="text-sm text-blue-500 underline mt-2"
                >
                    Reset Filters
                </button>
            </div>
            {/* right seide section */}
            <div className="flex-1">
                <div className="flex justify-between text-base sm:text-2xl mb-4">
                    <Title text1={"ALL"} text2={"COLLECTIONS"} />
                    {/* Product Sort */}
                    <select className="border-2 border-gray-300 text-sm px-2" onChange={(e) => setSortType(e.target.value)} value={sortType}>
                        <option value="relavent">Sort by: Relavent</option>
                        <option value="low-high">Sort by: Low to High</option>
                        <option value="high-low">Sort by: High to Low</option>
                    </select>
                </div>
                {/* add collection images */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                    {filteredProducts.length == 0 ? "No Products Found" : filteredProducts.map((item, idx) => <ProductItem key={idx} id={item._id} name={item.name} price={item.price} image={item.image} />)}
                </div>
            </div>
        </div>
    );
};

export default Collection;
