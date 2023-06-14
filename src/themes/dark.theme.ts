import { createTheme } from '@mui/material';
import { blue, purple, green, yellow, red } from '@mui/material/colors';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: blue[700],
    },
    secondary: {
      main: purple[600],
    },
    info: {
      main: blue[400],
    },
    warning: {
      main: yellow[700],
    },
    success: {
      main: green[600],
    },
    error: {
      main: red[600],
    },
  },
});

export default darkTheme;
