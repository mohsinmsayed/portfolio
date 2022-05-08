import React from "react";

// importing styles
import "../Styles/IntroPage.css";

class IntroPage extends React.Component {
  render() {
    return (
      <div className="IntroPageContainer">
        <div className="ImageContainer">
          <img
            src={require("../assets/mohsinsayedLogo.png")}
            alt="Mohsin Sayed (portrait)"
          />
        </div>
        <div className="TextContainer">
          <span>Hi,</span>
          <span>
            I am <span>MOHSIN SAYED</span>
          </span>
          <span>I am a Programmer/Coder</span>
          <span>I develop Web and Cross-platform Applications</span>
          <button type="button">see About ME</button>
        </div>
      </div>
    );
  }
}

export default IntroPage;
