import React from 'react';
import {StyledSection} from "../../../components/StyledComponents";
import {Grid, styled, Typography} from "@mui/material";
import CompanyImg from '../../../assets/imgs/company.webp'
import Office1Img from '../../../assets/brand/office1.jpg'
import Office2Img from '../../../assets/brand/office2.jpg'
import {useTranslation} from "react-i18next";
import ImageComponent from "../../../components/ImageComponent";

const StyledImgBox = styled('div')(() => ({
   height: "220px",
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

             <Grid container spacing={1}>
                <Grid item xs={4}>
                   <StyledImgBox>
                      <ImageComponent src={CompanyImg} alt="company"/>
                   </StyledImgBox>
                </Grid>
                <Grid item xs={4}>
                   <StyledImgBox>
                      <ImageComponent src={Office1Img} alt="company"/>
                   </StyledImgBox>
                </Grid>
                <Grid item xs={4}>
                   <StyledImgBox>
                      <ImageComponent src={Office2Img} alt="company"/>
                   </StyledImgBox>
                </Grid>
                <Grid item xs={12}>
                   <Typography sx={{textAlign: "justify", textIndent: "20px", lineHeight: 1.3}} className={"aboutText"}
                               mt={2} variant={"h5"}>{t(`${tRootKey}.text.part1`)}</Typography>
                   <Typography sx={{textAlign: "justify", textIndent: "20px", lineHeight: 1.3}} className={"aboutText"}
                               my={1} variant={"h5"}>{t(`${tRootKey}.text.part2`)}</Typography>
                   <Typography sx={{textAlign: "justify", textIndent: "20px", lineHeight: 1.3}} className={"aboutText"}
                               variant={"h5"}>{t(`${tRootKey}.text.part3`)}</Typography>
                </Grid>
             </Grid>
          </div>
       </StyledSection>
   );
};

export default AboutSection1;