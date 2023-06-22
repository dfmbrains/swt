import React from 'react';
import {Icon, InputAdornment, TextField} from "@mui/material";
import {useTranslation} from "react-i18next";

const Search = ({variant}) => {
   const {t} = useTranslation()

   return (
       <TextField
           fullWidth
           type="text"
           name="search"
           label={t('placeholders.search')}
           size={"small"}
           variant={variant}
           InputProps={{
              endAdornment: <InputAdornment position="end"><Icon color={"primary"}>search</Icon></InputAdornment>,
           }}
       />
   );
};

export default Search;