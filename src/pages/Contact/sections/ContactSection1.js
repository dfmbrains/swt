import React, {useState} from 'react';
import {Grid, Icon, styled, TextField, Typography} from "@mui/material";
import {FlexGap10} from "../../../components/FlexBoxes";
import {Trans, useTranslation} from "react-i18next";
import {LoadingButton} from "@mui/lab";
import emailjs from "@emailjs/browser";
import {
  email,
  EMAIL_JS_PUBLIC_KEY,
  EMAIL_JS_SERVICE_ID,
  EMAIL_JS_TEMPLATE_ID_FOR_CONTACT
} from "../../../helpers/constants";
import {StyledSection} from "../../../components/StyledComponents";

const StyledBox = styled(StyledSection)(() => ({
  padding: "30px 0 60px",

  "& .formTitle": {
    textAlign: "center",
    marginBottom: 8
  }
}));

const StyledGrid = styled(Grid)(() => ({
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

const ContactSection1 = () => {
  const tRootKey = 'contacts'
  const {t} = useTranslation()

  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({})

  const handleSubmitForm = (e) => {
    e.preventDefault()
    setLoading(true);

    emailjs
      .send(
        EMAIL_JS_SERVICE_ID,
        EMAIL_JS_TEMPLATE_ID_FOR_CONTACT,
        values,
        EMAIL_JS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
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
      <div className="container">
        <Typography className={"title"} variant={"h3"}>{t('sections.getInTouch')}</Typography>

        <Grid container spacing={{md: 5, xs: 3}} alignItems={"center"}>
          <StyledGrid item md={6} xs={12}>
            <Typography className={"text"}
                        variant={"h6"}>{t(`${tRootKey}.ourLocation`)}:</Typography>
            <FlexGap10 className={"contactRow"}>
              <Icon color={"primary"}>location_on</Icon>
              <Typography variant={"subtitle1"}>
                <Trans i18nKey={"companyAddress"} components={{br: <br/>}}/>
              </Typography>
            </FlexGap10>

            {/*<Typography className={"text"} variant={"h6"}>{t("phoneNumber")}</Typography>*/}
            {/*<FlexGap10 className={"contactRow"}>*/}
            {/*   <Icon color={"primary"}>phone</Icon>*/}
            {/*   <a href={`tel:${phoneNumber}`}>*/}
            {/*      <Typography variant={"subtitle1"}>{phoneNumber} (Whatsapp, Wechat, Telegram)</Typography>*/}
            {/*   </a>*/}
            {/*</FlexGap10>*/}

            <Typography mt={3} className={"text"}
                        variant={"h6"}>{t(`${tRootKey}.writeUs`)}:</Typography>
            <FlexGap10 className={"contactRow"}>
              <Icon color={"primary"}>email</Icon>
              <a href={`mailto:${email}`}>
                <Typography variant={"subtitle1"}>{email}</Typography>
              </a>
            </FlexGap10>
          </StyledGrid>

          <Grid item md={6} xs={12}>
            <Typography className={"formTitle"} variant={"h4"}>{t(`${tRootKey}.forApplication`)}</Typography>

            <StyledForm onSubmit={handleSubmitForm}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    onChange={e => setValues((prevState) => ({
                      ...prevState,
                      [e.target.name]: e.target.value
                    }))}
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
                    onChange={e => setValues((prevState) => ({
                      ...prevState,
                      [e.target.name]: e.target.value
                    }))}
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
                    onChange={e => setValues((prevState) => ({
                      ...prevState,
                      [e.target.name]: e.target.value
                    }))}
                    fullWidth
                    type="text"
                    label={t('placeholders.phoneNumber')}
                    name="phoneNumber"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    onChange={e => setValues((prevState) => ({
                      ...prevState,
                      [e.target.name]: e.target.value
                    }))}
                    fullWidth
                    type="text"
                    label={t('placeholders.yourCompany')}
                    name="yourCompany"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    onChange={e => setValues((prevState) => ({
                      ...prevState,
                      [e.target.name]: e.target.value
                    }))}
                    fullWidth
                    type="text"
                    label={t('placeholders.partNumber')}
                    name="partNumber"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={e => setValues((prevState) => ({
                      ...prevState,
                      [e.target.name]: e.target.value
                    }))}
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
                  <LoadingButton loading={loading} size={"large"} type={"submit"} fullWidth
                                 variant={"contained"}>{t('buttons.send')}</LoadingButton>
                </Grid>
              </Grid>
            </StyledForm>
          </Grid>
        </Grid>
      </div>
    </StyledBox>
  );
};

export default ContactSection1;