import {styled} from "@mui/material";
import {FlexBox} from "./FlexBoxes";

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

const PaginationBox = styled(FlexBox)(({theme}) => ({
   margin: "40px 0 0",
   justifyContent: "flex-end",

   [theme.breakpoints.down("sm")]: {
      margin: "30px 0 0",
   }
}));

export {StyledSection, PaginationBox};