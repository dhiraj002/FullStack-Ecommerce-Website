import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductImages from "../components/ProductImages";

import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";

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

            {/* Description and review Section */}
            <div class="mt-20">
                <div class="flex">
                    <b class="border px-5 py-3 text-sm">Description</b>
                    <p class="border px-5 py-3 text-sm">Reviews (122)</p>
                </div>
                <div class="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
                    <p>
                        An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products,
                        interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.
                    </p>
                    <p>
                        E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant
                        information.
                    </p>
                </div>
            </div>

            <div class="my-24">
                <div class=" text-center text-3xl py-2">
                    <Title text1={"RELATED "} text2={"PRODUCTS"} />
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6"></div>
            </div>
        </div>
    ) : (
        <div clas="opacity-0"></div>
    );
};

export default Product;
