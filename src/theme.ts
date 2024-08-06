import { createTheme } from '@mui/material/styles';

export const PRIMARY_COLOR = "#128C7E"
export const SECONDARY_COLOR = "#25D366"
export const THIRD_COLOR = "#075E54"


export const theme = createTheme({
  palette: {
    primary: {
        main: PRIMARY_COLOR
    },
    secondary: {
        main: SECONDARY_COLOR
    },
  },
});

