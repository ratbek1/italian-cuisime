import './App.css';
import Header from "./components/Header";
import Hero from "./page/Home/Hero";
import {Route, Routes} from "react-router-dom";
import Home from "./page/Home/Home";

function App() {
  return (
    <div className="bg-[#1B2026]">
        <Header/>
        <Routes>
            <Route path={"/"} element={<Home/>}/>
        </Routes>
    </div>
  );
}

export default App;
