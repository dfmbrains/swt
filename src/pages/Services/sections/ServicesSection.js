import React from 'react';
import {StyledSection} from "../../../components/StyledComponents";
import {Grid, Icon, styled, Typography} from "@mui/material";

const StyledCard = styled('div')(() => ({
   padding: "32px",
   boxShadow: "0px 13px 19px rgba(0, 0, 0, 0.07)",

   "& .icon": {
      fontSize: 42
   },

   "& .cardTitle": {
      fontWeight: 700,
      margin: "12px 0 10px"
   },

   "& .cardSubtitle": {
      color: "#737373",
      fontWeight: "400",
      height: 36
   }
}));

const ServicesSection = () => {
   const services = [
      {
         title: 'Digital Marketing',
         subtitle: "We focus on ergonomics and meeting you where you work.",
         icon: "business_center"
      },
      {
         title: 'National top 50 firms',
         subtitle: "Just type what's on your mind and we'll get you there.",
         icon: "store_mall_directory"
      },
      {
         title: 'Digital Marketing',
         subtitle: "the quick fox jumps over the lazy dog",
         icon: "menu_book"
      }
   ]

   return (
       <StyledSection>
          <div className="container">
             <Typography className="title" variant={"h3"}>Services</Typography>

             <Grid container spacing={6}>
                {services.map((el, idx) => (
                    <Grid key={idx} item xs={4}>
                       <StyledCard>
                          <Icon className={"icon"} color={"primary"}>{el.icon}</Icon>

                          <Typography className="cardTitle" variant={"h5"}>{el.title}</Typography>
                          <Typography className="cardSubtitle" variant={"subtitle2"}>{el.subtitle}</Typography>
                       </StyledCard>
                    </Grid>
                ))}
                {services.map((el, idx) => (
                    <Grid key={idx} item xs={4}>
                       <StyledCard>
                          <Icon className={"icon"} color={"primary"}>{el.icon}</Icon>

                          <Typography className="cardTitle" variant={"h5"}>{el.title}</Typography>
                          <Typography className="cardSubtitle" variant={"subtitle2"}>{el.subtitle}</Typography>
                       </StyledCard>
                    </Grid>
                ))}
             </Grid>
          </div>
       </StyledSection>
   );
};

export default ServicesSection;