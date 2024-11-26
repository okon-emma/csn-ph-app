import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  Link,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#ffa726",
    },
  },
  typography: {
    fontFamily: "Montserrat, Arial, sans-serif",
    h1: {
      fontSize: "3.5rem",
      fontWeight: 700,
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 400,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: "#f4f6f8",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          px: 2,
        }}
      >
        {/* Main Content */}
        <Container maxWidth="sm">
          <Paper
            elevation={4}
            sx={{
              p: 6,
              backgroundColor: "#ffffff",
              borderRadius: "10px",
            }}
          >
            <Typography variant="h1" color="primary" gutterBottom>
              PhishIntel
            </Typography>
            <Typography sx={{ pt: 3, pb: 8 }} variant="h6" color="text.secondary" gutterBottom>
              An open-source, AI-powered phishing simulation tool for realistic
              cybersecurity awareness training.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{ borderRadius: "20px", px: 4 }}
            >
              🚀 Coming Soon 🚀
            </Button>
          </Paper>
        </Container>

        {/* Footer */}
        <Box
          component="footer"
          sx={{
            mt: 8,
            p: 2,
            backgroundColor: "#1976d2",
            color: "#ffffff",
            width: "100%",
            textAlign: "center",
            position: "absolute",
            bottom: 0,
          }}
        >
          <Typography variant="body2">
            Powered by{" "}
            <Link
              href="https://cloudsecnetwork.com/"
              target="_blank"
              rel="noopener"
              color="inherit"
              underline="always"
            >
              CloudSec Network (CSN)
            </Link>
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
