import React, { Component } from 'react';
import { Animated } from "react-animated-css";

import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

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
              {/* <h5>Passionate Resourceful Skilled & Proficient</h5> */}
              <h5>The Bridge Between Database & User Experience</h5>
            </div>
          </Animated>

          {/* <div class="row">
            <div class="col m4">
            <div class="card medium">
            <div class="card-image waves-effect waves-block waves-light">
            <img class="activator image-responsive" src={require('../images/photo.jpg')} />
            </div>
            <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
            <p><a href="#">This is a link</a></p>
            </div>
            <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
            <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
            </div>
            </div>
          </div> */}
        </div>
        <div className="row">
          <div className="col m3">
            <Card>
              <CardHeader
                title="URL Avatar"
                subtitle="Subtitle"
                avatar={require("../images/photo.jpg")}
                actAsExpander={true}
                showExpandableButton={true}
              />
              <CardMedia
                overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
              >
                <img src={require("../images/img_one.jpeg")} alt="somehting" />
              </CardMedia>
              <CardTitle title="Card title" subtitle="Card subtitle" />
              <CardText expandable={true}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
              <CardActions>
                <RaisedButton primary={true} label="Action1" />
                <RaisedButton secondary={true} label="Action2" />
              </CardActions>
            </Card>
          </div>
          <div className="col m3">
            <Card>
              <CardHeader
                title="URL Avatar"
                subtitle="Subtitle"
                avatar={require("../images/photo.jpg")}
              />
              <CardMedia
                overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
              >
                <img src={require("../images/img_one.jpeg")} alt="somehting" />
              </CardMedia>
              <CardTitle title="Card title" subtitle="Card subtitle" />
              <CardText style={{fontWeight: 'bold'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
              <CardActions>
                <RaisedButton primary={true} label="Action1" />
                <RaisedButton secondary={true} label="Action2" />
              </CardActions>
            </Card>
          </div>
          <div className="col m3">
            <Card>
              <CardHeader
                title="URL Avatar"
                subtitle="Subtitle"
                avatar={require("../logo.svg")}
              />
              <CardMedia
                overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
              >
                <img src={require("../images/img_one.jpeg")} alt="somehting" />
              </CardMedia>
              <CardTitle title="Card title" subtitle="Card subtitle" />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
              <CardActions>
                <RaisedButton primary={true} label="Action1" />
                <RaisedButton secondary={true} label="Action2" />
              </CardActions>
            </Card>
          </div>
          <div className="col m3">
            <Card>
              <CardHeader
                title="URL Avatar"
                subtitle="Subtitle"
                avatar={require("../images/photo.jpg")}
              />
              <CardMedia
                overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
              >
                <img src={require("../images/img_one.jpeg")} alt="somehting" />
              </CardMedia>
              <CardTitle title="Card title" subtitle="Card subtitle" />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
              <CardActions>
                <RaisedButton primary={true} label="Action1" />
                <RaisedButton secondary={true} label="Action2" />
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
