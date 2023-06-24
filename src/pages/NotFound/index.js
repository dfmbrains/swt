import {Box, Button, styled} from "@mui/material";
import React from "react";
import {Link, useNavigate} from "react-router-dom";
import Logo from '../../assets/brand/logo-company-primary.svg'
import NotFoundImg from '../../assets/icons/404.svg'

const FlexBox = styled(Box)(() => ({
   display: "flex",
   alignItems: "center",
}));

const JustifyBox = styled(FlexBox)(() => ({
   maxWidth: 320,
   flexDirection: "column",
   justifyContent: "center",


   "& .logo": {
      position: "fixed",
      top: 16,
      left: 16,
      maxWidth: 320,
   }
}));

const IMG = styled("img")(() => ({
   width: "100%",
   marginBottom: "32px",
}));

const NotFoundRoot = styled(FlexBox)(() => ({
   width: "100%",
   alignItems: "center",
   justifyContent: "center",
   height: "100vh !important",
}));

const NotFound = () => {
   const navigate = useNavigate();

   return (
       <NotFoundRoot>
          <JustifyBox>
             <Link to={"/"}>
                <IMG className={"logo"} src={Logo} alt="swt"/>
             </Link>
             <IMG src={NotFoundImg} alt="404"/>

             <Button color="primary" variant="contained"
                     sx={{textTransform: "capitalize"}} onClick={() => navigate(-1)}>
                Go Back
             </Button>
          </JustifyBox>
       </NotFoundRoot>
   );
};

export default NotFound;
