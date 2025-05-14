import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductImages from "../components/ProductImages";

import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const Product = () => {
    const { productId } = useParams();
    const { products, currency } = useContext(ShopContext);
    const [productData, setProductData] = useState(null);
    const [image, setImage] = useState("");
    const [size, setSize] = useState("");

    const fetchProductData = async () => {
        products.map((item) => {
            if (item._id == productId) {
                setProductData(item);
                setImage(item.image[0]);
                console.log(item);
            }
        });
    };

    useEffect(() => {
        fetchProductData();
    }, [productId]);
    return productData ? (
        <div class="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
            {/* ****Product Data****** */}
            <div class="flex gap-12 sm:gap-12 flex-col sm:flex-row">
                {/* Product Image */}
                <ProductImages featureImg={image} thumbImg={productData.image} setImage={setImage} />

                {/* product infoooo */}
                <div class="flex-1">
                    <h1 class="font-medium text-2xl mt-2">{productData.name}</h1>
                    <div class=" flex items-center gap-1 mt-2">
                        <img src={assets.star_icon} alt="" calss="w-3 5" />
                        <img src={assets.star_icon} alt="" calss="w-3 5" />
                        <img src={assets.star_icon} alt="" calss="w-3 5" />
                        <img src={assets.star_icon} alt="" calss="w-3 5" />
                        <img src={assets.star_dull_icon} alt="" calss="w-3 5" />
                        <p class="pl-2">(122)</p>
                    </div>
                    <p class="mt-5 text-3xl font-medium">
                        {currency}
                        {productData.price}
                    </p>
                    <p class="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
                    <div class="flex flex-col gap-4 my-8">
                        <p>Select Size</p>
                        <div class="flex gap-2">
                            {productData.sizes.map((item, index) => {
                                return (
                                    <button key={index} class={`border py-2 px-4 bg-gray-100 ${item == size ? "border-orange-500" : ""}`} onClick={() => setSize(item)}>
                                        {item}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <button class="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">ADD TO CART</button>
                    <hr class="mt-8 sm:w-4/5"></hr>
                    <div class="text-sm text-gray-500 mt-5 flex flex-col gap-1">
                        <p>100% Original product.</p>
                        <p>Cash on delivery is available on this product.</p>
                        <p>Easy return and exchange policy within 7 days.</p>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div clas="opacity-0"></div>
    );
};

export default Product;
