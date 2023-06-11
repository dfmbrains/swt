import React from 'react';
import {StyledSection} from "../../components/StyledComponents";
import {Button, Grid, Icon, styled, TextField, Typography} from "@mui/material";
import {FlexGap10} from "../../components/FlexBoxes";
import BenefitsSection from "../../components/BenefitsSection";
import {useTranslation} from "react-i18next";

const StyledBox = styled(StyledSection)(() => ({
   padding: "30px 0 60px",
}));

const StyledGrid = styled(Grid)(() => ({
   "& .subtitle": {
      marginBottom: "40px"
   },
   "& .text": {
      color: "#737373",
   },
   "& .contactItem": {
      marginTop: "8px",
      display: "block",
      color: "#000",
   },
   "& .phones": {
      margin: "8px 0 24px",
      columnGap: "24px",

      "& a": {color: "#000"}
   }
}));

const StyledForm = styled('form')(() => ({
   width: "100%"
}));

const Contact = () => {
   const tRootKey = 'contacts'

   const {t} = useTranslation()

   return (
       <>
          <StyledBox>
             <div className="container">
                <Typography className={"title"} variant={"h3"}>{t('sections.getInTouch')}</Typography>

                <Grid container spacing={5} alignItems={"center"}>
                   <StyledGrid item xs={6}>
                      <Typography className={"subtitle"} variant={"subtitle1"}>{t(`${tRootKey}.subtitle`)}</Typography>
                      <Typography className={"text"} variant={"body1"}>{t(`${tRootKey}.support`)} 24/7</Typography>

                      <FlexGap10 className={"phones"}>
                         <Icon>phone</Icon>
                         <a href="tel:+8618521372646">
                            <Typography variant={"h4"}>+8618521372646</Typography>
                         </a>
                      </FlexGap10>

                      <Typography className={"text"}
                                  variant={"h5"}>{t(`${tRootKey}.ourLocation`)}</Typography>
                      <Typography className={"contactItem"} variant={"subtitle1"}>Building C, No. 888, West Huanhu 2nd
                         Road, <br/> Lingang New Area of China (Shanghai) Pilot Free Trade Zone</Typography>

                      <Typography mt={3} className={"text"} variant={"h5"}>{t(`${tRootKey}.writeUs`)}</Typography>
                      <a className={"contactItem"} href="mailto:info@wiswealth.com">
                         <Typography variant={"subtitle1"}>info@wiswealth.com</Typography>
                      </a>
                   </StyledGrid>
                   <Grid item xs={6}>
                      <StyledForm>
                         <Grid container spacing={5}>
                            <Grid item xs={6}>
                               <TextField
                                   fullWidth
                                   type="text"
                                   label={t('placeholders.name')}
                                   name="name"
                                   variant="standard"
                                   required
                               />
                            </Grid>
                            <Grid item xs={6}>
                               <TextField
                                   fullWidth
                                   type="email"
                                   label={t('placeholders.email')}
                                   name="email"
                                   variant="standard"
                                   required
                               />
                            </Grid>
                            <Grid item xs={6}>
                               <TextField
                                   fullWidth
                                   type="text"
                                   label={t('placeholders.yourCompany')}
                                   name="yourCompany"
                                   variant="standard"
                               />
                            </Grid>
                            <Grid item xs={6}>
                               <TextField
                                   fullWidth
                                   type="text"
                                   label={t('placeholders.phoneNumber')}
                                   name="phoneNumber"
                                   variant="standard"
                               />
                            </Grid>
                            <Grid item xs={12}>
                               <TextField
                                   fullWidth
                                   type="text"
                                   label={t('placeholders.message')}
                                   name="message"
                                   variant="standard"
                                   required
                                   multiline
                                   minRows={5}
                               />
                            </Grid>

                            <Grid item xs={12}>
                               <Button size={"large"} type={"submit"} fullWidth
                                       variant={"contained"}>{t('buttons.send')}</Button>
                            </Grid>
                         </Grid>
                      </StyledForm>
                   </Grid>
                </Grid>
             </div>
          </StyledBox>
          <BenefitsSection/>

          <br/>
          <br/>
       </>
   );
};

export default Contact;