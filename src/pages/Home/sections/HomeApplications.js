import React from 'react';
import {StyledSection} from "../../../components/StyledComponents";
import {Grid, Typography} from "@mui/material";
import ApplicationsCard from "../../../components/ApplicationsCard";
import {useTranslation} from "react-i18next";
import MedicalImg from "../../../assets/imgs/medic.jpg";
import AutoImg from "../../../assets/imgs/auto.jpg";
import AviaImg from "../../../assets/imgs/avia.png";
import EnergeticImg from "../../../assets/imgs/energetic.jpg";

const HomeApplications = () => {
   const {t} = useTranslation()

   const applicationsImages = [MedicalImg, AutoImg, AviaImg, EnergeticImg]
   const applicationsTexts = t('applications', {returnObjects: true})

   return (
       <StyledSection>
          <div className="container">
             <Typography className="title" variant={"h3"}>{t('sections.applications')}</Typography>

             <Grid container spacing={2}>
                {applicationsTexts && applicationsImages.map((img, idx) => (
                    <Grid key={idx} item lg={3} md={4} sm={6} xs={12}>
                       <ApplicationsCard application={{...applicationsTexts[idx], img}}/>
                    </Grid>
                ))}
             </Grid>
          </div>
       </StyledSection>
   );
};

export default HomeApplications;