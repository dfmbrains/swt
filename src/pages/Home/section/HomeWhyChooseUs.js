import React from 'react';
import {StyledSection} from "../../../components/StyledComponents";
import {styled, Typography} from "@mui/material";

const StyledBox = styled(StyledSection)(({theme}) => ({
   background: theme.palette.primary.main,
   padding: "70px 0",

   "& .title": {
      textAlign: "center",
      color: "#FFF"
   },
   "& h6": {
      textAlign: "center",
      color: "#FFF",

      "&:not(:last-child)": {
         marginBottom: "15px"
      }
   }
}));

const HomeWhyChooseUs = () => {
   return (
       <StyledBox>
          <div className="container">
             <Typography className="title" variant={"h2"}>Why Us?</Typography>

             <Typography variant={"subtitle1"}>Товар в наличии более 100000 элементов</Typography>
             <Typography variant={"subtitle1"}>Гарантия 1.5 года (18 месяцев)</Typography>
             <Typography variant={"subtitle1"}>Доверие в сотрудничестве в первую очередь. Сотрудничество без обмана и
                лжи</Typography>
             <Typography variant={"subtitle1"}>100% оригинальные компоненты, поставка в течение 2-х дней после
                оплаты</Typography>
          </div>
       </StyledBox>
   );
};

export default HomeWhyChooseUs;