import React from 'react';
import {StyledSection} from "../../../components/StyledComponents";
import {Grid, styled, Typography} from "@mui/material";
import CompanyImg from '../../../assets/imgs/company.webp'

const StyledBox = styled('div')(({theme}) => ({
   height: "400px",
   borderRadius: "12px",

   [theme.breakpoints.down("lg")]: {
      height: "340px"
   },
   [theme.breakpoints.down("sm")]: {
      height: "auto"
   }
}));
const StyledContentBox = styled(StyledBox)(({theme}) => ({
   background: theme.palette.primary.main,
   display: "flex",
   flexDirection: "column",
   justifyContent: "center",
   padding: "0 16px 0 32px",

   "& .MuiTypography-root": {
      color: "#FFFFFF"
   },

   [theme.breakpoints.down("sm")]: {
      padding: "0",
      background: "transparent",

      "& .MuiTypography-root": {
         color: "#000000"
      }
   }
}));
const StyledImgBox = styled(StyledBox)(({theme}) => ({
   overflow: "hidden",

   "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover"
   },

   [theme.breakpoints.down("sm")]: {
      height: "220px"
   }
}));

const HomeCompanySection = () => {
   return (
       <StyledSection>
          <div className="container">
             <Grid container spacing={{md: 0, xs: 2}}>
                <Grid item md={6} xs={12}>
                   <StyledContentBox>
                      <Typography variant={"h3"} className={"title"}>About company</Typography>
                      <Typography variant={"subtitle1"}>Shanghai Wiswealth Technology Co., Ltd - основанная в 2000 году,
                         специализируется на дистрибуции электронных компонентов всемирно известных брендов. Наша
                         компания занимается оригинальной дистрибуцией, а также предоставляет решения для цепочки
                         поставок электронных компонентов за счет снижения затрат, включая долгосрочные запасы пассивных
                         компонентов, быструю доставку недостающих компонентов в течение 3 дней, отгрузку на складе,
                         спецификацию и поставку в небольших количествах</Typography>
                   </StyledContentBox>
                </Grid>
                <Grid item md={6} xs={12}>
                   <StyledImgBox>
                      <img src={CompanyImg} alt="swt"/>
                   </StyledImgBox>
                </Grid>
             </Grid>
          </div>
       </StyledSection>
   );
};

export default HomeCompanySection;