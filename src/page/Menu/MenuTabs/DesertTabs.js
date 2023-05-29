import React from 'react';
import desert from "../../../img/desert1.png"
import desert2 from "../../../img/desert2.png"
import desert3 from "../../../img/desert3.png"
import desert4 from "../../../img/desert4.png"
import desert5 from "../../../img/desert5.png"
import desert6 from "../../../img/desert6.png"
const desserts = [
    {
        id: 1,
        name: 'Beer Brewery',
        price: 38,
        text: "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
        prescrition: "soda,cream,milk,sugar",
        img:desert
    }, {
        id: 2,
        name: 'Burger&Pasta',
        price: 38,
        text: "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
        prescrition: "soda,cream,milk,sugar",
        img: desert2
    }, {
        id: 3,
        name: 'Beer Brewery',
        price: 38,
        text: "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
        prescrition: "soda,cream,milk,sugar",
        img: desert3
    }, {
        id: 4,
        name: 'Beer Brewery',
        price: 38,
        text: "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
        prescrition: "soda,cream,milk,sugar",
        img: desert4
    }, {
        id: 5,
        name: 'Beer Brewery',
        price: 38,
        text: "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
        prescrition: "soda,cream,milk,sugar",
        img: desert5
    }, {
        id: 6,
        name: 'Beer Brewery',
        price: 38,
        text: "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
        prescrition: "soda,cream,milk,sugar",
        img: desert6
    },
]
const DesertTabs = () => {
    return (
        <div className="flex  flex-wrap  justify-evenly ">
            {
                desserts.map((el) => (
                        <div
                            className=" w-[40%] m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="w-full " src={el.img} alt=""/>
                            </a>
                            <div className="p-2 bg-amber-50 flex justify-around">
                                <div>
                                    <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#1F2731]">
                                        {el.name}</h5>
                                </a>
                                    <p className="mb-3 font-normal text-[#939393] ">
                                        {el.prescrition}
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

export default DesertTabs;