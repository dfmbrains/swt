import React from 'react';
import {StyledSection} from "../../../components/StyledComponents";
import {Grid, Icon, styled, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";

const StyledCard = styled('div')(({theme}) => ({
   padding: "32px",
   boxShadow: "0px 13px 19px rgba(0, 0, 0, 0.07)",
   height: "100%",

   "& .icon": {
      fontSize: 56
   },

   "& .cardTitle": {
      fontWeight: 700,
      margin: "12px 0 10px"
   },

   "& .cardSubtitle": {
      color: "#737373",
      fontWeight: "400",
   },


   [theme.breakpoints.down("sm")]: {
      padding: "16px 24px",

      "& .icon": {
         fontSize: 42
      },
      "& .cardTitle": {
         fontWeight: 700,
         margin: "8px 0 6px"
      }
   }
}));

const ServicesSection = () => {
   const {t} = useTranslation()

   const servicesIcons = ["manage_history", "high_quality", "local_shipping", "warehouse", "support_agent", "speed"]
   const servicesTexts = t('services', {returnObjects: true})

   return (
       <StyledSection>
          <div className="container">
             <Typography className="title" variant={"h3"}>{t('menu.services')}</Typography>

             <Grid container spacing={{md: 6, xs: 2}}>
                {servicesTexts && servicesIcons.map((icon, idx) => (
                    <Grid key={idx} item md={4} xs={12}>
                       <StyledCard>
                          <Icon className={"icon"} color={"primary"}>{icon}</Icon>

                          <Typography className="cardTitle" variant={"h5"}>
                             {servicesTexts[idx].title.toUpperCase()}</Typography>
                          <Typography className="cardSubtitle"
                                      variant={"subtitle2"}>{servicesTexts[idx].subtitle}</Typography>
                       </StyledCard>
                    </Grid>
                ))}
             </Grid>
          </div>
       </StyledSection>
   );
};

export default ServicesSection;