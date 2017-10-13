import React, { Component } from 'react';

import { Animated } from "react-animated-css";
import '../styles/Resume.css';

class Resume extends Component {
  render() {
    return (
      <div className="resumePageStyle">
        <Animated animationIn="zoomIn">
          <a href={require("../documents/MyResume.pdf")} download="MyResume">
            <i className="small material-icons">file_download</i>
          </a>
        </Animated>
      </div>
    );
  }
}

export default Resume;
