import React from "react";
import {Route, Routes} from "react-router-dom";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
   return (
       <>
          <Header/>

          <main>
             <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/services"} element={<Services/>}/>
                <Route path={"/contact"} element={<Contact/>}/>
             </Routes>
          </main>

          <Footer/>
       </>
   );
}

export default App;
