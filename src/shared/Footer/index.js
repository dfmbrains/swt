import React from 'react';
import {Button, Icon, styled, Typography, useTheme} from "@mui/material";
import LogoCompany from "../../assets/brand/logo-company-white.svg";
import {FlexBetweenAlignStart, FlexBox} from "../../components/FlexBoxes";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

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

const StyledContactBox = styled('div')(() => ({
   "& .MuiTypography-root": {
      textTransform: "lowercase"
   },
   "& .MuiButtonBase-root": {
      justifyContent: "flex-start"
   },

   display: "flex",
   flexDirection: "column",
   width: "100%",
   rowGap: "8px"
}));

const Footer = () => {
   const theme = useTheme()
   const {t} = useTranslation()

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
                         <Typography variant={"subtitle1"}>{t('menu.home')}</Typography>
                      </Link>
                      <Link className={"item"} to={"/"}>
                         <Typography variant={"subtitle1"}>{t('menu.aboutUs')}</Typography>
                      </Link>
                      <Link className={"item"} to={"/"}>
                         <Typography variant={"subtitle1"}>{t('menu.products')}</Typography>
                      </Link>
                      <Link className={"item"} to={"/"}>
                         <Typography variant={"subtitle1"}>{t('menu.services')}</Typography>
                      </Link>
                      <Link className={"item"} to={"/"}>
                         <Typography variant={"subtitle1"}>{t('menu.contacts')}</Typography>
                      </Link>
                   </StyledMenu>

                   <StyledContactBox>
                      <Button color={"info"} href="tel:+8618521372646" startIcon={<Icon>phone</Icon>}>
                         <Typography>+8618521372646</Typography>
                      </Button>
                      <Button color={"info"} href="mailto:info@wiswealth.com" startIcon={<Icon>email</Icon>}>
                         <Typography>info@wiswealth.com</Typography>
                      </Button>
                   </StyledContactBox>
                </StyledFlexBox>
             </FlexBetweenAlignStart>
             <Typography variant={"body2"} sx={{
                opacity: 0.5,

                [theme.breakpoints.down("sm")]: {
                   textAlign: "center"
                }
             }}>
                Copyright © {new Date().getFullYear()} Shanghai Wiswealth Technology Co. Ltd
                . {t('footer.allRightsReserved')}
             </Typography>
          </div>
       </StyledFooter>
   );
};

export default Footer;