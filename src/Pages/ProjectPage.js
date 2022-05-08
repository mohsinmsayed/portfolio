import React from "react";

// importing styles
import "../Styles/ProjectPage.css";

class ProjectPage extends React.Component {
  render() {
    return (
      <div className="ProjectPageContainer">
        <span>My Projects</span>
        <button type="button">see all Projects</button>
      </div>
    );
  }
}

export default ProjectPage;
