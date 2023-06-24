import React from 'react';
import {StyledSection} from "../../components/StyledComponents";
import BenefitsSection from "../../components/BenefitsSection";
import {YMaps, Map, Clusterer, Placemark} from "@pbe/react-yandex-maps";
import ContactSection1 from "./sections/ContactSection1";
import {useMediaQuery, useTheme} from "@mui/material";

const Contact = () => {
   const theme = useTheme()
   const isLaptop = useMediaQuery(theme.breakpoints.up("md"));

   return (
       <>
          <ContactSection1/>
          <StyledSection>
             <YMaps query={{lang: "en_US"}} preload={true}>
                <Map controls={["zoomControl"]} height={isLaptop ? "300px" : "250px"} width={"100%"}
                     state={{center: [30.900832, 121.918014], zoom: 10}}>
                   <Clusterer>
                      <Placemark geometry={[30.900832, 121.918014]} options={{iconColor: "#3973B9"}}/>
                   </Clusterer>
                </Map>
             </YMaps>
          </StyledSection>
          <BenefitsSection/>

          <br/>
          <br/>
       </>
   );
};

export default Contact;