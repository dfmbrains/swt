import React from 'react';
import {StyledSection} from "../../../components/StyledComponents";
import {Grid, Typography} from "@mui/material";
import ProductTypeCard from "../../../components/ProductTypeCard";
import {productTypes} from "../../../data/productTypes";
import {useTranslation} from "react-i18next";
import {FlexAllCenter} from "../../../components/FlexBoxes";

const HomeProducts = () => {
  const {t} = useTranslation()

  return (
    <StyledSection>
      <div className="container">
        <FlexAllCenter sx={{mb: 7}}>
          <Typography sx={{textAlign: "center", width: "60%"}} variant={"h4"}>{t("contacts.subtitle")}</Typography>
        </FlexAllCenter>

        <Typography className="title" variant={"h3"}>{t('items')}</Typography>

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