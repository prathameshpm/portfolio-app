import React, { Component } from 'react';
import { Animated } from "react-animated-css";

import '../styles/Home.css';

class Home extends Component {

  constructor(props) {
    super(props);
    var date = new Date();
    var hour = date.getHours();
    if (hour < 12) {
      this.state = {welcome: "Good Morning"};
    }
    else if (hour < 17) {
      this.state = {welcome: "Good Afternoon"};
    }
    else {
      this.state = {welcome: "Good Evening"};
    }
  }

  render() {
    return (
      <div>
        <div className="landingPage">
          <div>
            <Animated animationIn='bounceInDown'>
              <div>
                <h5>{this.state.welcome}, Welcome to my Portfolio Site</h5>
              </div>
            </Animated>
            <Animated animationIn='bounceInRight'>
              <div>
                <h5>I am Prathamesh Mahamulkar,</h5>
              </div>
            </Animated>
            <Animated animationIn='bounceInLeft'>
              <div>
                <h5>Full Stack Web Developer</h5>
              </div>
            </Animated>
            <Animated animationIn='bounceInUp'>
              <div>
                <h5>Happily Bridging Ideas to Reality</h5>
              </div>
            </Animated>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
