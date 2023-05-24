import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {IoIosArrowDropleftCircle} from "react-icons/io";


const Header = () => {
    const [burger, setBurger] = useState(false)
    return (
        <div className="z-50 sticky top-0 bg-[#1B2026] relative">
            <div className="container flex justify-between items-center text-white py-5">
                <Link to={"/"}>
                    <h1 className="font-serif font-bold text-2xl ">Restaurant</h1>
                </Link>
                <div className="hidden md:flex md:items-center">
                    <Link to={"/interior"} className="md:mx-8  hover:text-red-600">Interior</Link>
                    <Link to={"/about"} className="md:mx-8  hover:text-red-600">About Us</Link>
                    <Link to={"/menu"} className="md:mx-8  hover:text-red-600">Menu</Link>
                    <Link to={"/contact"} className="md:mx-8  hover:text-red-600">Contacts</Link>
                </div>
                <ul style={{
                    transition: "800ms",
                    transform: burger ? "" : "translateX(-800px)"
                }} className="md:hidden bg-[#1B2026] border-t-2 w-full min-h-[100vh] absolute left-0 top-[70px]">
                    <li className="my-6 pt-16 ml-20 text-2xl"><a href="">Interior</a></li>
                    <li className="my-6 ml-20 text-2xl"><a href="">About Us</a></li>
                    <li className="my-6 ml-20 text-2xl"><a href="">Menu</a></li>
                    <li className="my-6 ml-20 text-2xl"><a href="">Contacts</a></li>
                    <div className="flex ml-20 text-3xl text-gray-500">
                        <h1 className="hover:text-white hover:border-b-2">EN</h1>
                        <h1 className="mx-5 hover:text-white hover:border-b-2">RU</h1>
                        <h1 className=" hover:text-white hover:border-b-2">KG</h1>
                    </div>
                </ul>
                <div className="relative">
                    <div className="hidden absolute inset-y-0 left-0 lg:flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                             stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    <input type="text" id="default-search"
                           className=" hidden lg:block w-[187px] h-[37px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg
                            bg-gray-50 border-0   dark:bg-red-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                           placeholder="Search" required/>
                </div>
                <div className=" hidden md:block">
                    <select className="bg-transparent rounded-[9px] font-serif outline-0 text-sm cursor-pointer">
                        <option className="bg-red-700">En</option>
                        <option className="bg-red-700">Ru</option>
                        <option className="bg-red-700">Kg</option>
                    </select>
                </div>
                <button style={{display: burger ? "none" : "block"}}
                    onClick={() => setBurger(true)} className="absolute right-10">
                    <div className="md:hidden my-1 rounded-[5px] ml-3 w-4 h-[2px] bg-white"></div>
                    <div className="md:hidden my-1 rounded-[5px] ml-3 w-4 h-[2px] bg-white"></div>
                    <div className="md:hidden my-1 rounded-[5px] w-7 h-[2px] bg-white"></div>
                    <div className="md:hidden my-1 rounded-[5px] w-7 h-[2px] bg-white"></div>
                </button>
                <button style={{display: burger ? "block" : "none"}}
                    onClick={() => setBurger(false)} className="absolute right-8 text-4xl">
                        <IoIosArrowDropleftCircle/>
                </button>
            </div>
        </div>
    );
};

export default Header;