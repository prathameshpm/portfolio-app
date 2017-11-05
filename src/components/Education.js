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
                <div className="collapsible-header"><i className="material-icons" style={{color: "#5b4619"}} >spellcheck</i><span style={{color: "#192E5B", fontSize: "1em"}}>Schooling</span></div>
                <div className="collapsible-body"><span><h3>SSC</h3><br /><h5>87.23% | 2009</h5></span></div>
              </li>
              <li>
                <div className="collapsible-header"><i className="material-icons" style={{color: "#a65d1d"}} >sort_by_alpha</i><span style={{color: "#1D65A6", fontSize: "1.07em"}}>Junior College</span></div>
                <div className="collapsible-body"><span><h3>HSC (Bi-focal)</h3><br /><h5>72.27% | 2011</h5></span></div>
              </li>
              <li>
                <div className="collapsible-header"><i className="material-icons" style={{color: "#c09072"}} >import_contacts</i><span style={{color: "#72A2C0", fontSize: "1.15em"}}>Engineering</span></div>
                <div className="collapsible-body"><span><h3>Pune University</h3><br /><h5>BE E&Tc | Higher Second Class | 2016</h5></span></div>
              </li>
              <li>
                <div className="collapsible-header"><i className="material-icons" style={{color: "#740034"}} >desktop_mac</i><span style={{color: "#00743F", fontSize: "1.28em"}}>Javascript</span></div>
                <div className="collapsible-body"><span><h3>Udemy</h3><br /><h5>Understanding The Weird Parts of Javascript | August 2017</h5><img src={require('../images/javascriptCert.jpg')} alt="Javascipt Certificate" /></span></div>
              </li>
              <li>
                <div className="collapsible-header"><i className="material-icons" style={{color: "#0453f2"}} >laptop_mac</i><span style={{color: "#F2A104", fontSize: "1.49em"}}>NodeJS</span></div>
                <div className="collapsible-body"><span><h3>Udemy</h3><br /><h5>The Complete Node Developer Course | September 2017</h5><img src={require('../images/NodeJScert.jpg')} alt="NodeJS Certificate" /></span></div>
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
