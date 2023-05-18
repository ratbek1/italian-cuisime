import React, {useState} from 'react';
import {DataHero} from "../../../FakeBack/DataHero";
import left from "../../../img/leftLine.svg"
import right from "../../../img/rightLine.svg"
import {FiArrowRight} from "react-icons/fi";
import {BsFillGeoAltFill, BsFillTelephoneFill} from "react-icons/bs";
import ModalWindow from "./ModalWindow";

const Hero = () => {
    const [modal, setModal] = useState(false)
    return (
        <div id="hero" className="overflow-hidden">
            <div className="container text-white py-48 relative">
                <div className="flex items-end justify-center">
                    <div>
                        <img className="ml-[13px]" src={left} alt="img"/>
                        <div className="w-[55px] h-[3px] my-1 bg-red-600"></div>
                    </div>
                    <h2 className="title text-4xl mx-6">{DataHero.title}</h2>
                    <div>
                        <img src={right} alt="img"/>
                        <div className="w-[55px] h-[3px] my-1 bg-red-600"></div>
                    </div>
                </div>
                <h1 className="font-bold text-6xl py-6 text-center">{DataHero.bigText}</h1>
                <p className="w-[32%] mx-auto pb-4">{DataHero.smallText}</p>
                <div>
                    <div className="w-36 bg-red-600 h-[2px] mx-auto"></div>
                    <button  onClick={() => setModal(!modal)}
                        className="flex items-center mx-auto  bg-red-600 animate-pulse py-3 px-6 border-2 my-2 border-red-600">Reserve Your Table <span className="pl-2"><FiArrowRight/></span>
                    </button>
                    <div className="w-36 bg-red-600 h-[2px] mx-auto"></div>
                    <div style={{
                        position: "absolute",
                        right: "-450px",
                        top: "150px",
                        transform: modal ? "translateX(-600px)" : "",
                        transition: "800ms"
                    }}>
                        <ModalWindow />
                    </div>
                </div>
                <div className="w-[2px] h-96 bg-gray-500 absolute left-0 bottom-14"></div>
                <div className="flex items-center absolute left-5 bottom-10">
                    <h2>{DataHero.GeoTitle}</h2>
                    <div className="w-20 h-[2px] bg-gray-500 rounded-b mx-4"></div>
                    <a href="" className="text-red-600 mr-1">
                        <BsFillGeoAltFill/>
                    </a>
                    <p>{DataHero.GeoText}</p>
                </div>
                <div className="flex items-center absolute right-5 bottom-10">
                    <h2>{DataHero.PhoneTitle}</h2>
                    <div className="w-20 h-[2px] bg-gray-500 rounded-b mx-4"></div>
                    <a href="" className="text-red-600 mr-1">
                        <BsFillTelephoneFill/>
                    </a>
                    <a href="">{DataHero.number}</a>
                </div>
                <div className="min-w-full h-[2px] bg-gray-500 bottom-5 absolute"></div>
            </div>
        </div>
    );
};

export default Hero;