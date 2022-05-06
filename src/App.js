import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importing navbar
import Navbar from "./Navbar/Navbar";

// importing footer (contact me section)
import Footer from "./Footer/Footer";

// importing screens
import MainScreen from "./Screens/MainScreen";
import AboutScreen from "./Screens/AboutScreen";
import ProjectScreen from "./Screens/ProjectScreen";

// importing styles
import "./Styles/App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/projects" element={<ProjectScreen />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
