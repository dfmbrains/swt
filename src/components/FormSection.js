import React from 'react';
import {StyledSection} from "./StyledComponents";
import {Button, styled, TextField, Typography} from "@mui/material";

const StyledBox = styled(StyledSection)(() => ({
   padding: "70px 0",
   background: "#F7F7F7",

   "& .title": {
      textAlign: "center",
      margin: "0 0 10px",
   },
   "& .subtitle": {
      textAlign: "center",
      margin: "0 0 40px",
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
   return (
       <StyledBox>
          <Typography className="title" variant={"h3"}>Leave your email</Typography>
          <Typography className="subtitle" variant={"h5"}>We will definitely contact you</Typography>

          <StyledForm>
             <TextField fullWidth
                        type="email"
                        name="email"
                        label="Email"
                        size={"small"}
                        required
             />
             <Button type={"submit"} fullWidth variant={"contained"}>Send</Button>
          </StyledForm>
       </StyledBox>
   );
};

export default FormSection;