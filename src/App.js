import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';

import { Animated } from "react-animated-css";
import './styles/App.css';

import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

import ContentLink from 'material-ui/svg-icons/content/link';
import Image from 'material-ui/svg-icons/image/image';
import Photo from 'material-ui/svg-icons/image/photo';
import ContactPhone from 'material-ui/svg-icons/communication/contact-phone';
import HomeIcon from 'material-ui/svg-icons/action/home';
import Star from 'material-ui/svg-icons/toggle/star';
import School from 'material-ui/svg-icons/social/school';

import {
  blue500,
  orange800,
  yellowA700,
  red500,
  lightGreen800,
  deepPurple400,
  purpleA700
} from 'material-ui/styles/colors';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <MuiThemeProvider>
              <div>
                <Animated animationIn="fadeInUp">
                  <div>
                    <AppBar
                      title="MENU"
                      iconClassNameRight="muidocs-icon-navigation-expand-more"
                      onLeftIconButtonTouchTap={() => this.setState({open: !this.state.open})}
                      style={{backgroundColor: '#616161', height: '8vh', minHeight: '60px'}}
                    />
                  </div>
                </Animated>

                <div>
                  <Drawer
                    docked={false}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                    zDepth={1}
                    width={200}
                  >

                    <MenuItem disabled={true} style={{textAlign: 'center'}}>
                      <Avatar src={require('./images/photo_one.jpg')} size={110} style={{marginTop: 25}} />
                    </MenuItem>

                    <NavLink className='drawerItemsStyle' activeClassName="active" to='/'>
                      <MenuItem onClick={this.handleClose} style={{fontWeight: 'bold', color: deepPurple400}} leftIcon={<HomeIcon color={'#c2a057'}/>}>
                        HOME
                      </MenuItem>
                    </NavLink>

                    <NavLink className='drawerItemsStyle' activeClassName="active" to='/portfolio'>
                      <MenuItem onClick={this.handleClose} style={{fontWeight: 'bold', color: yellowA700}} leftIcon={<Photo color={'#ae00ff'}/>}>
                        PORTFOLIO
                      </MenuItem>
                    </NavLink>

                    <NavLink className='drawerItemsStyle' activeClassName="active" target="_blank" to='https://github.com/prathameshpm/portfolio-app'>
                      <MenuItem onClick={this.handleClose} style={{fontWeight: 'bold', color: red500}} leftIcon={<ContentLink color={'#36f468'} />}>
                        SOURCE CODE
                      </MenuItem>
                    </NavLink>

                    <NavLink className='drawerItemsStyle' activeClassName="active" to='/resume'>
                      <MenuItem onClick={this.handleClose} style={{fontWeight: 'bold', color: lightGreen800}} leftIcon={<Image color={'#8b2f55'} />}>
                        RESUME
                      </MenuItem>
                    </NavLink>

                    <NavLink className='drawerItemsStyle' activeClassName="active" to='/skills'>
                      <MenuItem onClick={this.handleClose} style={{fontWeight: 'bold', color: orange800}} leftIcon={<Star color={'#0030ef'}/>}>
                        SKILLS
                      </MenuItem>
                    </NavLink>

                    <NavLink className='drawerItemsStyle' activeClassName="active" to='/education'>
                      <MenuItem onClick={this.handleClose} style={{fontWeight: 'bold', color: purpleA700}} leftIcon={<School color={'#ffd500'}/>}>
                        EDUCATION
                      </MenuItem>
                    </NavLink>

                    <NavLink className='drawerItemsStyle' activeClassName="active" to='/contact'>
                      <MenuItem onClick={this.handleClose} style={{fontWeight: 'bold', color: blue500}} leftIcon={<ContactPhone color={'#f36e21'} />}>
                        CONTACT
                      </MenuItem>
                    </NavLink>

                  </Drawer>

                  <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/portfolio' component={Portfolio}/>
                    <Route exact path='/resume' component={Resume} />
                    <Route exact path='/skills' component={Skills} />
                    <Route exact path='/education' component={Education} />
                    <Route exact path='/contact' component={Contact} />
                    <Route component={NotFound}/>
                  </Switch>

                </div>
              </div>
            </MuiThemeProvider>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
