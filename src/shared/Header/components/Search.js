import React, {useState} from 'react';
import {Icon, IconButton, InputAdornment, styled, TextField} from "@mui/material";
import {useTranslation} from "react-i18next";
import {useNavigate, useSearchParams} from "react-router-dom";


const StyledTextField = styled(TextField)(() => ({
   "& .MuiFormHelperText-root": {
      position: "absolute",
      top: "100%",
      left: "50%",
      transform: "translate(-50%)",
      width: "100%"
   }
}));

const Search = ({handleCloseBurger, variant}) => {
   const {t} = useTranslation()
   const navigate = useNavigate()
   const [searchParams] = useSearchParams()

   const [searchValue, setSearchValue] = useState(searchParams.get('query') || "")

   const [error, setError] = useState(false)

   const handleSubmit = () => {
      if (searchValue) {
         setError(false)

         navigate(`/search?query=${searchValue}`)
         if (handleCloseBurger) handleCloseBurger()
      } else {
         setError(true)
      }
   }

   return (
       <StyledTextField
           fullWidth
           type="text"
           name="search"
           label={t('placeholders.search')}
           onChange={e => setSearchValue(e.target.value)}
           value={searchValue}
           size={"small"}
           variant={variant}
           helperText={error && t('min5length')}
           error={error}
           InputProps={{
              endAdornment: <InputAdornment position="end">
                 <IconButton onClick={handleSubmit} size={"small"}>
                    <Icon color={"primary"}>search</Icon>
                 </IconButton>
              </InputAdornment>,
           }}
       />
   );
};

export default Search;