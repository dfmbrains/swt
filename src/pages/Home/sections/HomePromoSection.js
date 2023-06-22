import React from 'react';
import {styled, Typography, useMediaQuery, useTheme} from "@mui/material";
import PromoBg from '../../../assets/imgs/promo-bg.webp'
import {Trans} from "react-i18next";

const StyledSection = styled('section')(() => ({
   padding: '110px 0',
   background: `url(${PromoBg})`,
   backgroundPosition: "center",
   backgroundSize: "cover",
   backgroundRepeat: "no-repeat",
   position: "relative",

   "&::before": {
      content: "''",
      position: "absolute",
      top: "0",
      left: "0",
      height: "100%",
      width: "50%",
      background: "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 100%)"
   },
   "& .title": {
      position: "relative",
      zIndex: 1
   }
}));

const HomePromoSection = () => {
   const theme = useTheme()
   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

   return (
       <StyledSection>
          <div className="container">
             <Typography className={"title"} variant={"h1"}>
                <Trans i18nKey={"sections.promo"} components={{br: isMobile ? <></> : <br/>}}/>
             </Typography>
          </div>
       </StyledSection>
   );
};

export default HomePromoSection;