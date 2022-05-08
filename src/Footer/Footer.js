import React from "react";

// importing styles
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="FooterContainer">
        <div className="LinksContainer">
          <div>
            <a href="www.instagram.com">instagram</a>
            <a href="www.twitter.com">twitter</a>
            <a href="www.linkedin.com">linkedin</a>
          </div>
          <div>
            <a href="www.snapchat.com">snapchat</a>
            <a href="www.github.com">github</a>
            <a href="mailto:mohsinsayed1999@gmail.com">email</a>
          </div>
        </div>
        <div className="FormContainer">
          <h3>connect with me and drop a message</h3>
          <input type="text" placeholder="enter your name" />
          <input type="email" placeholder="enter your email" />
          <textarea placeholder="enter your message" />
          <button type="button">Send!</button>
        </div>
      </div>
    );
  }
}

export default Footer;
