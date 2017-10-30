import React, { Component } from 'react';

import { Animated } from "react-animated-css";
import '../styles/Skills.css';

import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';

const paperStyles = {
  textAlign: 'center',
  marginTop: 50
};

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndexOne: 0,
      slideIndexTwo: 0,
    };
  }

  handleChangeOne = (value) => {
    this.setState({
      slideIndexOne: value,
    });
  };

  handleChangeTwo = (value) => {
    this.setState({
      slideIndexTwo: value,
    });
  };

  render() {
    return (
      <div className="skillsBackground">
        <Animated animationIn="lightSpeedIn">
          <Tabs
            onChange={this.handleChangeOne}
            value={this.state.slideIndexOne}
          >
            <Tab label="Front End" value={0} />
            <Tab label="Testing" value={1} />
            <Tab label="Dev Tools" value={2} />
          </Tabs>
          <SwipeableViews
            index={this.state.slideIndexOne}
            onChangeIndex={this.handleChangeOne}
          >
            <div className="container">
              <div>
                <Paper zDepth={5} style={paperStyles}>
                  <Avatar src={require('../images/html.jpg')} size={170} style={{margin: 10}} />
                  <Avatar src={require('../images/css.jpg')} size={170} style={{margin: 10}} />
                  <Avatar src={require('../images/bootstrap.jpg')} size={170} style={{margin: 10}} />
                  <Avatar src={require('../images/react.jpg')} size={170} style={{margin: 10}} />
                  <Avatar src={require('../images/redux.png')} size={170} style={{margin: 10}} />
                  <Avatar src={require('../images/material.png')} size={170} style={{margin: 10}} />
                </Paper>
              </div>
            </div>
            <div className="container">
              <div>
                <Paper zDepth={5} style={paperStyles}>
                  <Avatar src={require('../images/mocha.jpg')} size={170} style={{margin: 10}} />
                </Paper>
              </div>
            </div>
            <div className="container">
              <div>
                <Paper zDepth={5} style={paperStyles}>
                  <Avatar src={require('../images/terminal.png')} size={170} style={{margin: 10}} />
                  <Avatar src={require('../images/atom.jpg')} size={170} style={{margin: 10}} />
                  <Avatar src={require('../images/vscode.png')} size={170} style={{margin: 10}} />
                </Paper>
              </div>
            </div>
          </SwipeableViews>
          <Tabs
            onChange={this.handleChangeTwo}
            value={this.state.slideIndexTwo}
            style={{marginTop: '16vh'}}
          >
            <Tab label="Back End" value={0} />
            <Tab label="Services" value={1} />
            <Tab label="Creative" value={2} />
            <Tab label="OS" value={3} />
          </Tabs>
          <SwipeableViews
            index={this.state.slideIndexTwo}
            onChangeIndex={this.handleChangeTwo}
          >
            <div className="container">
              <div>
                <Paper zDepth={5} style={paperStyles}>
                  <Avatar src={require('../images/node.jpeg')} size={170} style={{margin: 10}} />
                  <Avatar src={require('../images/express.jpg')} size={170} style={{margin: 10}} />
                  <Avatar src={require('../images/mongodb.jpg')} size={170} style={{margin: 10}} />
                </Paper>
              </div>
            </div>
            <div className="container">
              <div>
                <Paper zDepth={5} style={paperStyles}>
                  <Avatar src={require('../images/github.jpg')} size={170} style={{margin: 10}} />
                  <Avatar src={require('../images/heroku.jpg')} size={170} style={{margin: 10}} />
                  <Avatar src={require('../images/cpanel.png')} size={170} style={{margin: 10}} />
                </Paper>
              </div>
            </div>
            <div className="container">
              <div>
                <Paper zDepth={5} style={paperStyles}>
                  <Avatar src={require('../images/gimp.jpg')} size={170} style={{margin: 10}} />
                  <Avatar src={require('../images/photoshop.jpg')} size={170} style={{margin: 10}} />
                </Paper>
              </div>
            </div>
            <div className="container">
              <div>
                <Paper zDepth={5} style={paperStyles}>
                  <Avatar src={require('../images/ubuntu.png')} size={170} style={{margin: 10}} />
                  <Avatar src={require('../images/windows.jpg')} size={170} style={{margin: 10}} />
                </Paper>
              </div>
            </div>
          </SwipeableViews>
        </Animated>
      </div>
    );
  }
}

export default Skills;
