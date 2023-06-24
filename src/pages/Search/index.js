import React, {useEffect, useState} from 'react';
import {Grid, Pagination, styled, Typography} from "@mui/material";
import {StyledSection, PaginationBox} from "../../components/StyledComponents";
import {useTranslation} from "react-i18next";
import ProductCard from "../../components/ProductCard";
import {productsData} from "../../data/products";
import {useSearchParams} from "react-router-dom";

const pageSize = 15


const StyledBox = styled(StyledSection)(({theme}) => ({
   minHeight: "calc(100vh - 105.13px)",

   [theme.breakpoints.down("md")]: {
      minHeight: "calc(100vh - 81.98px)",
   }
}));

const SearchPage = () => {
   const {t} = useTranslation()
   const [searchParams, setSearchParams] = useSearchParams()

   const [page, setPage] = useState(+searchParams.get('page') || 1)

   const [products, setProducts] = useState([])
   const [productsByQuery, setProductsQuery] = useState([])

   const handleChangePage = (newPage) => {
      handleData(newPage)

      setPage(newPage)

      const prevParams = Object.fromEntries(searchParams.entries());
      setSearchParams({...prevParams, page: newPage})
   }

   const handleData = (page) => {
      const pageStarter = page > 0 ? ((page - 1) * pageSize) : 0
      setProducts(productsByQuery.slice(pageStarter, pageStarter + pageSize))
   }

   const findQuery = () => {
      const query = searchParams.get('query');
      const data = [];

      for (let i = 0; i < productsData.length; i++) {
         if (
             (productsData[i]?.model && String(productsData[i].model).includes(query)) ||
             (productsData[i]?.description && String(productsData[i].description).includes(query))
         ) {
            data.push(productsData[i]);
         }
      }
      return data;
   }

   useEffect(() => {
      setProductsQuery(findQuery())
   }, [searchParams])

   useEffect(() => {
      if (productsByQuery.length > 0) {
         handleData()
      }
   }, [productsByQuery])

   console.log(productsByQuery)

   return (
       <StyledBox>
          <div className="container">
             <Typography className="title" variant={"h3"}>{t('searchResults')}:</Typography>

             {products.length > 0
                 ? <>
                    <Grid container spacing={3}>
                       {products.map(item => (
                           <Grid key={item.id} item md={3} sm={6} xs={12}>
                              <ProductCard product={item}/>
                           </Grid>
                       ))}
                    </Grid>
                    <PaginationBox>
                       <Pagination color="primary" onChange={(event, newPage) => handleChangePage(newPage)}
                                   count={Math.ceil(productsByQuery.length / pageSize)} page={page}/>
                    </PaginationBox>
                 </>
                 : <Typography className="subtitle" variant={"h5"}>{t('notFoundTryAgain')}</Typography>
             }
          </div>
       </StyledBox>
   );
};

export default SearchPage;