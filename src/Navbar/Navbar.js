import React from "react";
import { Link } from "react-router-dom";

// importing styles
import "./Navbar.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
    };
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      if (window.scrollY >= 70) {
        if (!this.state.scrolled) {
          this.setState({ scrolled: true });
        }
      } else {
        if (this.state.scrolled) {
          this.setState({ scrolled: false });
        }
      }
    });
  }

  render() {
    return (
      <div
        className={
          this.state.scrolled
            ? "NavbarContainer scrolledNav"
            : "NavbarContainer"
        }
      >
        <Link className="BrandLink" to="/">
          <img
            src={require("../assets/mohsinsayedLogo.png")}
            alt="Mohsin Sayed"
          />
        </Link>
        <div className="NavlinkContainer">
          <Link className="NavLink" to="/about">
            About Me
          </Link>
          <Link className="NavLink" to="/projects">
            My Projects
          </Link>
          <Link className="NavLink" to="/">
            Contact Me
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
