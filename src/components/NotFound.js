import React, { Component } from 'react';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Skills from './Skills';
import UpNext from './UpNext';
import Contact from './Contact';

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
          <NavLink to='/resume'><p>RESUME</p></NavLink>
          <NavLink to='/skills'><p>SKILLS</p></NavLink>
          <NavLink to='/soontocome'><p>UP NEXT</p></NavLink>
          <NavLink to='/contact'><p>CONTACT</p></NavLink>

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/portfolio' component={Portfolio}/>
            <Route exact path='/resume' component={Resume} />
            <Route exact path='/skills' component={Skills} />
            <Route exact path='/soontocome' component={UpNext} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default NotFound;
