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
import SwipeableViews from 'react-swipeable-views';
import {Tabs, Tab} from 'material-ui/Tabs';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };


  render() {
    return (
      <div className="container">
        <div>
          <Animated animationIn="lightSpeedIn">
            <div>
              <Tabs
                onChange={this.handleChange}
                value={this.state.slideIndex}
              >
                <Tab label="Tab One" value={0} />
                <Tab label="Tab Two" value={1} />
                <Tab label="Tab Three" value={2} />
              </Tabs>
              <SwipeableViews
                index={this.state.slideIndex}
                onChangeIndex={this.handleChange}
              >
                <div>
                  <div className="row">
                    <div className="col m2"></div>
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
                    <div className="col m2"></div>
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
                    <div className="col m2"></div>
                  </div>
                </div>
                <div style={styles.slide}>
                  <div className="row">
                    <div className="col m2"></div>
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
                    <div className="col m2"></div>
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
                <div style={styles.slide}>
                  slide n°3
                </div>
              </SwipeableViews>
            </div>
          </Animated>
        </div>



      </div>
    );
  }
}

export default Portfolio;
