import React from 'react';

const Hero = () => {
    return (
        <div id="hero">
            <div className="container text-white text-center py-60">
                <div className="flex items-end justify-center">
                    <div className="w-[100px] h-[5px] bg-red-600"></div>
                    <h2 className="">Delicious</h2>
                    <div className="w-[100px] h-[5px] bg-red-600"></div>
                </div>
                <h1 className="font-bold text-6xl">Italian Cuisine</h1>
                <p className="w-[32%] mx-auto">Classic steak & delicious with delightfully unexpenced twists.
                    The Restaurant`s sunny decor was inspired by the diners</p>
                <div>
                    <button>Reserve Your Table </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;