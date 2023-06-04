import React from 'react';
import {
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
   const theme = useTheme()

   const isLaptop = useMediaQuery(theme.breakpoints.up("md"));

   return (
       <StyledHeader>
          <div className="container">
             <FlexBetweenAlignCenter>
                <Link to={"/"}>
                   <img className="logo" src={LogoCompany} alt="swt"/>
                </Link>
                <StyledFlexBox>
                   {isLaptop ? (
                       <>
                          <StyledMenu>
                             <NavLink className="item" to={"/"}>
                                <Typography variant={"subtitle1"}>Home</Typography>
                             </NavLink>
                             <NavLink className="item" to={"/about"}>
                                <Typography variant={"subtitle1"}>About us</Typography>
                             </NavLink>
                             <NavLink className="item" to={"/product"}>
                                <Typography variant={"subtitle1"}>Products</Typography>
                             </NavLink>
                             <NavLink className="item" to={"/services"}>
                                <Typography variant={"subtitle1"}>Services</Typography>
                             </NavLink>
                             <NavLink className="item" to={"/contact"}>
                                <Typography variant={"subtitle1"}>Contact</Typography>
                             </NavLink>
                          </StyledMenu>
                          <StyledSearchTextField
                              fullWidth
                              type="text"
                              name="search"
                              label="Search"
                              size={"small"}
                              variant={"standard"}
                              InputProps={{
                                 endAdornment: <InputAdornment position="end"><Icon
                                     color={"primary"}>search</Icon></InputAdornment>,
                              }}
                          />
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