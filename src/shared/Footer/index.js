import React from 'react';
import {Button, ButtonGroup, Icon, IconButton, styled, Tooltip, Typography, useTheme} from "@mui/material";
import LogoCompany from "../../assets/brand/logo-company-white.svg";
import {FlexBetweenAlignStart, FlexBox} from "../../components/FlexBoxes";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import ImageComponent from "../../components/ImageComponent";
import WechatLogo from "../../assets/icons/wechat.png";
import WhatsAppLogo from "../../assets/icons/whatsapp.png";
import TelegramLogo from "../../assets/icons/telegram.png";
import SkypeLogo from "../../assets/icons/skype.png";
import {email, phoneNumber} from "../../helpers/constants";

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

   "& .socialMedia": {
      width: 24,
      height: 24
   },

   [theme.breakpoints.down("md")]: {
      "& .logo": {
         width: "180px"
      },
   },
   [theme.breakpoints.down("sm")]: {
      padding: '24px 0 16px',

      "& .logo": {
         width: "220px",
         display: "block",
         margin: "0 auto"
      },
   }
}));

const StyledMenu = styled(FlexBox)(({theme}) => ({
   flexDirection: "column",
   gap: "12px",

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
   "& .MuiTypography-root": {
      textTransform: "lowercase"
   },
   "& .MuiButtonBase-root": {
      justifyContent: "flex-start"
   },

   display: "flex",
   flexDirection: "column",
   width: "100%",
   rowGap: "8px",

   [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
      flexWrap: "wrap",
      rowGap: 16,

      "& .phoneNumber": {
         width: "50%"
      },
      "& .MuiButtonGroup-root": {
         width: "100%",
         justifyContent: "center"
      }
   }
}));

const Footer = () => {
   const theme = useTheme()
   const {t} = useTranslation()

   const handleCopy = () => {
      navigator.clipboard.writeText(phoneNumber)
          .then(() => alert(t('phoneNumberCopied')))
   }

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
                <ImageComponent clx="logo" src={LogoCompany} alt="swt"/>
                <StyledFlexBox>
                   <StyledMenu>
                      <Link className={"item"} to={"/"}>
                         <Typography variant={"subtitle1"}>{t('menu.home')}</Typography>
                      </Link>
                      <Link className={"item"} to={"/about"}>
                         <Typography variant={"subtitle1"}>{t('menu.aboutUs')}</Typography>
                      </Link>
                      <Link className={"item"} to={"/products"}>
                         <Typography variant={"subtitle1"}>{t('menu.products')}</Typography>
                      </Link>
                      <Link className={"item"} to={"/services"}>
                         <Typography variant={"subtitle1"}>{t('menu.services')}</Typography>
                      </Link>
                      <Link className={"item"} to={"/contact"}>
                         <Typography variant={"subtitle1"}>{t('menu.contacts')}</Typography>
                      </Link>
                   </StyledMenu>

                   <StyledContactBox>
                      <Button className={"phoneNumber"} color={"info"} href={`tel:${phoneNumber}`}
                              startIcon={<Icon>phone</Icon>}>
                         <Typography>{phoneNumber}</Typography>
                      </Button>
                      <Button className={"phoneNumber"} color={"info"} href={`mailto:${email}`}
                              startIcon={<Icon>email</Icon>}>
                         <Typography>{email}</Typography>
                      </Button>

                      <ButtonGroup>
                         <Tooltip title={"Wechat"} placement={"top"}>
                            <IconButton onClick={handleCopy} color={"success"} className={"iconButton"}>
                               <img className={"socialMedia"} src={WechatLogo} alt="wechat"/>
                            </IconButton>
                         </Tooltip>
                         <Tooltip title={"Skype"} placement={"top"}>
                            <IconButton target={"_blank"} href={"https://join.skype.com/invite/bibiwkabb"}
                                        color={"primary"}
                                        className={"iconButton"}>
                               <img className={"socialMedia"} src={SkypeLogo} alt="Skype"/>
                            </IconButton>
                         </Tooltip>
                         <Tooltip title={"Whatsapp"} placement={"top"}>
                            <IconButton target={"_blank"} href={"https://wa.me/+8618521372646"} color={"success"}
                                        className={"iconButton"}>
                               <img className={"socialMedia"} src={WhatsAppLogo} alt="whatsapp"/>
                            </IconButton>
                         </Tooltip>
                         <Tooltip title={"Telegram"} placement={"top"}>
                            <IconButton target={"_blank"} href={"https://t.me/+8618521372646"} color={"primary"}
                                        className={"iconButton"}>
                               <img className={"socialMedia"} src={TelegramLogo} alt="telegram"/>
                            </IconButton>
                         </Tooltip>
                      </ButtonGroup>
                   </StyledContactBox>
                </StyledFlexBox>
             </FlexBetweenAlignStart>
             <Typography variant={"body2"} sx={{
                opacity: 0.5,

                [theme.breakpoints.down("sm")]: {
                   textAlign: "center"
                }
             }}>
                Copyright © {new Date().getFullYear()} SHANGHAI WISWEALTH TECHNOLOGY
                CO., LTD. {t('footer.allRightsReserved')}
             </Typography>
          </div>
       </StyledFooter>
   );
};

export default Footer;