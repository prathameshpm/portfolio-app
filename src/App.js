import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';

import { Animated } from "react-animated-css";
import './styles/App.css';

import Home from './components/Home';
import MenuItemOne from './components/MenuItemOne';
import MenuItemTwo from './components/MenuItemTwo';
import MenuItemThree from './components/MenuItemThree';
import MenuItemFour from './components/MenuItemFour';
import MenuItemFive from './components/MenuItemFive';
import MenuItemSix from './components/MenuItemSix';
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
        <div>
          <MuiThemeProvider>
            <div>
              <Animated animationIn="pulse">
                <div>
                  <Paper zDepth={5} rounded={false} style={{height: '30vh', width: '95vw', textAlign: 'center', margin: '2.5vw', backgroundColor: deepPurple400}}>

                  </Paper>
                </div>
              </Animated>
            </div>
          </MuiThemeProvider>
        </div>
        <BrowserRouter>
          <div>
            <MuiThemeProvider>
              <div>
                <Animated animationIn="fadeInUp">
                  <div>
                    <AppBar
                      title="Menu"
                      iconClassNameRight="muidocs-icon-navigation-expand-more"
                      onLeftIconButtonTouchTap={() => this.setState({open: !this.state.open})}
                      style={{backgroundColor: deepPurple400}}
                    />
                  </div>
                </Animated>

                <div>
                  <Drawer
                    docked={false}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                    zDepth={1}
                    width={280}
                  >
                    <NavLink className='drawerItemsStyle' activeClassName="active" to='/'>
                      <MenuItem onClick={this.handleClose} style={{fontWeight: 'bold', color: deepPurple400}}>
                        HOME
                      </MenuItem>
                    </NavLink>

                    <Divider />

                    <NavLink className='drawerItemsStyle' activeClassName="active" to='/menuitem1'>
                      <MenuItem onClick={this.handleClose} style={{fontWeight: 'bold', color: yellowA700}}>
                        MENU ITEM 1
                      </MenuItem>
                    </NavLink>

                    <Divider />

                    <NavLink className='drawerItemsStyle' activeClassName="active" to='/menuitem2'>
                      <MenuItem onClick={this.handleClose} style={{fontWeight: 'bold', color: red500}}>
                        MENU ITEM 2
                      </MenuItem>
                    </NavLink>

                    <Divider />

                    <NavLink className='drawerItemsStyle' activeClassName="active" to='/menuitem3'>
                      <MenuItem onClick={this.handleClose} style={{fontWeight: 'bold', color: lightGreen800}}>
                        MENU ITEM 3
                      </MenuItem>
                    </NavLink>

                    <Divider />

                    <NavLink className='drawerItemsStyle' activeClassName="active" to='/menuitem4'>
                      <MenuItem onClick={this.handleClose} style={{fontWeight: 'bold', color: orange800}}>
                        MENU ITEM 4
                      </MenuItem>
                    </NavLink>

                    <Divider />

                    <NavLink className='drawerItemsStyle' activeClassName="active" to='/menuitem5'>
                      <MenuItem onClick={this.handleClose} style={{fontWeight: 'bold', color: purpleA700}}>
                        MENU ITEM 5
                      </MenuItem>
                    </NavLink>

                    <Divider />

                    <NavLink className='drawerItemsStyle' activeClassName="active" to='/menuitem6'>
                      <MenuItem onClick={this.handleClose} style={{fontWeight: 'bold', color: blue500}}>
                        MENU ITEM 6
                      </MenuItem>
                    </NavLink>

                  </Drawer>

                  <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/menuitem1' component={MenuItemOne}/>
                    <Route exact path='/menuitem2' component={MenuItemTwo} />
                    <Route exact path='/menuitem3' component={MenuItemThree} />
                    <Route exact path='/menuitem4' component={MenuItemFour} />
                    <Route exact path='/menuitem5' component={MenuItemFive} />
                    <Route exact path='/menuitem6' component={MenuItemSix} />
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
