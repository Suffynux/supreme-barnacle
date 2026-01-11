'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-noto-sans)',
    button: {
        textTransform: 'none', // Optional: prevents buttons from being uppercase by default
    }
  },
});

export default theme;
