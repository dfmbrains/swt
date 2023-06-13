import React from 'react';
import {StyledSection} from "../../../components/StyledComponents";
import {Grid, styled, Typography} from "@mui/material";
import CompanyImg from '../../../assets/imgs/company.webp'
import {useTranslation} from "react-i18next";
import ImageComponent from "../../../components/ImageComponent";

const StyledImgBox = styled('div')(() => ({
   height: "420px",
   borderRadius: "12px",
   overflow: "hidden",

   "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover"
   }
}));

const AboutSection1 = () => {
   const tRootKey = 'about'

   const {t} = useTranslation()

   return (
       <StyledSection>
          <div className="container">
             <Typography className={"title"} variant={"h3"}>{t('sections.aboutUs')}</Typography>

             <Grid container spacing={6}>
                <Grid item xs={6}>
                   <StyledImgBox>
                      <ImageComponent src={CompanyImg} alt="company"/>
                   </StyledImgBox>
                </Grid>
                <Grid item xs={6}>
                   <Typography sx={{textAlign: "justify", textIndent: "20px", lineHeight: 1.3}} className={"aboutText"}
                               mb={1} variant={"subtitle1"}>{t(`${tRootKey}.text.part1`)}</Typography>
                   <Typography sx={{textAlign: "justify", textIndent: "20px", lineHeight: 1.3}} className={"aboutText"}
                               variant={"subtitle1"}>{t(`${tRootKey}.text.part2`)}</Typography>
                </Grid>
             </Grid>
          </div>
       </StyledSection>
   );
};

export default AboutSection1;