import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => item.bestseller);

        setBestSeller(bestProduct);
    }, []);
    return (
        <div className="my-10">
            <div className="text-center py-8 text-3xl">
                <Title text1={"BEST"} text2={"Seller"} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
            </div>
            {/* rendring products */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {bestSeller.map((product, index) => {
                    return <ProductItem key={index} id={product._id} name={product.name} price={product.price} image={product.image} />;
                })}
            </div>
        </div>
    );
};

export default BestSeller;
