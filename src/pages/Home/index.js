import React from 'react';
import HomePromoSection from "./sections/HomePromoSection";
import HomeProducts from "./sections/HomeProducts";
import HomeSwipeSection from "./sections/HomeSwipeSection";
import HomeCompanyOrientations from "./sections/HomeCompanyOrientations";
import HomeWhyChooseUs from "./sections/HomeWhyChooseUs";
import BenefitsSection from "../../components/BenefitsSection";
import FormSection from "../../components/FormSection";

const Home = () => {
   return (
       <>
          <HomePromoSection/>
          <HomeProducts/>
          <HomeCompanyOrientations/>
          <HomeSwipeSection/>
          <HomeWhyChooseUs/>
          <BenefitsSection/>
          <FormSection/>
       </>
   );
};

export default Home;