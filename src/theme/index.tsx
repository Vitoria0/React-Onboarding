import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#FFF",
    },
    text: {
      primary: "#f7f7f7",
      secondary: "#333333",
    },
    background: {
      paper: "#333333",
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
    h1: {
      fontWeight: "700",
    },
    h2: {
      fontWeight: "700",
      "@media (max-width:800px)": {
        fontSize: "1.8rem",
      },
    },
    h3: {
      fontWeight: "500",
      "@media (max-width:800px)": {
        fontSize: "2rem",
      },
      "@media (min-width:1500px)": {
        fontSize: "3.8rem",
      },
    },
    h4: {
      fontSize: "1.3rem",
      "@media (min-width:600px)": {
        fontSize: "1.3rem",
      },
      "@media (min-width:960px)": {
        fontSize: "1.8rem",
      },
      "@media (min-width:1280px)": {
        fontSize: "1.8rem",
      },
      "@media (min-width:1500px)": {
        fontSize: "2.8rem",
      },
      lineHeight: "120%",
      fontWeight: "500",
    },
    h5: {
      fontWeight: "400",
      "@media (max-width:800px)": {
        fontSize: "1rem",
      },
    },
    h6: {
      "@media (max-width:1634px)": {
        fontSize: "1rem",
      },
      "@media (min-width:1800px)": {
        fontSize: "1.2rem",
      },
      lineHeight: "120%",
      fontWeight: "500",
    },
    body1: {
      "@media (max-width:800px)": {
        fontSize: "0.5rem",
      },
      "@media (min-width:960px)": {
        fontSize: "0.6rem",
      },
      "@media (min-width:1280px)": {
        fontSize: "0.8rem",
      },
      "@media (min-width:1500px)": {
        fontSize: "1rem",
      },
      lineHeight: "120%",
      fontWeight: "500",
    },
  },
});

export { theme };
