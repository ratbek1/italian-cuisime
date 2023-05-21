import React from 'react';
import left from "../../../img/leftLine.svg"
import img1 from "../../../img/about.img1.png"
import img2 from "../../../img/about.img2.png"
import {DataAboutUs} from "../../../FakeBack/DataAboutUs";

const AboutUs = () => {
    return (
        <div className="container text-white py-24">
            <div className="flex items-center py-10">
                <div>
                    <img src={left} className="ml-3" alt=""/>
                    <div className="w-[55px] h-[3px] my-1 bg-red-600"></div>
                </div>
                <h1 className="title text-4xl mx-8">{DataAboutUs.title}</h1>
            </div>
            <div className="md:flex justify-between items-center">
                <h1 className="font-serif md:text-4xl w-80 sm:my-3 text-3xl">{DataAboutUs.BigTitle}</h1>
                <p className="md:w-[42%]">{DataAboutUs.smallText}</p>
            </div>
            <div className="xl:flex justify-between pt-14">
                <img src={img1} className="object-fill sm:py-4 sm:mx-auto" alt=""/>
                <img src={img2} className="object-fill sm:py-4 sm:mx-auto" alt=""/>
            </div>
        </div>
    );
};

export default AboutUs;