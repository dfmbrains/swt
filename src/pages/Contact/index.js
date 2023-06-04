import React from 'react';
import {StyledSection} from "../../components/StyledComponents";
import {Button, Grid, styled, TextField, Typography} from "@mui/material";
import {FlexGap10} from "../../components/FlexBoxes";
import BenefitsSection from "../../components/BenefitsSection";

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
      margin: "24px 0",
      columnGap: "24px"
   }
}));

const StyledForm = styled('form')(() => ({
   width: "100%"
}));

const Contact = () => {
   return (
       <>
          <StyledBox>
             <div className="container">
                <Typography className={"title"} variant={"h3"}>Get in touch with us</Typography>

                <Grid container spacing={5} alignItems={"center"}>
                   <StyledGrid item xs={6}>
                      <Typography className={"subtitle"} variant={"subtitle1"}>Lorem ipsum dolor sit amet, consectetur
                         adipisicing
                         elit. Asperiores deserunt dolore dolores itaque nulla officia repellat repudiandae similique
                         totam vel!</Typography>
                      <Typography className={"text"} variant={"body1"}>Support Center 24 / 7</Typography>

                      <FlexGap10 className={"phones"}>
                         <a className={"contactItem"} href="tel:86-755-2216-0508">
                            <Typography variant={"h4"}>86-755-2216-0508</Typography>
                         </a>
                         <a className={"contactItem"} href="tel:86-755-2216-0508">
                            <Typography variant={"h4"}>86-755-2216-0508</Typography>
                         </a>
                      </FlexGap10>

                      <Grid container>
                         <Grid item xs={6}>
                            <Typography className={"text"} variant={"subtitle1"}>Our Location</Typography>
                            <Typography className={"contactItem"} variant={"h5"}>Shanghai, 112,as</Typography>
                         </Grid>
                         <Grid item xs={6}>
                            <Typography className={"text"} variant={"subtitle1"}>Write to us</Typography>
                            <a className={"contactItem"} href="mailto:admin@LoremIpsum.com">
                               <Typography variant={"h5"}>admin@LoremIpsum.com</Typography>
                            </a>
                         </Grid>
                      </Grid>
                   </StyledGrid>
                   <Grid item xs={6}>
                      <StyledForm>
                         <Grid container spacing={5}>
                            <Grid item xs={6}>
                               <TextField
                                   fullWidth
                                   type="text"
                                   name="name"
                                   label="Name"
                                   variant="standard"
                                   required
                               />
                            </Grid>
                            <Grid item xs={6}>
                               <TextField
                                   fullWidth
                                   type="email"
                                   name="email"
                                   label="Email"
                                   variant="standard"
                                   required
                               />
                            </Grid>
                            <Grid item xs={6}>
                               <TextField
                                   fullWidth
                                   type="text"
                                   name="company"
                                   label="Your company"
                                   variant="standard"
                               />
                            </Grid>
                            <Grid item xs={6}>
                               <TextField
                                   fullWidth
                                   type="text"
                                   name="phoneNumber"
                                   label="Phone Number"
                                   variant="standard"
                               />
                            </Grid>
                            <Grid item xs={12}>
                               <TextField
                                   fullWidth
                                   type="text"
                                   name="message"
                                   label="Message"
                                   variant="standard"
                                   required
                                   multiline
                                   minRows={5}
                               />
                            </Grid>

                            <Grid item xs={12}>
                               <Button size={"large"} type={"submit"} fullWidth variant={"contained"}>Send</Button>
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