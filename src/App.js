import React, {lazy, useEffect} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import Loadable from "./components/Loadable";
import AppLayout from "./shared/Layouts/AppLayout";

const Home = Loadable(lazy(() => import('./pages/Home')));
const About = Loadable(lazy(() => import('./pages/About')));
const Services = Loadable(lazy(() => import('./pages/Services')));
const Contact = Loadable(lazy(() => import('./pages/Contact')));
const Products = Loadable(lazy(() => import('./pages/Products')));
const NotFound = Loadable(lazy(() => import('./pages/NotFound')));

function App() {
   const location = useLocation()

   useEffect(() => {
      window.scrollTo({top: 0, left: 0, behavior: "smooth"})
   }, [location])

   return (
       <Routes>
          <Route path={"/"} element={<AppLayout/>}>
             <Route index element={<Home/>}/>
             <Route path={"about"} element={<About/>}/>
             <Route path={"services"} element={<Services/>}/>
             <Route path={"contact"} element={<Contact/>}/>
             <Route path={"products"} element={<Products/>}/>
          </Route>

          <Route path={"*"} element={<NotFound/>}/>
       </Routes>
   );
}

export default App;
