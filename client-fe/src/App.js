import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SignUp from "./components/SIgnUp";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Navigation from "./Navigation";

const defaultTheme = createTheme();

function App() {
  return (
    <Router>
      <ThemeProvider theme={defaultTheme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div>
            <Navigation />
            <Routes>
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<SignUp />} />
            </Routes>
          </div>
        </LocalizationProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
