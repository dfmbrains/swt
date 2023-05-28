import React from 'react';
import {StyledSection} from "../../../components/StyledComponents";
import {Grid, Typography} from "@mui/material";
import ProductCard from "../../../components/ProductCard";

const HomeProducts = () => {
   return (
       <StyledSection>
          <div className="container">
             <Typography className="title" variant={"h3"}>Product</Typography>

             <Grid container spacing={2}>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                   <ProductCard/>
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                   <ProductCard/>
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                   <ProductCard/>
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                   <ProductCard/>
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                   <ProductCard/>
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                   <ProductCard/>
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                   <ProductCard/>
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                   <ProductCard/>
                </Grid>
             </Grid>
          </div>
       </StyledSection>
   );
};

export default HomeProducts;