import React, {useEffect, useState} from 'react';
import {CircularProgress, Icon, IconButton, styled, Tooltip, Typography} from "@mui/material";
import ImageComponent from "./ImageComponent";
import {subcategories} from "../data/categories";
import {useTranslation} from "react-i18next";

const StyledCard = styled('div')(({theme}) => ({
   padding: "16px 16px 24px",
   background: "#FFFFFF",
   border: "1px solid rgba(57, 115, 185, 0.3)",
   borderRadius: 12,
   transition: "0.15s",
   position: "relative",
   "&:hover": {
      borderColor: theme.palette.primary.main,
      boxShadow: "0px 43px 80px rgba(0, 0, 0, 0.04), 0px 17.9644px 33.4221px rgba(0, 0, 0, 0.0287542), 0px 9.60461px 17.869px rgba(0, 0, 0, 0.0238443), 0px 5.38427px 10.0172px rgba(0, 0, 0, 0.02), 0px 2.85954px 5.32008px rgba(0, 0, 0, 0.0161557), 0px 1.18992px 2.21381px rgba(0, 0, 0, 0.0112458)",

      "& .productCardCopy": {
         display: "block"
      },
   },

   "& .productCardTitle": {
      margin: "24px 0 8px"
   },
   "& .productCardModel": {
      position: "absolute",
      top: "8px",
      left: "8px",
      zIndex: 1,
      padding: "2px 6px 2px",
      background: theme.palette.primary.main,
      borderRadius: 4,
      color: "#FFF"
   },
   "& .productCardCopy": {
      position: "absolute",
      top: "8px",
      right: "8px",
      display: "none",
      zIndex: 1
   },
   "& .imgBox": {
      width: "100%",
      borderRadius: 12,
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "200px",
      position: "relative",

      "& img": {
         width: "80%",
         height: "100%",
         objectFit: "cover",
      },
      "& .loading": {
         position: "absolute"
      },
   },

   [theme.breakpoints.down("sm")]: {
      "& img": {
         width: "70%",
      },
   }
}));

const ProductTypeCard = ({product}) => {
   const {t} = useTranslation()

   const [imageLoading, setImageLoading] = useState(true)

   const [isCopied, setIsCopied] = useState(false)
   const [isHovered, setIsHovered] = useState(false)

   const handleCopy = () => {
      navigator.clipboard.writeText(product.model)
          .then(() => setIsCopied(true))
   }

   useEffect(() => {
      if (!isHovered) {
         setIsCopied(false)
      }
   }, [isHovered])

   return (
       <StyledCard onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <Typography className="productCardModel" variant={"body1"}>{product.model}</Typography>
          <div className="productCardCopy">
             <Tooltip placement={"top"} title={t(isCopied ? "modelCopied" : "copyModel")}>
                <IconButton color={isCopied ? "success" : "primary"} onClick={handleCopy}>
                   <Icon>{isCopied ? 'task' : 'content_copy'}</Icon>
                </IconButton>
             </Tooltip>
          </div>

          <div className="imgBox">
             <ImageComponent setIsLoading={setImageLoading} src={product?.image} alt={product.model}/>
             {imageLoading && (
                 <CircularProgress className="loading"/>
             )}
          </div>

          <Typography className="productCardTitle" variant={"h5"}>
             {subcategories.find(el => product.subcategory === el.id).title.ru}
          </Typography>
          <Typography variant={"body1"}>{product.description}</Typography>
       </StyledCard>
   );
};

export default ProductTypeCard;