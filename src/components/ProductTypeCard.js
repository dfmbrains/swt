import React from 'react';
import {styled, Typography} from "@mui/material";
import ImageComponent from "./ImageComponent";

const StyledCard = styled('div')(({theme}) => ({
   padding: "16px 16px 24px",
   background: "#FFFFFF",
   border: "1px solid rgba(57, 115, 185, 0.3)",
   borderRadius: 12,
   height: "100%",
   transition: "0.15s",
   "&:hover": {
      borderColor: theme.palette.primary.main,
      boxShadow: "0px 43px 80px rgba(0, 0, 0, 0.04), 0px 17.9644px 33.4221px rgba(0, 0, 0, 0.0287542), 0px 9.60461px 17.869px rgba(0, 0, 0, 0.0238443), 0px 5.38427px 10.0172px rgba(0, 0, 0, 0.02), 0px 2.85954px 5.32008px rgba(0, 0, 0, 0.0161557), 0px 1.18992px 2.21381px rgba(0, 0, 0, 0.0112458)"
   },

   "& .productTypeCardTitle": {
      marginTop: "16px"
   },
   "& img": {
      width: "80%",
      objectFit: "cover",
      borderRadius: 12,
      display: "block",
      margin: "0 auto"
   },

   [theme.breakpoints.down("sm")]: {
      "& img": {
         objectFit: "cover",
         width: "70%",
      },
   }
}));

const ProductTypeCard = ({productType}) => {
   return (
       <StyledCard>
          <ImageComponent src={productType.img} alt={productType.title.ru}/>
          <Typography className="productTypeCardTitle" variant={"h5"}>{productType.title.ru}</Typography>
       </StyledCard>
   );
};

export default ProductTypeCard;