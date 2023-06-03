import React from 'react';
import HomePromoSection from "./section/HomePromoSection";
import HomeProducts from "./section/HomeProducts";
import HomeSwipeSection from "./section/HomeSwipeSection";
import HomeCompanyOrientations from "./section/HomeCompanyOrientations";
import HomeWhyChooseUs from "./section/HomeWhyChooseUs";
import HomeOurBenefits from "./section/HomeOurBenefits";
import FormSection from "../../components/FormSection";

const Home = () => {
   return (
       <>
          <HomePromoSection/>
          <HomeProducts/>
          <HomeWhyChooseUs/>
          <HomeCompanyOrientations/>
          <HomeSwipeSection/>
          <HomeOurBenefits/>
          <FormSection/>
       </>
   );
};

export default Home;