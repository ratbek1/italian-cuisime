import React from 'react';
import left from "../../../img/leftLine.svg";
import img1 from "../../../img/slider.img1.png"
import img2 from "../../../img/slider.img2.png"
import {DataBestSellers} from "../../../FakeBack/DataBestSellers";

const BestSellers = () => {
    return (
        <div className="container text-white py-24 flex">
            <div>
                <div className="flex items-center">
                    <div>
                        <img src={left} className="ml-3" alt=""/>
                        <div className="w-[55px] h-[3px] my-1 bg-red-600"></div>
                    </div>
                    <h1 className="title text-4xl mx-8">{DataBestSellers.title}</h1>
                </div>
                <h1 className="font-serif text-4xl w-80 py-10">{DataBestSellers.BigTitle}</h1>
                <p className="w-[48%]">{DataBestSellers.smallText}</p>
            </div>
            <div className="flex">
                <img src={img1} alt=""/>
                <img src={img2} alt=""/>
            </div>
        </div>
    );
};

export default BestSellers;