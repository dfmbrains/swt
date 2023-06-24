import React, {useState} from 'react';
import {StyledSection} from "./StyledComponents";
import {styled, TextField, Typography} from "@mui/material";
import {LoadingButton} from "@mui/lab";
import {useTranslation} from "react-i18next";
import emailjs from "@emailjs/browser";
import {EMAIL_JS_PUBLIC_KEY, EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID_FOR_EMAIL} from "../helpers/constants";

const StyledBox = styled(StyledSection)(({theme}) => ({
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
   },

   [theme.breakpoints.down("sm")]: {
      padding: "50px 0",
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

   const [email, setEmail] = useState('')
   const [partNumber, setPartNumber] = useState('')

   const [loading, setLoading] = useState(false);

   const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);

      emailjs
          .send(
              EMAIL_JS_SERVICE_ID,
              EMAIL_JS_TEMPLATE_ID_FOR_EMAIL,
              {email, partNumber},
              EMAIL_JS_PUBLIC_KEY
          )
          .then(
              () => {
                 setLoading(false);

                 setEmail('');
              },
              (error) => {
                 setLoading(false);
                 console.error(error);
              }
          )
          .catch((error) => {
             setLoading(false);
             console.error(error);
          })
   }

   return (
       <StyledBox>
          <Typography className="title" variant={"h3"}>{t('sections.emailForm')}</Typography>
          <Typography className="subtitle" variant={"h5"}>{t('formSection.subtitle')}</Typography>

          <StyledForm onSubmit={handleSubmit}>
             <TextField fullWidth
                        type="text"
                        name="partNumber"
                        label={t('placeholders.partNumber')}
                        size={"small"}
                        value={partNumber}
                        onChange={(e) => setPartNumber(e.target.value)}
             />
             <TextField fullWidth
                        type="email"
                        name="email"
                        label={t('placeholders.email')}
                        size={"small"}
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
             />
             <LoadingButton loading={loading} type={"submit"} fullWidth
                            variant={"contained"}>{t('buttons.send')}</LoadingButton>
          </StyledForm>
       </StyledBox>
   );
};

export default FormSection;