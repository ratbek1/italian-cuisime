import './App.css';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./page/Home/Home";
import Footer from "./components/Footer";
import ModernInterior from "./page/Home/ModernInterior";
import AboutUs from "./page/Home/AboutUs";
import MainMenu from "./page/Home/MainMenu";
import VisitRestaurant from "./page/Home/VisitRestaurant";

function App() {
  return (
    <div className="bg-[#1B2026]">
        <Header/>
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/interior"} element={<ModernInterior/>}/>
            <Route path={"/about"} element={<AboutUs/>}/>
            <Route path={"/menu"} element={<MainMenu/>}/>
            <Route path={"/contact"} element={<VisitRestaurant/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
