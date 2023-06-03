import {styled} from "@mui/material";

const StyledSection = styled('section')(({theme}) => ({
   padding: "30px 0",

   "& .title": {
      textTransform: "uppercase",
      marginBottom: "24px",
      fontWeight: "900"
   },

   [theme.breakpoints.down("lg")]: {
      "& .title": {
         marginBottom: "20px"
      }
   },
   [theme.breakpoints.down("sm")]: {
      "& .title": {
         marginBottom: "16px"
      }
   }
}));

export {StyledSection};