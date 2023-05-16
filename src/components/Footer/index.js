import React from 'react';
import {AiFillInstagram} from "react-icons/ai";
import {FaTelegramPlane} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-black">
            <div className="container">
                <div className=" border-b-2 border-gray-500 text-white flex items-center justify-between pt-20 pb-4">
                    <h1 className="font-serif text-2xl">Restaurant</h1>
                    <div className="flex">
                        <h3 className="mx-8">interior</h3>
                        <h3 className="mx-8">About us</h3>
                        <h3 className="mx-8">Menu</h3>
                        <h3 className="mx-8">Contacts</h3>
                    </div>
                    <div className="flex">
                        <a href="" className="mr-4 text-4xl"><FaTelegramPlane/></a>
                        <a href="" className="text-4xl"><AiFillInstagram/></a>
                    </div>
                </div>
                <h3 className="text-center text-white py-6">c 2023 Motion Study LLC</h3>
            </div>
        </div>
    );
};

export default Footer;