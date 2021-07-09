import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline, Box } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { darkTheme } from "./components/Themes/Theme";
import Routes from "./components/Routes";


export default function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <Router>
                <CssBaseline />
                <Routes />
            </Router>
        </ThemeProvider>
    );
}
