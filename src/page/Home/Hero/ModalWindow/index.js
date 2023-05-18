import React from 'react';
import {RiUserHeartFill} from "react-icons/ri";
import {ImPhone} from "react-icons/im";

const ModalWindow = () => {
    return (
        <div className="bg-[#1B2026] shadow shadow-white shadow-xl w-80 py-14 px-7 mx-auto h-72 rounded-2xl">
            <div className="flex items-center">
                <div className="bg-gray-500 w-14 h-14 rounded-[50%] flex items-center justify-center mr-4">
                    <RiUserHeartFill className="text-2xl"/>
                </div>
                <div>
                    <h1>NAME</h1>
                    <h3 className="text-xl"><span className="text-blue-700">|</span> Enter your name</h3>
                </div>
            </div>
            <div className="flex items-center my-4">
                <div className="bg-gray-500 w-14 h-14 rounded-[50%] flex items-center justify-center mr-4">
                    <ImPhone className="text-2xl text-red-600"/>
                </div>
                <div>
                    <h1>PHONE</h1>
                    <h3 className="text-xl">Enter your phone</h3>
                </div>
            </div>
            <button className="bg-red-600 w-64 h-12 rounded-[10px]">Сontact</button>
        </div>
    );
};

export default ModalWindow;