import React from 'react';
import {StyledSection} from "../../../components/StyledComponents";
import {Box, Grid, styled, Typography} from "@mui/material";
import Img from '../../../assets/imgs/product.webp'

const StyledBox = styled('div')(({theme}) => ({
   position: "relative",
   height: "340px",
   width: "390px",
   background: theme.palette.primary.main,
   borderRadius: "12px",

   "& img": {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: "-32px",
      left: "-32px",
      objectFit: "cover",
      borderRadius: "12px"
   },

   [theme.breakpoints.down("lg")]: {
      height: "300px",
      width: "340px",
   },
   [theme.breakpoints.down("md")]: {
      width: "100%",
      background: "transparent",

      "& img": {
         top: "0",
         left: "0"
      },
   },
   [theme.breakpoints.down("sm")]: {
      height: "220px"
   },
}));

const HomeAboutSection = () => {
   return (
       <StyledSection>
          <div className="container">
             <Grid container spacing={{md: 8, xs: 2}}>
                <Grid item md={7} xs={12}>
                   <Box mt={{md: 6, sm: 0}}>
                      <Typography className="title" variant={"h3"}>About product</Typography>
                      <Typography variant={"subtitle1"}>Shanghai Wiswealth Technology Co., Ltd - основанная в 2000 году,
                         специализируется на дистрибуции электронных компонентов всемирно известных брендов. Наша
                         компания
                         занимается оригинальной дистрибуцией, а также предоставляет решения для цепочки поставок
                         электронных компонентов за счет снижения затрат, включая долгосрочные запасы пассивных
                         компонентов, быструю доставку недостающих компонентов в течение 3 дней, отгрузку на складе,
                         спецификацию и поставку в небольших количествах</Typography>
                   </Box>
                </Grid>
                <Grid item md={5} xs={12}>
                   <Box mt={{md: 4, sm: 0}}>
                      <StyledBox>
                         <img src={Img} alt="img"/>
                      </StyledBox>
                   </Box>
                </Grid>
             </Grid>
          </div>
       </StyledSection>
   );
};

export default HomeAboutSection;