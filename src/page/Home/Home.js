import React from 'react';
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import BestSellers from "./BestSellers";
import MainMenu from "./MainMenu";
import ModernInterior from "./ModernInterior";
import VisitRestaurant from "./VisitRestaurant";

const Home = () => {
    return (
        <div>
            <Hero/>
            <AboutUs/>
            <BestSellers/>
            <MainMenu/>
            <ModernInterior/>
            <VisitRestaurant/>
        </div>
    );
};

export default Home;