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
import sp_02 from '../images/sp_02.jpg';
import sp_03 from '../images/sp_03.jpg';
import sp_04 from '../images/sp_04.png';
import sp_05 from '../images/sp_05.png';
import sp_06 from '../images/sp_06.png';
import sp_07 from '../images/sp_07.png';
import sp_08 from '../images/sp_08.png';
import sp_09 from '../images/sp_09.png';
import sp_10 from '../images/sp_10.png';
import sp_11 from '../images/sp_11.png';
import sp_12 from '../images/sp_12.png';

import todo01 from '../images/todo01.png';
import todo02 from '../images/todo02.png';
import todo03 from '../images/todo03.png';
import todo04 from '../images/todo04.png';
import todo05 from '../images/todo05.png';
import todo06 from '../images/todo06.png';
import todo07 from '../images/todo07.png';
import todo08 from '../images/todo08.png';
import todo09 from '../images/todo09.png';
import todo10 from '../images/todo10.png';
import todo11 from '../images/todo11.png';
import todo12 from '../images/todo12.png';
import todo13 from '../images/todo13.png';
import todo14 from '../images/todo14.png';

import chatapp1 from '../images/chatapp1.jpg';
import chatapp2 from '../images/chatapp2.jpg';

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

const imagesOne = [
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

const imagesTwo = [
  todo02,
  todo03,
  todo04,
  todo05,
  todo06,
  todo07,
  todo08,
  todo09,
  todo10,
  todo11,
  todo12,
  todo13,
  todo14,
];

const imagesThree = [
  chatapp1,
  chatapp2
];

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndexOne: 0,
      photoIndexTwo: 0,
      photoIndexThree: 0,
      isOpenOne: false,
      isOpenTwo: false,
      isOpenThree: false,
    };
  }

  render() {
    const {
      photoIndexOne,
      isOpenOne,
      photoIndexTwo,
      isOpenTwo,
      photoIndexThree,
      isOpenThree,
    } = this.state;

    return (
      <div>
        <Animated animationIn="lightSpeedIn">
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
                    <RaisedButton primary={true} label="Source Code" target="_blank" href="https://github.com/prathameshpm/shopping-cart" style={{margin: 10}} />
                    <RaisedButton secondary={true} label="Visit Website" target='_blank' href="https://hidden-tor-96232.herokuapp.com/" style={{margin: 10}} />
                    <RaisedButton default={true} label="Screen Shots" onClick={() => this.setState({ isOpenOne: true })} style={{margin: 10}} />
                  </CardActions>
                </Card>
              </div>
              <div>
                {isOpenOne &&
                  <Lightbox
                    mainSrc={imagesOne[photoIndexOne]}
                    nextSrc={imagesOne[(photoIndexOne + 1) % imagesOne.length]}
                    prevSrc={imagesOne[(photoIndexOne + imagesOne.length - 1) % imagesOne.length]}

                    onCloseRequest={() => this.setState({ isOpenOne: false })}
                    onMovePrevRequest={() => this.setState({
                      photoIndex: (photoIndexOne + imagesOne.length - 1) % imagesOne.length,
                    })}
                    onMoveNextRequest={() => this.setState({
                      photoIndexOne: (photoIndexOne + 1) % imagesOne.length,
                    })}
                  />
                }
              </div>
              <div className="col m1"></div>
              <div className="col m1"></div>
              <div className="col m4">
                <Card style={styles.card}>
                  <CardHeader
                    title="To Do API"
                    subtitle="A Project in Nodejs"
                    avatar={require("../images/postman.jpg")}
                  />
                  <CardMedia>
                    <img src={todo01} alt="Home" />
                  </CardMedia>
                  <CardTitle title="TechStack Used" subtitle="Nodejs, Express, MongoDB" />
                  <CardText>
                    <p>* Created A To Do API using Node.js & Express</p>
                    <p>* Used Mlabs for MongoDB</p>
                    <p>* Mocha, Supertest, Expect for testing</p>
                    <p>* POSTMAN for real user experience</p>
                    <p>* Github for Version Control</p>
                    <p>* Deployed to heroku</p>
                    <p>* API Link: 'https://thawing-depths-20269.herokuapp.com/'</p>
                  </CardText>
                  <CardActions>
                    <RaisedButton primary={true} label="Source Code" target="_blank" href="https://github.com/prathameshpm/node-to-do-ppm" style={{margin: 10}} />
                    <RaisedButton secondary={true} label="Screen Shots" onClick={() => this.setState({ isOpenTwo: true })} style={{margin: 10}} />
                  </CardActions>
                </Card>
              </div>
              <div>
                {isOpenTwo &&
                  <Lightbox
                    mainSrc={imagesTwo[photoIndexTwo]}
                    nextSrc={imagesTwo[(photoIndexTwo + 1) % imagesTwo.length]}
                    prevSrc={imagesTwo[(photoIndexTwo + imagesTwo.length - 1) % imagesTwo.length]}

                    onCloseRequest={() => this.setState({ isOpenTwo: false })}
                    onMovePrevRequest={() => this.setState({
                      photoIndexTwo: (photoIndexTwo + imagesTwo.length - 1) % imagesTwo.length,
                    })}
                    onMoveNextRequest={() => this.setState({
                      photoIndexTwo: (photoIndexTwo + 1) % imagesTwo.length,
                    })}
                  />
                }
              </div>
              <div className="col m1"></div>
            </div>
            <div className="row">
              <div className="container">
                <div className="row">
                  <div className="col m5">
                    <Card style={styles.card}>
                      <CardHeader
                        title="Realtime Chat App"
                        subtitle="A Project using websockets"
                        avatar={require("../images/websockets.png")}
                      />
                      <CardMedia>
                        <img src={chatapp1} alt="Home" />
                      </CardMedia>
                      <CardTitle title="TechStack Used" subtitle="Nodejs, Express, MongoDB" />
                      <CardText>
                        <p>Created using Websockets & geolocation</p>
                      </CardText>
                      <CardActions>
                        <RaisedButton primary={true} label="Source Code" target="_blank" href="https://github.com/prathameshpm/node-to-do-ppm" style={{margin: 10}} />
                        <RaisedButton secondary={true} label="Visit Website" target='_blank' href="https://fast-reef-48042.herokuapp.com/" style={{margin: 10}} />
                        <RaisedButton default={true} label="Screen Shots" onClick={() => this.setState({ isOpenThree: true })} style={{margin: 10}} />
                      </CardActions>
                    </Card>
                  </div>
                  <div>
                    {isOpenThree &&
                      <Lightbox
                        mainSrc={imagesThree[photoIndexThree]}
                        nextSrc={imagesThree[(photoIndexThree + 1) % imagesThree.length]}
                        prevSrc={imagesThree[(photoIndexThree + imagesThree.length - 1) % imagesThree.length]}

                        onCloseRequest={() => this.setState({ isOpenThree: false })}
                        onMovePrevRequest={() => this.setState({
                          photoIndexThree: (photoIndexThree + imagesThree.length - 1) % imagesThree.length,
                        })}
                        onMoveNextRequest={() => this.setState({
                          photoIndexThree: (photoIndexThree + 1) % imagesThree.length,
                        })}
                      />
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Animated>
      </div>
    );
  }
}

export default Portfolio;
