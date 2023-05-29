import React from 'react';
import {AiFillInstagram, AiOutlineArrowRight} from "react-icons/ai";
import {BsTelephoneOutboundFill} from "react-icons/bs";
import {GrMail} from "react-icons/gr";
import {FaTelegramPlane} from "react-icons/fa";

const VisitRestaurant = () => {
    return (
        <div className="w-[90%] mx-auto flex sm:flex-col md:flex-row md:justify-between flex-col pb-24 ">
            <div>
                <div className="flex items-center text-[#FFFFFF] ">
                    <svg width="52" height="16" viewBox="0 0 52 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M51.2598 8.99238H12.2598C9.25977 7.99238 9.25977 2.99238 12.2598 1.49238C14.5451 0.349559 19.7598 0.992432 19.2598 5.99238"
                            stroke="#EF272C" strokeWidth="2"/>
                        <line y1="14.9924" x2="51.2599" y2="14.9924" stroke="#EF272C" strokeWidth="2"/>
                    </svg>
                    <h1 className="title text-4xl">Visit Restaurant</h1>
                </div>
                <h1 className="font-serif font-semibold text-4xl text-[#FFFFFF] py-12">Join Us for <br/>
                    Happy Hours
                </h1>
                <h2 className="font-mono font-medium text-xl text-[#EF272C] pb-1">Your neighborhood</h2>

                <h3 className="font-mono font-medium text-xl text-[#FFFFFF] pb-5">225$.Lake Ave.Suite 1150 <br/>
                    Pasadena,CA 911101</h3>

                <h2 className="font-mono font-medium text-xl text-[#EF272C] pb-1">Opening hours:</h2>
                <h3 className="font-mono font-medium text-xl text-[#FFFFFF]">Mon-Thu: 10:00 am - 01:00 <br/>am</h3>
                <h3 className="font-mono font-medium text-xl text-[#FFFFFF] pb-10">Fri-Sun: 10:00 am - 02:00 am</h3>
                <div className="flex flex-col items-start">
                    <div className="bg-[#EF272C] h-0.5 w-[120px] ml-[100px]"></div>
                    <div
                        className="font-Spartan cursor-pointer py-2 px-8 border-2 border-[#EF272C] my-3 flex justify-between uppercase text-[#FFFFFF]">
                        Purchase gift card <AiOutlineArrowRight/>
                    </div>
                    <div className="bg-[#EF272C] h-0.5 mr-auto w-[120px]"></div>
                </div>
            </div>
            <div>
                <div className="bg-[#EF272C] opacity-70 shadow-[5px 8px 26px rgba(86, 9, 187, 0.1)] p-10 md:p-5">
                    <div>
                        <h1 className="text-2xl pb-2">contact Info</h1>
                        <h1 className="flex items-center pb-2 text-2xl"><BsTelephoneOutboundFill/>+771219900</h1>
                        <h1 className="flex items-center pb-8 text-2xl"><GrMail/>motionweb312@gmail.com</h1>
                        <h1 className="flex items-center pb-3 text-2xl"><FaTelegramPlane/><AiFillInstagram/></h1>
                    </div>
                    <div className="flex justify-center items-center">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6625.682024834448!2d74.5846077391323!3d42.87713881335654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec81f4a0a30a7%3A0xebed4865356709e4!2z0JrRi9GA0LPRi9C30YHQutCw0Y8g0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QsNGPINGE0LjQu9Cw0YDQvNC-0L3QuNGPINC40LwuINCiLiDQodCw0YLRi9C70LPQsNC90L7QstCw!5e0!3m2!1sru!2skg!4v1684575998999!5m2!1sru!2skg"
                                width="450" height="250"
                                style={{
                                    border:0,
                                    padding:"10px 20px"
                        }} allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisitRestaurant;