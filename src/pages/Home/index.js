import React from 'react';
import HomePromoSection from "./section/HomePromoSection";
import HomeProducts from "./section/HomeProducts";
import HomeSwipeSection from "./section/HomeSwipeSection";
import HomeAboutSection from "./section/HomeAboutSection";
import HomeCompanySection from "./section/HomeCompanySection";

const Home = () => {
   return (
       <>
          <HomePromoSection/>
          <HomeProducts/>
          <HomeSwipeSection/>
          <HomeAboutSection/>
          <HomeCompanySection/>
       </>
   );
};

export default Home;