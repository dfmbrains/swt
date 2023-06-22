export const themeOptions = (theme) => {
   return {
      palette: {
         primary: {
            main: '#3973B9',
            contrastText: '#FFFFFF'
         },
         secondary: {
            main: 'rgba(53, 65, 77, 1)',
            contrastText: '#F18200'
         },
         info: {
            main:"#FFF"
         }
      },
      typography: {
         h1: {
            fontSize: 55,
            color: "#FFFFFF",
            fontWeight: "700",
            lineHeight: 1.2,

            [theme.breakpoints.down("lg")]: {fontSize: 48},
            [theme.breakpoints.down("md")]: {fontSize: 42},
            [theme.breakpoints.down("sm")]: {fontSize: 36},
            [theme.breakpoints.down("xs")]: {fontSize: 28}
         },
         h2: {
            fontSize: 36,
            color: "#1B1B1B",
            fontWeight: "700",
            lineHeight: 1.2,

            [theme.breakpoints.down("lg")]: {fontSize: 32},
            [theme.breakpoints.down("md")]: {fontSize: 28},
            [theme.breakpoints.down("sm")]: {fontSize: 24},
            [theme.breakpoints.down("xs")]: {fontSize: 20}
         },
         h3: {
            fontSize: 24,
            fontWeight: "700",
            lineHeight: 1.2,

            [theme.breakpoints.down("lg")]: {fontSize: 21},
            [theme.breakpoints.down("md")]: {fontSize: 20},
            [theme.breakpoints.down("sm")]: {fontSize: 19},
            [theme.breakpoints.down("xs")]: {fontSize: 18}
         },
         h4: {
            fontSize: 20,
            fontWeight: "500",
            lineHeight: 1.2,

            [theme.breakpoints.down("lg")]: {fontSize: 19},
            [theme.breakpoints.down("md")]: {fontSize: 18},
            [theme.breakpoints.down("sm")]: {fontSize: 17},
            [theme.breakpoints.down("xs")]: {fontSize: 16}
         },
         h5: {
            fontSize: 18,
            fontWeight: "500",
            lineHeight: 1.2,

            [theme.breakpoints.down("lg")]: {fontSize: 17},
            [theme.breakpoints.down("md")]: {fontSize: 16},
            [theme.breakpoints.down("sm")]: {fontSize: 15},
            [theme.breakpoints.down("xs")]: {fontSize: 14}
         },
         h6: {
            fontSize: 17,
            fontWeight: "500",
            lineHeight: 1.2,

            [theme.breakpoints.down("lg")]: {fontSize: 16},
            [theme.breakpoints.down("sm")]: {fontSize: 14.5},
         },
         subtitle1: {
            fontSize: 16,
            fontWeight: "500",
            lineHeight: 1.2,

            [theme.breakpoints.down("md")]: {fontSize: 15},
            [theme.breakpoints.down("sm")]: {fontSize: 14, fontWeight: "400"}
         },
         subtitle2: {
            fontSize: 15,
            lineHeight: 1.2,

            [theme.breakpoints.down("md")]: {fontSize: 14},
            [theme.breakpoints.down("sm")]: {fontSize: 13}
         },
         body1: {
            fontSize: 14,
            fontWeight: "500",
            lineHeight: 1.2,

            [theme.breakpoints.down("md")]: {fontSize: 13},
            [theme.breakpoints.down("sm")]: {fontSize: 12, fontWeight: "400"}
         },
         body2: {
            fontSize: 12,
            lineHeight: 1.2,

            [theme.breakpoints.down("md")]: {fontSize: 12},
            [theme.breakpoints.down("sm")]: {fontSize: 11}
         }
      }
   }
}