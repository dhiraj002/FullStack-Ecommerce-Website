import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContex";
import { assets } from "../assets/assets";

const Collection = () => {
    const { products } = useContext(ShopContext);
    const [showFilters, setShowFilters] = React.useState(false);
    return (
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
            {/* filter options */}
            <div class="min-w-60">
                <p class="my-2 text-xl flex items-center cursor-pointer gap-2" onClick={() => setShowFilters(!showFilters)}>
                    FILTERS
                    <img class={`h-3 sm:hidden ${showFilters ? "rotate-90" : ""} `} src={assets.dropdown_icon} alt="" />
                </p>
                {/* categores filfter */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6  sm:block ${showFilters ? "" : "hidden"}`}>
                    <p class="mb-3 text-sm font-medium">CATEGORIES</p>
                    <div class="flex flex-col gap-2 text-sm font-light text-gray-700">
                        <p class="flex gap-2">
                            <input class="w-3" type="checkbox" value="Men" /> Men
                        </p>
                        <p class="flex gap-2">
                            <input class="w-3" type="checkbox" value="Women" /> Women
                        </p>
                        <p class="flex gap-2">
                            <input class="w-3" type="checkbox" value="Kids" /> kids
                        </p>
                    </div>
                </div>
                {/* subCategory filter */}
                <div class={`border border-gray-300 pl-5 py-3 my-5  sm:block ${showFilters ? "" : "hidden"}`}>
                    <p class="mb-3 text-sm font-medium">TYPE</p>
                    <div class="flex flex-col gap-2 text-sm font-light text-gray-700">
                        <p class="flex gap-2">
                            <input class="w-3" type="checkbox" value="Topwear" /> Topwear
                        </p>
                        <p class="flex gap-2">
                            <input class="w-3" type="checkbox" value="Bottomwear" /> Bottomwear
                        </p>
                        <p class="flex gap-2">
                            <input class="w-3" type="checkbox" value="Winterwear" /> Winterwear
                        </p>
                    </div>
                </div>
            </div>
            {/* right seide section */}
        </div>
    );
};

export default Collection;
