import React from 'react';
import {styled, Typography} from "@mui/material";

const StyledCard = styled('div')(({bgimage}) => ({
   transition: "0.15s",
   background: `url(${bgimage})`,
   backgroundPosition: "center",
   backgroundSize: "cover",
   backgroundRepeat: "no-repeat",
   position: "relative",
   borderRadius: 12,
   cursor: "pointer",

   "&:hover": {
      "&:before": {
         backgroundColor: "#00000099",
      }
   },

   "&:before": {
      content: "''",
      position: "absolute",
      top: "0",
      left: "0",
      backgroundColor: "#00000090",
      height: "100%",
      width: "100%",
      borderRadius: 12,
   },

   "& .companyOrientationCardBox": {
      position: "relative",
      zIndex: 1,
      padding: "24px 16px",
      height: "200px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      rowGap: "12px",
      userSelect: "none"
   },

   "& .MuiTypography-root": {
      "&::first-letter": {
         textTransform: "uppercase"
      }
   },

   "& .companyOrientationCardTitle": {
      fontWeight: 500,
      color: "#FFF"
   },

   "& .companyOrientationCardSubtitle": {
      fontWeight: 400,
      color: "#c7c5c5"
   }
}));

const CompanyOrientationCard = ({orientation}) => {
   return (
       <StyledCard bgimage={orientation.img}>
          <div className={"companyOrientationCardBox"}>
             <Typography className="companyOrientationCardTitle" variant={"h5"}>{orientation.title.ru}</Typography>

             <Typography className="companyOrientationCardSubtitle"
                         variant={"body2"}>{orientation.subtitle.ru}</Typography>
          </div>
       </StyledCard>
   );
};

export default CompanyOrientationCard;