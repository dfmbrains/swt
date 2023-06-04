import React from 'react';
import AboutSection1 from "./sections/AboutSection1";
import AboutBrands from "./sections/AboutBrands";
import BenefitsSection from "../../components/BenefitsSection";
import FormSection from "../../components/FormSection";

const About = () => {
   return (
       <>
          <AboutSection1/>
          <AboutBrands/>
          <BenefitsSection/>
          <FormSection/>
       </>
   );
};

export default About;