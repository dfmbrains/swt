import React from 'react';
import {Icon, styled, Typography} from "@mui/material";
import {FlexAllCenter, FlexGap10} from "./FlexBoxes";

const StyledCard = styled('div')(({theme}) => ({
   padding: "24px 16px",
   background: "#F7F7F7",
   borderRadius: 12,
   transition: "0.15s",

   "&:hover": {
      boxShadow: "0px 0px 10px #F0F0F0"
   },

   "& .companyOrientationCardTitle": {
      margin: "16px 0",
      height: "44px",

      "&::first-letter": {
         textTransform: "uppercase"
      }
   },

   "& .companyOrientationCardSubtitle": {
      marginTop: "16px",
      height: "54px",
      color: "#737373",
      fontWeight: 400,

      "&::first-letter": {
         textTransform: "uppercase"
      }
   },

   "& .line": {
      background: theme.palette.primary.main,
      borderRadius: 6,
      height: 6
   },
   "& .line-small": {
      width: 20
   },
   "& .line-big": {
      width: 60
   },

   [theme.breakpoints.down("sm")]: {
      "& img": {
         height: "200px"
      },
   }
}));

const CompanyOrientationCardImgBox = styled(FlexAllCenter)(() => ({
   width: "80px",
   height: "80px",
   objectFit: "cover",
   borderRadius: 12,
   background: "#FFF",

   "& .icon": {
      fontSize: 48
   }
}));

const CompanyOrientationCard = ({orientation}) => {
   return (
       <StyledCard>
          <CompanyOrientationCardImgBox>
             <Icon className={"icon"} color={"primary"}>{orientation.icon}</Icon>
          </CompanyOrientationCardImgBox>

          <Typography className="companyOrientationCardTitle" variant={"h5"}>{orientation.title.ru}</Typography>

          <FlexGap10>
             <div className="line line-big"/>
             <div className="line line-small"/>
          </FlexGap10>

          <Typography className="companyOrientationCardSubtitle"
                      variant={"subtitle2"}>{orientation.subtitle.ru}</Typography>
       </StyledCard>
   );
};

export default CompanyOrientationCard;