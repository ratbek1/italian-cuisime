import React from 'react';
import left from "../../../img/leftLine.svg";
import img1 from "../../../img/slider.img1.png"
import img2 from "../../../img/slider.img2.png"
import {DataBestSellers} from "../../../FakeBack/DataBestSellers";
import Slider from "react-slick";
import {TfiAngleDoubleRight} from "react-icons/tfi";

const BestSellers = () => {
    const settings = {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        speed: 1000,
        nextArrow: <TfiAngleDoubleRight color="white" />,
        swipeToSlide: true,
    };
    const settings1 = {
        infinite: true,
        slidesToShow: 2,
        swipeToSlide: true,
        arrows: false
    };

    return (
        <div className="container w-full text-white relative py-24 md:flex">
                <div>
                    <div className="flex items-center">
                        <div>
                            <img src={left} className="ml-3" alt=""/>
                            <div className="w-[55px] h-[3px] my-1 bg-red-600"></div>
                        </div>
                        <h1 className="title text-4xl mx-8">{DataBestSellers.title}</h1>
                    </div>
                    <h1 className="font-serif md:text-4xl w-80 py-10 sm:text-3xl">{DataBestSellers.BigTitle}</h1>
                    <p className="w-[48%] sm:pb-4">{DataBestSellers.smallText}</p>
                </div>
                <div className="md:w-[45%]">
                    <div className="hidden md:block">
                        <Slider  {...settings}>
                            <div className="md:px-4 sm:px-2">
                                <img src={img1} alt=""/>
                            </div>
                            <div className="md:px-4 sm:px-2">
                                <img src={img2} alt=""/>
                            </div>
                            <div className="md:px-4 sm:px-2">
                                <img src={img1} alt=""/>
                            </div>
                            <div className="md:px-4 sm:px-2">
                                <img src={img2} alt=""/>
                            </div>
                        </Slider>
                    </div>
                    <div className="md:hidden w-[2px] h-72 bg-gray-500 absolute left-0 bottom-24"></div>
                    <div className="sm:block md:hidden">
                        <Slider  {...settings1}>
                            <div className="md:px-4 sm:px-2">
                                <img src={img1} alt=""/>
                            </div>
                            <div className="md:px-4 sm:px-2">
                                <img src={img2} alt=""/>
                            </div>
                            <div className="md:px-4 sm:px-2">
                                <img src={img1} alt=""/>
                            </div>
                            <div className="md:px-4 sm:px-2">
                                <img src={img2} alt=""/>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
    );
};

export default BestSellers;