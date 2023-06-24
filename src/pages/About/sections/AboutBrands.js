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

   const partnerText = t('about.partners', {returnObjects: true}) || []

   return (
       <StyledSection>
          <div className="container">
             <Typography className="title" variant={"h3"}>{t('sections.brands')}</Typography>
             <StyledUl mb={{md: 4, xs: 2}} sx={{width: {md: "70%", xs: "100%"}}}>
                {partnerText.map((part, idx) => (
                    <li>
                       <Typography variant={"h5"} key={idx}>{part}</Typography>
                    </li>
                ))}
             </StyledUl>

             <Grid container columnSpacing={{md: 2, xs: 0}}>
                {partners.map((partner, idx) => (
                    <Grid item mt={{xs: idx !== 0 && idx !== 1 ? -8 : 0, sm: 0}} md={3} xs={6}>
                       <StyledImg key={idx} src={partner} alt="sumsung"/>
                    </Grid>
                ))}
             </Grid>
          </div>
       </StyledSection>
   );
};

export default AboutBrands;