import React from 'react';
import {NationalFoods} from "../../../../FakeBack/DataMenu";

const NationalFood = () => {
    return (
        <div>
            {
                NationalFoods.map((el) => (
                    <div className="">
                        <div className="flex items-end pb-3">
                            <h1 className="text-[#FFFFFF] font-serif text-base line-[31px]  font-Silk">
                                {el.name}
                            </h1>
                            <h5 className="px-5 text-[#FFFFFF] font-serif text-xs line-[31px] font-Silk opacity-50">
                                .....................................................................................
                            </h5>
                            <h2 className="text-[#EF272C] font-semibold text-base line-[31px] font-Silk"> $ {el.price}</h2>
                        </div>
                        <div className="flex justify-start pb-6">
                            <p className="text-[#FFFFFF] font-normal text-xs w-96  line-[20px] flex-wrap font-sans">{el.text}</p>
                            <a href="" className="text-[#FFFFFF] text-base pl-7 pt-3 underline font-Silk">Order Now</a>
                        </div>
                    </div>

                ))
            }
        </div>
    );
};

export default NationalFood;