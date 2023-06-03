import React from 'react';
import {styled, Typography, useTheme} from "@mui/material";
import LogoCompany from "../../assets/brand/logo-company-white.svg";
import {FlexBetweenAlignStart, FlexBox, FlexGap10} from "../../components/FlexBoxes";
import {Link} from "react-router-dom";

const StyledFooter = styled('footer')(({theme}) => ({
   padding: '24px 0',
   background: theme.palette.primary.main,

   "& .logo": {
      width: "230px"
   },
   "& .MuiTypography-root": {
      color: "#FFFFFF"
   },
   "& .contactGap": {
      opacity: 0.8
   },

   [theme.breakpoints.down("md")]: {
      "& .logo": {
         width: "180px"
      },
   },
   [theme.breakpoints.down("sm")]: {
      padding: '24px 0 16px',

      "& .logo": {
         width: "200px",
         display: "block",
         margin: "0 auto"
      },
   }
}));

const StyledMenu = styled(FlexBox)(({theme}) => ({
   flexDirection: "column",
   rowGap: "12px",

   [theme.breakpoints.down("md")]: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: "12px",
      whiteSpace: "nowrap"
   },
   [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      gap: "16px",
      width: "100%"
   }
}));

const StyledFlexBox = styled(FlexBox)(({theme}) => ({
   alignItems: "flex-start",
   columnGap: "120px",

   [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      rowGap: "12px",
      marginBottom: "40px",
      width: "100%"
   },
   [theme.breakpoints.down("sm")]: {
      rowGap: "24px"
   }
}));

const StyledContactBox = styled('div')(({theme}) => ({
   [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      rowGap: "8px"
   }
}));

const Footer = () => {
   const theme = useTheme()

   return (
       <StyledFooter>
          <div className="container">
             <FlexBetweenAlignStart sx={{
                [theme.breakpoints.down("sm")]: {
                   justifyContent: "unset",
                   flexDirection: "column",
                   rowGap: "32px",
                   width: "100%"
                }
             }}>
                <img className="logo" src={LogoCompany} alt="swt"/>
                <StyledFlexBox>
                   <StyledMenu>
                      <Link className={"item"} to={"/"}>
                         <Typography variant={"subtitle1"}>Home</Typography>
                      </Link>
                      <Link className={"item"} to={"/"}>
                         <Typography variant={"subtitle1"}>About us</Typography>
                      </Link>
                      <Link className={"item"} to={"/"}>
                         <Typography variant={"subtitle1"}>Products</Typography>
                      </Link>
                      <Link className={"item"} to={"/"}>
                         <Typography variant={"subtitle1"}>Service</Typography>
                      </Link>
                      <Link className={"item"} to={"/"}>
                         <Typography variant={"subtitle1"}>Contact</Typography>
                      </Link>
                   </StyledMenu>

                   <StyledContactBox>
                      <FlexGap10 className={"contactGap"}>
                         <Typography>Tel:</Typography>
                         <a href="tel:86-755-2216-0508">
                            <Typography>86-755-2216-0508</Typography>
                         </a>
                      </FlexGap10>
                      <FlexGap10 className={"contactGap"}>
                         <Typography>Email:</Typography>
                         <a href="mailto:admin@LoremIpsum.com">
                            <Typography>admin@LoremIpsum.com</Typography>
                         </a>
                      </FlexGap10>
                   </StyledContactBox>
                </StyledFlexBox>
             </FlexBetweenAlignStart>
             <Typography variant={"body2"} sx={{
                opacity: 0.5,

                [theme.breakpoints.down("sm")]: {
                   textAlign: "center"
                }
             }}>
                Copyright © {new Date().getFullYear()} Shanghai Wiswealth Technology Co. Ltd . All Rights Reserved.
             </Typography>
          </div>
       </StyledFooter>
   );
};

export default Footer;