import React from 'react';
import {FaPhone, FaRegUserCircle} from "react-icons/fa";
import Hero from "../index";

const ModalWindow = () => {
    return (
        <div className="bg-white w-52 mx-auto">
            <div className="flex items-center">
                <FaRegUserCircle/>
                <div>
                    <h1>NAME</h1>
                    <h3>|Enter your name</h3>
                </div>
            </div>
            <div className="flex items-center">
                <FaPhone/>
                <div>
                    <h1>PHONE</h1>
                    <h3>Enter your phone</h3>
                </div>
            </div>
            <button className="bg-red-600 py-2 px-5">Сontact</button>
        </div>
    );
};

export default ModalWindow;