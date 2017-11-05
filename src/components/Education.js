import React, { Component } from 'react';
import { Animated } from "react-animated-css";
import '../styles/Education.css';

class Education extends Component {
  render() {
    return (
      <div className="educationPageStyle">
        <Animated animationIn="fadeInUp">
          <div className="container">
            <ul className="collapsible popout" data-collapsible="accordion">
              <li>
                <div className="collapsible-header"><i className="material-icons">spellcheck</i>Schooling</div>
                <div className="collapsible-body"><span><h3>SSC</h3><br /><h5>87.23% | 2009</h5></span></div>
              </li>
              <li>
                <div className="collapsible-header"><i className="material-icons">sort_by_alpha</i>Junior College</div>
                <div className="collapsible-body"><span><h3>HSC (Bi-focal)</h3><br /><h5>72.27% | 2011</h5></span></div>
              </li>
              <li>
                <div className="collapsible-header"><i className="material-icons">import_contacts</i>Engineering</div>
                <div className="collapsible-body"><span><h3>Pune University</h3><br /><h5>BE E&Tc | Higher Second Class | 2016</h5></span></div>
              </li>
              <li>
                <div className="collapsible-header"><i className="material-icons">desktop_mac</i>Javascipt Cerification</div>
                <div className="collapsible-body"><span><img src={require('../images/javascriptCert.jpg')} alt="Javascipt Certificate" /></span></div>
              </li>
              <li>
                <div className="collapsible-header"><i className="material-icons">laptop_mac</i>NodeJS Cerification</div>
                <div className="collapsible-body"><span><img src={require('../images/NodeJScert.jpg')} alt="NodeJS Certificate" /></span></div>
              </li>
            </ul>
            <p>* Please refresh page and then click on tabs to see details</p>
          </div>
        </Animated>
      </div>
    );
  }
}

export default Education;
