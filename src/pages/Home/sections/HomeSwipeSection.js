import React, {useEffect, useRef} from 'react';
import ScrollContainer from "react-indiana-drag-scroll";
import {styled, Typography, useMediaQuery, useTheme} from "@mui/material";
import SwipeImg1 from '../../../assets/imgs/swipeImg1.webp';
import {StyledSection} from "../../../components/StyledComponents";
import {useTranslation} from "react-i18next";

const StyledRow = styled(ScrollContainer)(({theme}) => ({
   display: "flex",
   alignItems: "center",
   columnGap: "16px",

   "img": {
      objectFit: "cover",
      width: "calc(72% - 16px * 2 / 3)",
      height: "430px",
      borderRadius: "12px"
   },

   [theme.breakpoints.down("lg")]: {
      "img": {
         height: "380px"
      },
   },
   [theme.breakpoints.down("md")]: {
      "img": {
         height: "300px"
      },
   },
   [theme.breakpoints.down("sm")]: {
      columnGap: "12px",

      "img": {
         height: "200px",
         objectFit: "cover",
         width: "calc(80% - 12px * 2 / 3)",
         borderRadius: "12px"
      },
   }
}));

const HomeSwipeSection = () => {
   const theme = useTheme()
   const {t} = useTranslation()

   const rowRef = useRef(null);

   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

   useEffect(() => {
      if (rowRef.current && rowRef.current.container.current) {
         setTimeout(() => {
            const parentWidth = rowRef.current.container.current.parentElement.offsetWidth;
            rowRef.current.container.current.scrollLeft = parentWidth * (isMobile ? 0.7 : 0.58);
         }, 200)
      }
   }, [isMobile])

   return (
       <StyledSection>
          <div className="container">
             <Typography className="title" variant={"h3"}>{t('sections.ourStorage')}</Typography>
          </div>

          <StyledRow ref={rowRef} className="messagesModal__menu" horizontal={true} vertical={false}>
             <img src={SwipeImg1} alt="img"/>
             <img src={SwipeImg1} alt="img"/>
             <img src={SwipeImg1} alt="img"/>
          </StyledRow>
       </StyledSection>
   );
};

export default HomeSwipeSection;