import React from 'react';
import {StyledSection} from "../../components/StyledComponents";
import BenefitsSection from "../../components/BenefitsSection";
import {YMaps, Map, Clusterer, Placemark} from "@pbe/react-yandex-maps";
import ContactSection1 from "./sections/ContactSection1";

const Contact = () => {
   return (
       <>
          <ContactSection1/>
          <StyledSection>
             <YMaps query={{lang: "en_US"}} preload={true}>
                <Map controls={["zoomControl"]} height={"300px"} width={"100%"}
                     state={{center: [43, 73], zoom: 17}}>
                   <Clusterer>
                      <Placemark geometry={[43, 73]} options={{iconColor: "#3973B9"}}/>
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