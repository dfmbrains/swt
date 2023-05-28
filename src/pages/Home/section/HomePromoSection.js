import React from 'react';
import {styled, Typography} from "@mui/material";
import PromoBg from '../../../assets/imgs/promo-bg.png'

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
   return (
       <StyledSection>
          <div className="container">
             <Typography className={"title"} variant={"h1"}>Let’s build <br/> future <br/> together</Typography>
          </div>
       </StyledSection>
   );
};

export default HomePromoSection;