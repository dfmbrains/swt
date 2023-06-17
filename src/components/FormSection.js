import React from 'react';
import {StyledSection} from "./StyledComponents";
import {Button, styled, TextField, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";

const StyledBox = styled(StyledSection)(() => ({
   margin: "30px 0 0",
   padding: "70px 0",
   background: "#F7F7F7",

   "& .title": {
      textAlign: "center",
      margin: "0 0 10px",
   },
   "& .subtitle": {
      textAlign: "center",
      margin: "0 0 32px",
   }
}));

const StyledForm = styled('form')(() => ({
   display: "flex",
   alignItems: "center",
   flexDirection: "column",
   rowGap: "10px",
   width: "300px",
   margin: "0 auto"
}));

const FormSection = () => {
   const {t} = useTranslation()

   return (
       <StyledBox>
          <Typography className="title" variant={"h3"}>{t('sections.emailForm')}</Typography>
          <Typography className="subtitle" variant={"h5"}>{t('formSection.subtitle')}</Typography>

          <StyledForm>
             <TextField fullWidth
                        type="text"
                        name="partNumber"
                        label={t('placeholders.partNumber')}
                        size={"small"}
             />
             <TextField fullWidth
                        type="email"
                        name="email"
                        label={t('placeholders.email')}
                        size={"small"}
                        required
             />
             <Button type={"submit"} fullWidth variant={"contained"}>{t('buttons.send')}</Button>
          </StyledForm>
       </StyledBox>
   );
};

export default FormSection;