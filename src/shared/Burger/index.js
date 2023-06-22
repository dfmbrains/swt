import React from 'react';
import {Box, Button, Drawer, Icon, IconButton, styled, Typography, useTheme} from "@mui/material";
import ImageComponent from "../../components/ImageComponent";
import LightLogoCompany from "../../assets/brand/logo-company-white.svg";
import PrimaryLogoCompany from "../../assets/brand/logo-company.svg";
import {FlexBetweenAlignCenter, FlexBox, FlexGap10} from "../../components/FlexBoxes";
import ChangeLangButton from "../Header/components/ChangeLangButton";
import {useTranslation} from "react-i18next";
import {email, menu, phoneNumber} from "../../helpers/constants";
import Search from "../Header/components/Search";
import {NavLink} from "react-router-dom";

const StyledBurger = styled('div')(({theme}) => ({
   position: "fixed",
   zIndex: theme.zIndex.modal,
   left: 0,
   top: 0,
   width: "100vw",
   height: "100vh",

   "& .logo": {
      width: "200px"
   }
}));

const StyledBurgerHeader = styled('div')(({theme}) => ({
   background: theme.palette.primary.main,
   padding: "16px 0",

   "& .closeIcon": {
      fontSize: 32
   }
}));

const StyledBurgerContact = styled('div')(({theme}) => ({
   background: theme.palette.primary.light,
   padding: "12px 0",

   "& .logo": {
      width: "200px"
   },
   "& .closeIcon": {
      fontSize: 32
   }
}));

const StyledBurgerMain = styled('div')(() => ({
   background: "#FFFFFF",
   padding: "16px 0",
   height: "calc(100% - 136px)",

   "& .terms": {
      position: "absolute",
      bottom: 16,
      left: "50%",
      transform: "translate(-50%)",
      width: "calc(100% - 32px)"
   }
}));

const StyledBurgerMenu = styled(FlexBox)(({theme}) => ({
   flexDirection: "column",
   rowGap: "4px",

   "& .item": {
      padding: "8px 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      color: theme.palette.secondary.main
   }
}));

const Burger = ({isOpen, handleClose}) => {
   const {t} = useTranslation()
   const theme = useTheme()

   return (
       <Drawer anchor={"left"} open={isOpen}>
          <StyledBurger>
             <StyledBurgerHeader>
                <div className="container">
                   <FlexBetweenAlignCenter>
                      <ImageComponent clx="logo" src={LightLogoCompany} alt="swt"/>

                      <IconButton onClick={handleClose} color={"info"}>
                         <Icon className={"closeIcon"}>close</Icon>
                      </IconButton>
                   </FlexBetweenAlignCenter>
                </div>
             </StyledBurgerHeader>

             <StyledBurgerContact>
                <div className="container">
                   <FlexGap10>
                      <Button href={`mailto:${email}`} fullWidth variant={"contained"} color={"primary"}
                              startIcon={<Icon>email</Icon>}>
                         <Typography variant="subtitle1">{t('contacts.writeUs')}</Typography>
                      </Button>
                      <Button href={`tel:${phoneNumber}`} fullWidth variant={"contained"} color={"primary"}
                              startIcon={<Icon>phone</Icon>}>
                         <Typography variant="subtitle1">{t('contacts.call')}</Typography>
                      </Button>
                   </FlexGap10>
                </div>
             </StyledBurgerContact>

             <StyledBurgerMain>
                <div className="container">
                   <FlexBetweenAlignCenter>
                      <ImageComponent clx="logo" src={PrimaryLogoCompany} alt="swt"/>

                      <ChangeLangButton color={"secondary"}/>
                   </FlexBetweenAlignCenter>

                   <Box my={4}>
                      <Search variant={"outlined"}/>
                   </Box>

                   <Typography mb={2} pb={1} sx={{borderBottom: `3px solid ${theme.palette.primary.light}`}}
                               color={theme.palette.primary.main} variant={"h3"}>{t('menuWord')}</Typography>
                   <StyledBurgerMenu>
                      {menu.map((item, idx) => (
                          <NavLink onClick={handleClose} key={idx} className="item" to={item.link}>
                             <Typography variant={"h5"}>{t(item.title)}</Typography>
                             <Icon>chevron_right</Icon>
                          </NavLink>
                      ))}
                   </StyledBurgerMenu>

                   <Typography className={"terms"} variant={"body2"} sx={{textAlign: "center"}}>
                      Copyright © {new Date().getFullYear()} SHANGHAI WISWEALTH TECHNOLOGY
                      CO., LTD. {t('footer.allRightsReserved')}
                   </Typography>
                </div>
             </StyledBurgerMain>
          </StyledBurger>
       </Drawer>
   );
};

export default Burger;