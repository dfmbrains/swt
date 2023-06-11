import React from 'react';
import {StyledSection} from "../../../components/StyledComponents";
import {styled, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";

const StyledBox = styled(StyledSection)(({theme}) => ({
   background: theme.palette.primary.main,
   padding: "70px 0",

   "& .title": {
      textAlign: "center",
      color: "#FFF"
   },
   "& h6": {
      textAlign: "center",
      color: "#FFF",

      "&:not(:last-child)": {
         marginBottom: "15px"
      }
   }
}));

const HomeWhyChooseUs = () => {
   const {t} = useTranslation()

   const data = t('whyUsSection', {returnObjects: true})

   return (
       <StyledBox>
          <div className="container">
             <Typography className="title" variant={"h2"}>{t('sections.whyUs')}</Typography>

             {data && data.map((el, idx) => (
                 <Typography key={idx} variant={"subtitle1"}>{el}</Typography>
             ))}
          </div>
       </StyledBox>
   );
};

export default HomeWhyChooseUs;