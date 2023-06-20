import React from 'react';
import {styled, Typography} from "@mui/material";

const StyledCard = styled('div')(({bgimage}) => ({
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
      transition: "0.15s"
   },

   "& .applicationCardBox": {
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

   "& .applicationCardTitle": {
      fontWeight: 500,
      color: "#FFF"
   },

   "& .applicationCardSubtitle": {
      fontWeight: 400,
      color: "#c7c5c5",
      minHeight: "29px",
      marginBottom: -10
   }
}));

const ApplicationsCard = ({application}) => {
   return (
       <StyledCard bgimage={application.img}>
          <div className={"applicationCardBox"}>
             <Typography className="applicationCardTitle" variant={"h4"}>{application.title}</Typography>

             <Typography className="applicationCardSubtitle"
                         variant={"body2"}>{application.subtitle}</Typography>
          </div>
       </StyledCard>
   );
};

export default ApplicationsCard;