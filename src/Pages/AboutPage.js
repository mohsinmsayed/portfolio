import React from "react";

// importing styles
import "../Styles/AboutPage.css";

class AboutPage extends React.Component {
  render() {
    return (
      <div className="AboutPageContainer">
        <div className="InfoContainer">
          <span>
            I am <span>MOHSIN SAYED</span>
          </span>
          <span>I am a programmer/coder</span>
          <span>I develop Web and Cross-Platform Applications</span>
          <span>more info and details about me...</span>
        </div>
        <div className="ImageContainer">
          <img
            src={require("../assets/mohsinsayedLogo.png")}
            alt="Mohsin Sayed (portrait)"
          />
        </div>
      </div>
    );
  }
}

export default AboutPage;
