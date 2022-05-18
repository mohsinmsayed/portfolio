import React from "react";

// importing styles
import "../Styles/ProjectScreen.css";

class ProjectScreen extends React.Component {
  render() {
    return (
      <div className="ProjectScreenContainer">
        <h1>MY PROJECTS</h1>
        <div className="ProjectsContainer"></div>
      </div>
    );
  }
}

export default ProjectScreen;
