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
import MenuItemThree from './components/MenuItemThree';
import MenuItemFour from './components/MenuItemFour';
import UpNext from './components/UpNext';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

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
                      style={{backgroundColor: '#616161', height: '8vh'}}
                    />
                  </div>
                </Animated>

                <div>
                  <Drawer
                    docked={false}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                    zDepth={1}
                    width={140}
                  >

                    <MenuItem disabled={true}>
                      <Avatar src={require('./images/photo.jpg')} size={100} />
                    </MenuItem>

                    <NavLink className='drawerItemsStyle' activeClassName="active" to='/'>
                      <MenuItem onClick={this.handleClose} style={{fontWeight: 'bold', color: deepPurple400}}>
                        HOME
                      </MenuItem>
                    </NavLink>

                    <NavLink className='drawerItemsStyle' activeClassName="active" to='/portfolio'>
                      <MenuItem onClick={this.handleClose} style={{fontWeight: 'bold', color: yellowA700}}>
                        PORTFOLIO
                      </MenuItem>
                    </NavLink>

                    <NavLink className='drawerItemsStyle' activeClassName="active" target="_blank" to='https://github.com/prathameshpm/portfolio-app'>
                      <MenuItem onClick={this.handleClose} style={{fontWeight: 'bold', color: red500}}>
                        SOURCE CODE
                      </MenuItem>
                    </NavLink>

                    <NavLink className='drawerItemsStyle' activeClassName="active" to='/menuitem3'>
                      <MenuItem onClick={this.handleClose} style={{fontWeight: 'bold', color: lightGreen800}}>
                        MENU ITEM 3
                      </MenuItem>
                    </NavLink>

                    <NavLink className='drawerItemsStyle' activeClassName="active" to='/menuitem4'>
                      <MenuItem onClick={this.handleClose} style={{fontWeight: 'bold', color: orange800}}>
                        MENU ITEM 4
                      </MenuItem>
                    </NavLink>

                    <NavLink className='drawerItemsStyle' activeClassName="active" to='/soontocome'>
                      <MenuItem onClick={this.handleClose} style={{fontWeight: 'bold', color: purpleA700}}>
                        UP NEXT
                      </MenuItem>
                    </NavLink>

                    <NavLink className='drawerItemsStyle' activeClassName="active" to='/contact'>
                      <MenuItem onClick={this.handleClose} style={{fontWeight: 'bold', color: blue500}}>
                        CONTACT
                      </MenuItem>
                    </NavLink>

                  </Drawer>

                  <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/portfolio' component={Portfolio}/>
                    <Route exact path='/menuitem3' component={MenuItemThree} />
                    <Route exact path='/menuitem4' component={MenuItemFour} />
                    <Route exact path='/soontocome' component={UpNext} />
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
