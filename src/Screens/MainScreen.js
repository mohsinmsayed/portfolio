import React from "react";

// importing pages
import IntroPage from "../Pages/IntroPage";

// importing styles
import "../Styles/MainScreen.css";

class MainScreen extends React.Component {
  render() {
    return (
      <div className="MainScreenContainer">
        <IntroPage />
      </div>
    );
  }
}

export default MainScreen;
