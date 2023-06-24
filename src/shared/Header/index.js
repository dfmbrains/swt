import React, {useState} from 'react';
import {
   Icon,
   IconButton,
   styled, Typography,
   useMediaQuery,
   useTheme
} from "@mui/material";
import {Link, NavLink} from "react-router-dom";
import LogoCompany from '../../assets/brand/logo-company-primary.svg'
import {FlexBetweenAlignCenter, FlexBox, FlexGap10} from "../../components/FlexBoxes";
import ImageComponent from "../../components/ImageComponent";
import Burger from "../Burger";
import ChangeLangButton from "./components/ChangeLangButton";
import Search from "./components/Search";
import {menu} from "../../helpers/constants";
import {useTranslation} from "react-i18next";

const StyledHeader = styled('header')(({theme}) => ({
   padding: '24px 0',

   "& .logo": {
      width: "230px"
   },
   "& .search": {
      width: "230px",
      margin: "0 0 15px",
   },

   [theme.breakpoints.down("lg")]: {
      padding: '16px 0',

      "& .logo": {
         width: "200px"
      },
      "& .search": {
         width: "200px",
         margin: "0 0 12px"
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

const Header = () => {
   const {t} = useTranslation()
   const theme = useTheme()

   const isLaptop = useMediaQuery(theme.breakpoints.up("md"));

   const [isBurgerOpen, setIsBurgerOpen] = useState(false)

   return (
       <>
          <StyledHeader>
             <div className="container">
                <FlexBetweenAlignCenter>
                   <Link to={"/"}>
                      <ImageComponent clx="logo" src={LogoCompany} alt="swt"/>
                   </Link>
                   <StyledFlexBox>
                      {isLaptop ? (
                          <>
                             <StyledMenu>
                                {menu.map((item, idx) => (
                                    <NavLink key={idx} className="item" to={item.link}>
                                       <Typography variant={"subtitle1"}>{t(item.title)}</Typography>
                                    </NavLink>
                                ))}
                             </StyledMenu>
                             <FlexGap10>
                                <div className="search">
                                   <Search variant={"standard"}/>
                                </div>
                                <ChangeLangButton color={"secondary"}/>
                             </FlexGap10>
                          </>
                      ) : (
                          <IconButton onClick={() => setIsBurgerOpen(true)} color={"primary"}>
                             <Icon>menu</Icon>
                          </IconButton>
                      )}
                   </StyledFlexBox>
                </FlexBetweenAlignCenter>
             </div>
          </StyledHeader>

          {!isLaptop && (
              <Burger isOpen={isBurgerOpen} handleClose={() => setIsBurgerOpen(false)}/>
          )}
       </>
   );
};

export default Header;