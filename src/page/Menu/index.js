import React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import DesertTabs from "./MenuTabs/DesertTabs";
import HotTabs from "./MenuTabs/HotTabs";
import ColdTAbs from "./MenuTabs/ColdTAbs";
import Nationaltabs from "./MenuTabs/nationaltabs";
import EasternTabs from "./MenuTabs/EasternTabs";
import Fasttabs from "./MenuTabs/Fasttabs";

const Menu = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="flex container py-20">
            <TabContext value={value}>

                <div className="flex flex-col bg-[#1F2731] h-max mb-5 sm:mb-5 w-[40%]">
                            <Tab onChange={handleChange} className="  py-4 font-Silk w-full text-[#FFFFFF] font-semibold text-base line-[37px] focus:bg-[#EF272C]" label="Deserts" value="1"/>
                            <Tab onChange={handleChange} className="px-28   py-4 font-Silk w-full text-[#FFFFFF] font-semibold text-base line-[37px] focus:bg-[#EF272C]"  label="Hot drinks" value="2"/>
                            <Tab onChange={handleChange} className="px-28   py-4 font-Silk w-full text-[#FFFFFF] font-semibold text-base line-[37px] focus:bg-[#EF272C]"  label="Cold drinks" value="3"/>
                            <Tab onChange={handleChange} className="px-28   py-4 font-Silk w-full text-[#FFFFFF] font-semibold text-base line-[37px] focus:bg-[#EF272C]"  label="National foods" value="4"/>
                            <Tab onChange={handleChange} className="px-28   py-4 font-Silk w-full text-[#FFFFFF] font-semibold text-base line-[37px] focus:bg-[#EF272C]"  label="Eastern cuisine" value="5"/>
                            <Tab onChange={handleChange} className="px-28   py-4 font-Silk w-full text-[#FFFFFF] font-semibold text-base line-[37px] focus:bg-[#EF272C]"  label="Fast food" value="6"/>
                </div>

                <TabPanel value="1"><DesertTabs/></TabPanel>
                <TabPanel value="2"><HotTabs/></TabPanel>
                <TabPanel value="3"><ColdTAbs/></TabPanel>
                <TabPanel value="4"><Nationaltabs/></TabPanel>
                <TabPanel value="5"><EasternTabs/></TabPanel>
                <TabPanel value="6"><Fasttabs/></TabPanel>
            </TabContext>
            <div>
            </div>
            <div></div>
        </div>
    );
};

export default Menu;