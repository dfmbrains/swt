import React from 'react';
import {StyledSection} from "./StyledComponents";
import {Grid, Icon, styled, Typography} from "@mui/material";

const StyledBox = styled(StyledSection)(() => ({
   "& .title": {
      textAlign: "center",
      margin: "0 0 40px"
   }
}));

const StyledCard = styled('div')(() => ({
   "& .cardTitle": {
      margin: "15px 0 10px",
      fontWeight: "600"
   },
   "& h6": {
      marginBottom: "10px",
      fontWeight: "400",
      color: "#737373"
   },
   "& .icon": {
      fontSize: 36
   }
}));

const BenefitsSection = () => {
   const data = [
      {
         title: 'Большой ассортимент стока',
         subtitle: 'Большой ассортимент стока- Более более 100000 наименований в наличии',
         icon: "playlist_add"
      },
      {
         title: 'Тестирование перед отправкой',
         subtitle: 'Дополнительная проверка и тестирование  перед отправкой к клиенту',
         icon: "biotech"
      },
      {
         title: 'Авиа доставка или Доставка по всему миру',
         subtitle: 'Авиа доставка в любую точку мира.',
         icon: "connecting_airports"
      },
      {
         title: 'Удобная оплата',
         subtitle: 'Вы получите наши услуги по минимальной цене по сравнению с нашими конкурентами',
         icon: "payment"
      },
      {
         title: 'Онлайн поддержка 24/7',
         subtitle: 'Быстрый ответ наших специалистов - 24/7',
         icon: "support_agent"
      },
      {
         title: 'Онлайн поддержка 24/7',
         subtitle: 'Быстрый ответ наших специалистов - 24/7',
         icon: "support_agent"
      }
   ]

   return (
       <StyledBox>
          <div className="container">
             <Typography className="title" variant={"h3"}>Our benefits</Typography>

             <Grid container spacing={5}>
                {data.map((el, idx) => (
                    <Grid key={idx} item xs={4}>
                       <StyledCard>
                          <Icon color={"primary"} className={"icon"}>{el.icon}</Icon>

                          <Typography className="cardTitle" variant={"h4"}>{el.title}</Typography>
                          <Typography className="cardSubtitle" variant={"subtitle2"}>{el.subtitle}</Typography>
                       </StyledCard>
                    </Grid>
                ))}
             </Grid>
          </div>
       </StyledBox>
   );
};

export default BenefitsSection;