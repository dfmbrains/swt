import React from 'react';
import {StyledSection} from "../../../components/StyledComponents";
import {Grid, styled, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import {partners} from "../../../data/partners";

const StyledImg = styled('img')(() => ({
   height: "200px",
   width: "75%",
   display: "block",
   margin: "0 auto",
   objectFit: "contain"
}));
const StyledUl = styled('ul')(() => ({
   display: "flex",
   flexDirection: "column",
   rowGap: "10px",
   paddingLeft: 32
}));

const AboutBrands = () => {
   const {t} = useTranslation()

   const partnerText = t('about.partners', {returnObjects: true})

   return (
       <StyledSection>
          <div className="container">
             <Typography className="title" variant={"h3"}>{t('sections.brands')}</Typography>
             <StyledUl mb={4} sx={{width: "70%"}}>
                {partnerText.map((part, idx) => (
                    <li>
                       <Typography variant={"h5"} key={idx}>{part}</Typography>
                    </li>
                ))}
             </StyledUl>

             <Grid container columnSpacing={2}>
                {partners.map((partner, idx) => (
                    <Grid item xs={3}>
                       <StyledImg key={idx} src={partner} alt="sumsung"/>
                    </Grid>
                ))}
             </Grid>
          </div>
       </StyledSection>
   );
};

export default AboutBrands;