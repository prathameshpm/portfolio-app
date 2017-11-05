import React, { Component } from 'react';

import { Animated } from "react-animated-css";
import RaisedButton from 'material-ui/RaisedButton';
import Lightbox from 'react-image-lightbox';

import '../styles/Resume.css';

import jobresume from '../images/jobresume.jpg';

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenOne: false,
    };
  }

  render() {
    const {
      isOpenOne,
    } = this.state;

    return (
      <div className="resumePageStyle">
        <div className="container">
          <div className="row">
            <div className="col m3">
              <Animated animationIn="fadeInRight">
                <RaisedButton default={true} primary={true} label="See Resume Now" onClick={() => this.setState({ isOpenOne: true })} />
                <div>
                  {isOpenOne &&
                    <Lightbox
                      mainSrc={jobresume}
                      onCloseRequest={() => this.setState({ isOpenOne: false })}
                    />
                  }
                </div>
              </Animated>
            </div>
            <div className="col m3">
              <Animated animationIn="fadeInDown">
                <a href={require("../documents/MyResume.pdf")} download="MyResume">
                  <i className="large material-icons downloadIcon">file_download</i>
                </a>
              </Animated>
            </div>
            <div className="col m3">
              <Animated animationIn="fadeInLeft">
                <RaisedButton default={true} secondary={true} label="LinkedIn Porfile" target="_blank" href="https://www.linkedin.com/in/prathamesh-mahamulkar-66b24a63/" />
              </Animated>
            </div>
            <div className="col m3">
              <Animated animationIn="fadeInUp">
                <RaisedButton label="Github Profile" target="_blank" href="https://github.com/prathameshpm" backgroundColor="yellow" />
              </Animated>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
