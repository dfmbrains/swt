import React from 'react';
import {StyledSection} from "../../../components/StyledComponents";
import {Grid, styled, Typography} from "@mui/material";
import CompanyImg from '../../../assets/imgs/company.webp'

const StyledImgBox = styled('div')(({theme}) => ({
   height: "420px",
   borderRadius: "12px",
   overflow: "hidden",

   "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover"
   }
}));

const AboutSection1 = () => {
   return (
       <StyledSection>
          <div className="container">
             <Typography className={"title"} variant={"h3"}>About us</Typography>

             <Grid container spacing={6}>
                <Grid item xs={6}>
                   <StyledImgBox>
                      <img src={CompanyImg} alt="company"/>
                   </StyledImgBox>
                </Grid>
                <Grid item xs={6}>
                   <Typography variant={"subtitle1"}>Shanghai Wiswealth Technology Co., Ltd - основанная в 2000 году,
                      специализируется на дистрибуции электронных компонентов всемирно известных брендов. Наша компания
                      занимается оригинальной дистрибуцией, а также предоставляет решения для цепочки поставок
                      электронных компонентов за счет снижения затрат, включая долгосрочные запасы пассивных
                      компонентов, быструю доставку недостающих компонентов в течение 3 дней, отгрузку на складе,
                      спецификацию и поставку в небольших количествах</Typography>
                </Grid>
             </Grid>
          </div>
       </StyledSection>
   );
};

export default AboutSection1;