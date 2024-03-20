import { colors } from "@mui/material";
import { createTheme } from "@mui/system";

const theme = createTheme({
    palette: {
        primaryPurple: {
          main: colors.primaryPurple
        },
        lightPurple: {
          main: colors.lightPurple
        },
        primary: {
          main: colors.darkBlue,
          contrastText: colors.white
        },
        secondary: {
          main: colors.midBlue,
          contrastText: colors.white
        },
        lightBlue: {
          main: colors.lightBlue
        },
        paleBlue: {
          main: colors.paleBlue
        },
        success: {
          main: colors.primaryGreen
        },
        lightGreen: {
          main: colors.lightGreen
        },
        warning: {
          main: colors.primaryYellow
        },
        error: {
          main: colors.primaryRed
        },
        charcoal: {
          main: colors.charcoal
        },
        deepGrey: {
          main: colors.deepGrey
        },
        darkGrey: {
          main: colors.darkGrey
        },
        neutralGrey: {
          main: colors.neutralGrey
        },
        midGrey: {
          main: colors.midGrey
        },
        lightGrey: {
          main: colors.lightGrey
        },
        offsetGrey:{
          main: colors.offsetGrey
        },
        underlineGrey:{
          main: colors.underlineGrey
        },
        white:{
          main: colors.white
        }
      },
})

export default theme;