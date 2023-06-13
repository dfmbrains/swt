import React from 'react';
import Header from "../Header";
import {Outlet} from "react-router-dom";
import Footer from "../Footer";
import ScrollTop from "../../components/ScrollTop";

const AppLayout = () => {
   return (
       <>
          <Header/>
          <main>
             <Outlet/>
          </main>
          <Footer/>

          <ScrollTop/>
       </>
   );
};

export default AppLayout;