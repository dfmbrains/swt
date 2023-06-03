import React from 'react';
import {StyledSection} from "../../../components/StyledComponents";
import {Grid, Typography} from "@mui/material";
import CompanyOrientationCard from "../../../components/CompanyOrientationCard";
import {companyOrientations} from "../../../data/companyOrientations";

const HomeCompanyOrientations = () => {
   return (
       <StyledSection>
          <div className="container">
             <Typography className="title" variant={"h3"}>Company Orientations</Typography>

             <Grid container spacing={2}>
                {companyOrientations.map((item, idx) => (
                    <Grid key={idx} item lg={3} md={4} sm={6} xs={12}>
                       <CompanyOrientationCard orientation={item}/>
                    </Grid>
                ))}
             </Grid>
          </div>
       </StyledSection>
   );
};

export default HomeCompanyOrientations;