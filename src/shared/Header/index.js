import React from 'react';
import {
   Button,
   Icon,
   IconButton,
   InputAdornment,
   styled,
   TextField,
   Typography,
   useMediaQuery,
   useTheme
} from "@mui/material";
import {Link, NavLink} from "react-router-dom";
import LogoCompany from '../../assets/brand/logo-company.svg'
import {FlexBetweenAlignCenter, FlexBox} from "../../components/FlexBoxes";
import {useTranslation} from "react-i18next";
import ImageComponent from "../../components/ImageComponent";

const StyledHeader = styled('header')(({theme}) => ({
   padding: '24px 0',

   "& .logo": {
      width: "230px"
   },

   [theme.breakpoints.down("lg")]: {
      padding: '16px 0',
      "& .logo": {
         width: "200px"
      }
   },
   [theme.breakpoints.down("md")]: {
      "& .logo": {
         width: "180px"
      }
   }
}));

const StyledFlexBox = styled(FlexBox)(({theme}) => ({
   columnGap: "60px",
   alignItems: "center",

   [theme.breakpoints.down("lg")]: {
      columnGap: "40px"
   },
   [theme.breakpoints.down("md")]: {
      columnGap: "20px"
   }
}));

const StyledMenu = styled(StyledFlexBox)(({theme}) => ({
   "& .item": {
      color: theme.palette.secondary.main
   },
   "& .active": {
      color: theme.palette.primary.main
   }
}));

const StyledSearchTextField = styled(TextField)(({theme}) => ({
   width: "230px",
   margin: "0 0 15px",

   [theme.breakpoints.down("lg")]: {
      width: "200px",
      margin: "0 0 12px"
   },
   [theme.breakpoints.down("md")]: {
      width: "180px"
   },
}));

const Header = () => {
   const {t, i18n} = useTranslation()
   const theme = useTheme()

   const isLaptop = useMediaQuery(theme.breakpoints.up("md"));

   return (
       <StyledHeader>
          <div className="container">
             <FlexBetweenAlignCenter>
                <Link to={"/"}>
                   <ImageComponent className="logo" src={LogoCompany} alt="swt"/>
                </Link>
                <StyledFlexBox>
                   {isLaptop ? (
                       <>
                          <StyledMenu>
                             <NavLink className="item" to={"/"}>
                                <Typography variant={"subtitle1"}>{t('menu.home')}</Typography>
                             </NavLink>
                             <NavLink className="item" to={"/about"}>
                                <Typography variant={"subtitle1"}>{t('menu.aboutUs')}</Typography>
                             </NavLink>
                             <NavLink className="item" to={"/products"}>
                                <Typography variant={"subtitle1"}>{t('menu.products')}</Typography>
                             </NavLink>
                             <NavLink className="item" to={"/services"}>
                                <Typography variant={"subtitle1"}>{t('menu.services')}</Typography>
                             </NavLink>
                             <NavLink className="item" to={"/contact"}>
                                <Typography variant={"subtitle1"}>{t('menu.contacts')}</Typography>
                             </NavLink>
                          </StyledMenu>
                          <StyledSearchTextField
                              fullWidth
                              type="text"
                              name="search"
                              label={t('placeholders.search')}
                              size={"small"}
                              variant={"standard"}
                              InputProps={{
                                 endAdornment: <InputAdornment position="end"><Icon
                                     color={"primary"}>search</Icon></InputAdornment>,
                              }}
                          />
                          <Button onClick={() => i18n.changeLanguage(t('currentLanguage') === 'ru' ? 'en' : 'ru')}
                                  variant={"text"} color={"secondary"} size={isLaptop ? "small" : 'medium'}
                                  startIcon={<Icon>language</Icon>}>
                             <Typography variant="subtitle2">{t('currentLanguage').toUpperCase()}</Typography>
                          </Button>
                       </>
                   ) : (
                       <IconButton color={"primary"}>
                          <Icon>menu</Icon>
                       </IconButton>
                   )}
                </StyledFlexBox>
             </FlexBetweenAlignCenter>
          </div>
       </StyledHeader>
   );
};

export default Header;