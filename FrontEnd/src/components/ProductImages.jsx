import React from "react";

const ProductImages = ({ featureImg, thumbImg, setImage }) => {
    return (
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
            {/* thumbImhs */}
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
                {thumbImg.map((img, index) => {
                    return <img src={img} key={index} className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" onClick={() => setImage(img)} />;
                })}
            </div>

            {/* featimg */}
            <div className="w-full sm:w-[80%]">
                <img className="w-full h-auto" src={featureImg} alt="" />
            </div>
        </div>
    );
};

export default ProductImages;
