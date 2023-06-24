import React, {useEffect, useState} from 'react';
import {Grid, Pagination, Tab, Tabs, Typography, useMediaQuery, useTheme} from "@mui/material";
import {useTranslation} from "react-i18next";
import {StyledSection, PaginationBox} from "../../../components/StyledComponents";
import {categories} from "../../../data/categories";
import {useSearchParams} from "react-router-dom";
import {productsData} from "../../../data/products";
import ProductCard from "../../../components/ProductCard";

function a11yProps(index) {
   return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
   };
}

const pageSize = 15

const ProductsSection = () => {
   const {t} = useTranslation()
   const theme = useTheme()
   const [searchParams, setSearchParams] = useSearchParams()

   const isLaptop = useMediaQuery(theme.breakpoints.up("md"));

   const [products, setProducts] = useState([])
   const [productsByCategory, setProductsByCategory] = useState([])

   const [category, setCategory] = useState(+searchParams.get('category') || categories[0].id)
   const [page, setPage] = useState(+searchParams.get('page') || 1)

   const handleChangeCategory = (newCategory) => {
      setSearchParams({category: newCategory, page: 1})
      setCategory(newCategory)

      setPage(1)
      handleData(1, newCategory)
   };
   const handleChangePage = (newPage) => {
      handleData(newPage, category)

      setPage(newPage)

      const prevParams = Object.fromEntries(searchParams.entries());
      setSearchParams({...prevParams, page: newPage})
   }
   const handleData = (page, newCategory) => {
      const data = productsData.filter(el => el.category === newCategory)

      setProductsByCategory(data)

      const pageStarter = page > 0 ? ((page - 1) * pageSize) : 0
      setProducts(data.slice(pageStarter, pageStarter + pageSize))
   }

   useEffect(() => {
      handleData(page, category)
   }, [])

   return (
       <StyledSection>
          <div className="container">
             <Typography className="title" variant={"h3"}>{t('menu.products')}</Typography>

             <Grid container spacing={{md: 5, xs: 2}}>
                <Grid item md={3} xs={12}>
                   <Tabs
                       orientation={isLaptop ? "vertical" : 'horizontal'}
                       variant={isLaptop ? "standard" : 'scrollable'}
                       value={+searchParams.get('category') || categories[0].id}
                       scrollButtons={!isLaptop}
                       allowScrollButtonsMobile={!isLaptop}
                       onChange={(e, newCategory) => handleChangeCategory(newCategory)}
                       aria-label="responsive tabs"
                       sx={{borderRight: 1, borderColor: 'divider'}}
                   >
                      {categories.map(el => (
                          <Tab value={el.id} key={el.id} label={el.title.ru} {...a11yProps(el.id)}/>
                      ))}
                   </Tabs>
                </Grid>
                <Grid item md={9} xs={12}>
                   <Grid container spacing={3}>
                      {products.map(item => (
                          <Grid key={item.id} item md={4} sm={6} xs={12}>
                             <ProductCard product={item}/>
                          </Grid>
                      ))}
                   </Grid>

                   <PaginationBox>
                      <Pagination color="primary" onChange={(event, newPage) => handleChangePage(newPage)}
                                  count={Math.ceil(productsByCategory.length / pageSize)} page={page}/>
                   </PaginationBox>
                </Grid>
             </Grid>
          </div>
       </StyledSection>
   );
};

export default ProductsSection;