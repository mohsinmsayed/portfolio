import React from "react";

// importing styles
import "../Styles/EducationPage.css";

class EducationPage extends React.Component {
  render() {
    return (
      <div className="EducationPageContainer">
        <span>Education</span>
        <div className="EducationMainContainer">
          <div className="EducationContentContainer">
            <span>School</span>
            <span>Secondary School Certificate</span>
          </div>
          <div className="EducationContentContainer">
            <span>Junior College</span>
            <span>Higher Secondary Certificate</span>
          </div>
          <div className="EducationContentContainer">
            <span>Degree College</span>
            <span>Degree - Mumbai University</span>
          </div>
        </div>
      </div>
    );
  }
}

export default EducationPage;
