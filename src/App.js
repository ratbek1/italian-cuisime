import './App.css';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./page/Home/Home";
import Footer from "./components/Footer";
import Menu from "./page/Menu";

function App() {
  return (
    <div className="bg-[#1B2026]">
        <Header/>
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/menu"} element={<Menu/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
