import React from "react";

// importing pages
import IntroPage from "../Pages/IntroPage";
import ProjectPage from "../Pages/ProjectPage";

// importing styles
import "../Styles/MainScreen.css";

class MainScreen extends React.Component {
  render() {
    return (
      <div className="MainScreenContainer">
        <IntroPage />
        <ProjectPage />
      </div>
    );
  }
}

export default MainScreen;
