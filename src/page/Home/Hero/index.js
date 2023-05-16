import React from 'react';
import {DataHero} from "../../../FakeBack/DataHero";

const Hero = () => {
    return (
        <div id="hero">
            <div className="container text-white text-center py-60">
                <div className="flex items-end justify-center">
                    <div className="w-[100px] h-[5px] bg-red-600"></div>
                    <h2 className="">{DataHero.title}</h2>
                    <div className="w-[100px] h-[5px] bg-red-600"></div>
                </div>
                <h1 className="font-bold text-6xl">{DataHero.bigText}</h1>
                <p className="w-[32%] mx-auto">{DataHero.smallText}</p>
                <div>
                    <button>Reserve Your Table </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;