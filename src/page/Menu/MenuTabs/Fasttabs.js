import React from 'react';
import { FastFoods} from "../../../FakeBack/DataMenu";

const Fasttabs = () => {
    return (
        <div className="flex  flex-wrap  justify-evenly ">
            {
                FastFoods.map((el) => (
                    <div
                        className=" w-[40%] m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="w-full " width="220px" src={el.img} alt=""/>
                        </a>
                        <div className="p-2 bg-amber-50 flex justify-around">
                            <div>
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#1F2731]">
                                        {el.name}</h5>
                                </a>
                                <p className="mb-3 font-normal text-[#939393] ">
                                    {el.prescription}
                                </p></div>

                            <div>
                                <h4 className="mb-2 text-2xl font-bold tracking-tight text-red-800">
                                    $ {el.price}
                                </h4>
                            </div>

                        </div>
                    </div>

                ))
            }
        </div>
    );
};

export default Fasttabs;