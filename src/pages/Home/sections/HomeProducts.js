import React from 'react';
import {StyledSection} from "../../../components/StyledComponents";
import {Grid, Typography} from "@mui/material";
import ProductTypeCard from "../../../components/ProductTypeCard";
import {productTypes} from "../../../data/productTypes";
import {useTranslation} from "react-i18next";

const HomeProducts = () => {
   const {t} = useTranslation()

   return (
       <StyledSection>
          <div className="container">
             <Typography className="title" variant={"h3"}>{t('sections.products')}</Typography>

             <Grid container spacing={2}>
                {productTypes.map((item, idx) => (
                    <Grid key={idx} item lg={3} md={4} sm={6} xs={12}>
                       <ProductTypeCard productType={item}/>
                    </Grid>
                ))}
             </Grid>
          </div>
       </StyledSection>
   );
};

export default HomeProducts;