import React from 'react';
import {StyledSection} from "../../components/StyledComponents";
import {Button, Grid, Icon, styled, TextField, Typography} from "@mui/material";
import {FlexGap10} from "../../components/FlexBoxes";
import BenefitsSection from "../../components/BenefitsSection";
import {useTranslation} from "react-i18next";

const StyledBox = styled(StyledSection)(() => ({
   padding: "30px 0 60px",

   "& .formTitle": {
      textAlign: "center",
      marginBottom: 8
   }
}));

const StyledGrid = styled(Grid)(() => ({
   "& .subtitle": {
      marginBottom: "40px"
   },
   "& .text": {
      color: "#737373",
   },
   "& .contactRow": {
      margin: "8px 0 24px",

      "& a": {color: "#000"}
   },
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

                      <Typography className={"text"}
                                  variant={"h6"}>{t(`${tRootKey}.ourLocation`)}:</Typography>
                      <FlexGap10 className={"contactRow"}>
                         <Icon color={"primary"}>location_on</Icon>
                         <Typography variant={"subtitle1"}>Building C, No. 888, West Huanhu 2nd Road, <br/> Lingang New
                            Area of China (Shanghai) Pilot Free Trade Zone</Typography>
                      </FlexGap10>

                      <Typography className={"text"} variant={"h6"}>{t("phoneNumber")}</Typography>
                      <FlexGap10 className={"contactRow"}>
                         <Icon color={"primary"}>phone</Icon>
                         <a href="tel:+8618521372646">
                            <Typography variant={"subtitle1"}>+86 185-2137-2646 (Whatsapp, Wechat,
                               Telegram)</Typography>
                         </a>
                      </FlexGap10>

                      <Typography mt={3} className={"text"}
                                  variant={"h6"}>{t(`${tRootKey}.writeUs`)}:</Typography>
                      <FlexGap10 className={"contactRow"}>
                         <Icon color={"primary"}>email</Icon>
                         <a href="mailto:info@wiswealth.com">
                            <Typography variant={"subtitle1"}>info@wiswealth.com</Typography>
                         </a>
                      </FlexGap10>
                   </StyledGrid>

                   <Grid item xs={6}>
                      <Typography className={"formTitle"} variant={"h4"}>{t(`${tRootKey}.forApplication`)}</Typography>

                      <StyledForm>
                         <Grid container spacing={3}>
                            <Grid item xs={12}>
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
                                   label={t('placeholders.phoneNumber')}
                                   name="phoneNumber"
                                   variant="standard"
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
                                   label={t('placeholders.partNumber')}
                                   name="partNumber"
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