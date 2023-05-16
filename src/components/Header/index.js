import React from 'react';

const Header = () => {
    return (
        <div className="border-b-2 sticky top-0 bg-[#1B2026]">
            <div className="container flex justify-between items-center text-white py-5 ">
                <h1 className="">Restaurant</h1>
                <div className="">
                    <a href="" className="mx-8">interior</a>
                    <a href="" className="mx-8">About Us</a>
                    <a href="" className="mx-8">Menu</a>
                    <a href="" className="mx-8">Contacts</a>
                </div>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                             stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    <input type="text" id="default-search"
                           className="block w-[187px] h-[37px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg
                            bg-gray-50 border-0   dark:bg-red-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                           placeholder="Search" required/>
                </div>
                <div>
                    <select className="bg-red-600 rounded-[9px] outline-0 text-sm">
                        <option>En</option>
                        <option>Ru</option>
                        <option>Kg</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Header;