import React, {lazy} from "react";
import {Route, Routes} from "react-router-dom";
import Loadable from "./components/Loadable";
import AppLayout from "./shared/Layouts/AppLayout";

const Home = Loadable(lazy(() => import('./pages/Home')));
const About = Loadable(lazy(() => import('./pages/About')));
const Services = Loadable(lazy(() => import('./pages/Services')));
const Contact = Loadable(lazy(() => import('./pages/Contact')));
const Products = Loadable(lazy(() => import('./pages/Products')));
const NotFound = Loadable(lazy(() => import('./pages/NotFound')));

function App() {
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
