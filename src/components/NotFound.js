import React, { Component } from 'react';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Portfolio from './Portfolio';
import MenuItemTwo from './MenuItemTwo';
import MenuItemThree from './MenuItemThree';
import MenuItemFour from './MenuItemFour';
import MenuItemFive from './MenuItemFive';
import MenuItemSix from './MenuItemSix';

class NotFound extends Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <h1>Page Not Found</h1>
          <p>404: Please input the correct URL</p>
          <h3>OR</h3>
          <p>Click on one of the following links:</p>
          <NavLink to='/'><p>HOME</p></NavLink>
          <NavLink to='/portfolio'><p>PORTFOLIO</p></NavLink>
          <NavLink to='/menuitem2'><p>MENU ITEM 2</p></NavLink>
          <NavLink to='/menuitem3'><p>MENU ITEM 3</p></NavLink>
          <NavLink to='/menuitem4'><p>MENU ITEM 4</p></NavLink>
          <NavLink to='/menuitem5'><p>MENU ITEM 5</p></NavLink>
          <NavLink to='/menuitem6'><p>MENU ITEM 6</p></NavLink>

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/portfolio' component={Portfolio}/>
            <Route exact path='/menuitem2' component={MenuItemTwo} />
            <Route exact path='/menuitem3' component={MenuItemThree} />
            <Route exact path='/menuitem4' component={MenuItemFour} />
            <Route exact path='/menuitem5' component={MenuItemFive} />
            <Route exact path='/menuitem6' component={MenuItemSix} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default NotFound;
