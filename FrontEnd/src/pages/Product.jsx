import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductImages from "../components/ProductImages";

import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import RelatedProducts from "../components/RelatedProducts";

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
            }
        });
    };

    useEffect(() => {
        fetchProductData();
    }, [productId]);
    return productData ? (
        <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
            {/* ****Product Data****** */}
            <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
                {/* Product Image */}
                <ProductImages featureImg={image} thumbImg={productData.image} setImage={setImage} />

                {/* product infoooo */}
                <div className="flex-1">
                    <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
                    <div className=" flex items-center gap-1 mt-2">
                        <img src={assets.star_icon} alt="" calss="w-3 5" />
                        <img src={assets.star_icon} alt="" calss="w-3 5" />
                        <img src={assets.star_icon} alt="" calss="w-3 5" />
                        <img src={assets.star_icon} alt="" calss="w-3 5" />
                        <img src={assets.star_dull_icon} alt="" calss="w-3 5" />
                        <p className="pl-2">(122)</p>
                    </div>
                    <p className="mt-5 text-3xl font-medium">
                        {currency}
                        {productData.price}
                    </p>
                    <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
                    <div className="flex flex-col gap-4 my-8">
                        <p>Select Size</p>
                        <div className="flex gap-2">
                            {productData.sizes.map((item, index) => {
                                return (
                                    <button key={index} className={`border py-2 px-4 bg-gray-100 ${item == size ? "border-orange-500" : ""}`} onClick={() => setSize(item)}>
                                        {item}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">ADD TO CART</button>
                    <hr className="mt-8 sm:w-4/5"></hr>
                    <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
                        <p>100% Original product.</p>
                        <p>Cash on delivery is available on this product.</p>
                        <p>Easy return and exchange policy within 7 days.</p>
                    </div>
                </div>
            </div>

            {/* Description and review Section */}
            <div className="mt-20">
                <div className="flex">
                    <b className="border px-5 py-3 text-sm">Description</b>
                    <p className="border px-5 py-3 text-sm">Reviews (122)</p>
                </div>
                <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
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

            {/* related products */}
            <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
        </div>
    ) : (
        <div clas="opacity-0"></div>
    );
};

export default Product;
