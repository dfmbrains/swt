import React, {useEffect, useState} from 'react';
import {IconButton, Icon, styled, useTheme, useMediaQuery} from "@mui/material";

const StyledIconButton = styled(IconButton)(({theme, status}) => ({
   position: "fixed",
   bottom: "3%",
   right: "1.5%",
   zIndex: theme.zIndex.mobileStepper,
   backgroundColor: theme.palette.primary.main,
   transition: "0.2s",
   transform: `scale(${status > 0 ? '1' : '0'})`,
   [theme.breakpoints.down("sm")]: {right: "15px"},

   "&:hover": {
      backgroundColor: theme.palette.primary.dark
   },
   "& .material-icons": {
      color: "#FFF"
   }
}));

const ScrollTop = () => {
   const theme = useTheme()
   const [active, setActive] = useState()

   const isLaptop = useMediaQuery(theme.breakpoints.down("lg"));

   const handleScrollToTop = () => window.scrollTo({top: 0, left: 0, behavior: "smooth"})

   useEffect(() => {
      if (typeof window !== "undefined") {
         window.addEventListener("scroll", () =>
             setActive(window.pageYOffset)
         );
      }
   }, [])

   return (
       <StyledIconButton status={active} onClick={handleScrollToTop} size={isLaptop ? "medium" : "large"} theme={theme}>
          <Icon>arrow_upward</Icon>
       </StyledIconButton>
   );
};

export default ScrollTop;