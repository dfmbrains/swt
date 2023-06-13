import React from 'react';
import {CircularProgress, styled} from "@mui/material";
import {FlexAllCenter} from "./FlexBoxes";

const StyledLoading = styled(FlexAllCenter)(() => ({
   width: "100vw",
   height: "100vh",
   position: "fixed",
   top: "0",
   left: "0",
   zIndex: 100,
   background: "#FFFFFF"
}));

const Loader = () => {
   return (
       <StyledLoading>
          <CircularProgress/>
       </StyledLoading>
   );
};

export default Loader;