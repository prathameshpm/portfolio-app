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
import {GridList, GridTile} from 'material-ui/GridList';

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
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
};

const tilesData = [
  {
    img: sp_01,
    title: 'Home Page',
  },
  {
    img: sp_02,
    title: 'Added to Cart',
  },
  {
    img: sp_03,
    title: 'Invalid Credentials',
  },
  {
    img: sp_04,
    title: 'User Profile',
  },
  {
    img: sp_05,
    title: 'Cart',
  },
  {
    img: sp_06,
    title: 'Payments Page',
  },
  {
    img: sp_07,
    title: 'Cart',
  },
  {
    img: sp_08,
    title: 'User Profile',
  },
  {
    img: sp_09,
    title: 'User Orders in DB',
  },
  {
    img: sp_10,
    title: 'User Orders in DB',
  },
  {
    img: sp_11,
    title: 'Stripe My Account',
  },
  {
    img: sp_12,
    title: 'Payment IDs',
  },
];

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
      <div>
        <Animated animationIn="lightSpeedIn">
          <div className="tabOneStyle">
            <Tabs
              onChange={this.handleChange}
              value={this.state.slideIndex}
            >
              <Tab label="Shopping Cart" value={0} />
              <Tab label="Tab Two" value={1} />
              <Tab label="Tab Three" value={2} />
            </Tabs>
            <SwipeableViews
              index={this.state.slideIndex}
              onChangeIndex={this.handleChange}
            >
              <div>
                <div className="row">
                  <div className="col m3"></div>
                  <div className="col m6">
                    <Card>
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
                      </CardText>
                      <CardActions>
                        <RaisedButton primary={true} label="Source Code" target="_blank" href="https://github.com/prathameshpm/shopping-cart" />
                        <RaisedButton secondary={true} label="Visit Website" target='_blank' href="https://hidden-tor-96232.herokuapp.com/" />
                      </CardActions>
                    </Card>
                  </div>
                  <div className="col m3"></div>
                </div>

                <div className="container">

                  <div style={styles.root}>
                    <GridList style={styles.gridList} cols={2.2}>
                      {tilesData.map((tile) => (
                        <GridTile
                          key={tile.img}
                          title={tile.title}
                          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                        >
                          <img src={tile.img} alt={tile.title} />
                        </GridTile>
                      ))}
                    </GridList>
                  </div>

                </div>

              </div>

              <div style={styles.slide}>
                <div className="row">
                  <div className="col m3"></div>
                  <div className="col m6">
                    <Card>
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

                <div className="container">

                  <div style={styles.root}>
                    <GridList style={styles.gridList} cols={2.2}>
                      {tilesData.map((tile) => (
                        <GridTile
                          key={tile.img}
                          title={tile.title}
                          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                        >
                          <img src={tile.img} alt={tile.title} />
                        </GridTile>
                      ))}
                    </GridList>
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
    );
  }
}

export default Portfolio;
