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
import Lightbox from 'react-image-lightbox';

import '../styles/Portfolio.css';

import sp_01 from '../images/sp_01.jpg';
import sp_02 from '../images/sp_02.png';
import sp_03 from '../images/sp_03.png';
import sp_04 from '../images/sp_04.png';
import sp_05 from '../images/sp_05.png';
import sp_06 from '../images/sp_06.png';
import sp_07 from '../images/sp_07.png';
import sp_08 from '../images/sp_08.png';
import sp_09 from '../images/sp_09.png';
import sp_10 from '../images/sp_10.png';
import sp_11 from '../images/sp_11.png';
import sp_12 from '../images/sp_12.png';

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
  card: {
    margin: 20,
    padding: 10
  }
};

const images = [
  sp_01,
  sp_02,
  sp_03,
  sp_04,
  sp_05,
  sp_06,
  sp_07,
  sp_08,
  sp_09,
  sp_10,
  sp_11,
  sp_12,
];


class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      photoIndex: 0,
      isOpen: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    const {
        photoIndex,
        isOpen,
    } = this.state;

    return (
      <div>
        <Animated animationIn="lightSpeedIn">
          {/* <div>
            <Tabs
              onChange={this.handleChange}
              value={this.state.slideIndex}
            >
              <Tab label="Shopping Cart" value={0} />
              <Tab label="To Do API" value={1} />
              <Tab label="Tab Three" value={2} />
            </Tabs>
            <SwipeableViews
              index={this.state.slideIndex}
              onChangeIndex={this.handleChange}
          > */}
          <div className="shoppingCart">

            <div className="row">
              <div className="col m1"></div>
              <div className="col m4">
                <Card style={styles.card}>
                  <CardHeader
                    title="Shopping Cart"
                    subtitle="A mini E-Shop"
                    avatar={require("../images/node.jpeg")}
                  />
                  <CardMedia>
                    <img src={sp_01} alt="Home" />
                  </CardMedia>
                  <CardTitle title="TechStack Used" subtitle="Nodejs, MongoDB, Stripe" />
                  <CardText>
                    <p>* Created A Mini E-Shoppee using Node.js & ExpressGenerator</p>
                    <p>* Used MongoDB & Mongoose for Users Data, Orders Data and Products Data Storage</p>
                    <p>* PassportJS for Validity Check</p>
                    <p>* StripeAPI for Payments</p>
                    <p>* Github for Version Control</p>
                    <p>Project Inspired from SchwarzMueller</p>
                    <p>Use card number: "4242424242424242" for testing (Or any other valid demo number as prescribed in Stripe Documentation)</p>
                  </CardText>
                  <CardActions>
                    <RaisedButton primary={true} label="Source Code" target="_blank" href="https://github.com/prathameshpm/shopping-cart" />
                    <RaisedButton secondary={true} label="Visit Website" target='_blank' href="https://hidden-tor-96232.herokuapp.com/" />
                    <RaisedButton default={true} label="Screen Shots" onClick={() => this.setState({ isOpen: true })} />
                  </CardActions>
                </Card>
              </div>
            </div>

            <div>
              {isOpen &&
                <Lightbox
                  mainSrc={images[photoIndex]}
                  nextSrc={images[(photoIndex + 1) % images.length]}
                  prevSrc={images[(photoIndex + images.length - 1) % images.length]}

                  onCloseRequest={() => this.setState({ isOpen: false })}
                  onMovePrevRequest={() => this.setState({
                    photoIndex: (photoIndex + images.length - 1) % images.length,
                  })}
                  onMoveNextRequest={() => this.setState({
                    photoIndex: (photoIndex + 1) % images.length,
                  })}
                />
              }
            </div>

          </div>
          {/*
            <div style={styles.slide}>
            <div className="row">
              <div className="col m3"></div>
              <div className="col m6">
            <Card style={styles.card}>
            <CardHeader
            title="To-Do API"
            subtitle="API Built using MEN Stack"
            avatar={require("../images/postman.png")}
            />
            <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
            >
            <img src={require("../images/img_one.jpeg")} alt="somehting" />
            </CardMedia>
            <CardTitle title="TechStack Used" subtitle="Express Node MongoDB POSTMAN" />
            <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
            <CardActions>
            <RaisedButton primary={true} label="Source Code" />
            <RaisedButton secondary={true} label="Visit Website" />
            </CardActions>
            </Card>
              </div>
              <div className="col m3"></div>
            </div>
            <div>
              <button
            type="button"
            onClick={() => this.setState({ isOpen: true })}
              >
            Open Lightbox
              </button>

              {isOpen &&
            <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}

            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() => this.setState({
            photoIndex: (photoIndex + images.length - 1) % images.length,
            })}
            onMoveNextRequest={() => this.setState({
            photoIndex: (photoIndex + 1) % images.length,
            })}
            />
              }
            </div>
            </div>
            <div style={styles.slide}>
            slide n°3
            </div>
            </SwipeableViews>
            </div>
          */}

        </Animated>
      </div>
    );
  }
}

export default Portfolio;
