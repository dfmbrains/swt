import React from 'react';
import {StyledSection} from "./StyledComponents";
import {Grid, Icon, styled, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";

const StyledBox = styled(StyledSection)(() => ({
   "& .title": {
      textAlign: "center",
      margin: "0 0 40px"
   }
}));

const StyledCard = styled('div')(() => ({
   display: "flex",
   flexDirection: "column",
   alignItems: "center",
   "& .cardTitle": {
      margin: "15px 0 10px",
      fontWeight: "600",
      textAlign: "center"
   },
   "& h6": {
      marginBottom: "10px",
      fontWeight: "400",
      color: "#737373",
      textAlign: "center"
   },
   "& .icon": {
      fontSize: 36
   }
}));

const BenefitsSection = () => {
   const {t} = useTranslation()

   const data = ["playlist_add", "biotech", "connecting_airports", "card_membership", "support_agent", "flag"]

   return (
       <StyledBox>
          <div className="container">
             <Typography className="title" variant={"h3"}>{t('sections.ourBenefits')}</Typography>

             <Grid container spacing={{md: 5, xs: 4}}>
                {data.map((el, idx) => (
                    <Grid key={idx} item md={4} xs={12}>
                       <StyledCard>
                          <Icon color={"primary"} className={"icon"}>{el}</Icon>

                          <Typography className="cardTitle"
                                      variant={"h4"}>{t(`benefits.item${idx + 1}.title`)}</Typography>
                          <Typography className="cardSubtitle"
                                      variant={"subtitle2"}>{t(`benefits.item${idx + 1}.subtitle`)}</Typography>
                       </StyledCard>
                    </Grid>
                ))}
             </Grid>
          </div>
       </StyledBox>
   );
};

export default BenefitsSection;