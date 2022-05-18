import React from "react";

// importing pages
import AboutPage from "../Pages/AboutPage";
import EducationPage from "../Pages/EducationPage";
import ExperiencePage from "../Pages/ExperiencePage";
import SkillsetPage from "../Pages/SkillsetPage";

class AboutScreen extends React.Component {
  render() {
    return (
      <div className="AboutScreenContainer">
        <AboutPage />
        <EducationPage />
        <ExperiencePage />
        <SkillsetPage />
      </div>
    );
  }
}

export default AboutScreen;
