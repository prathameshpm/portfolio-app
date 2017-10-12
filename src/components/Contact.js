import React, { Component } from 'react';

import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';

import { Animated } from "react-animated-css";

class MenuItemSix extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSnackBar: false,
    };
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleTouchTap = () => {
    this.setState({
      openSnackBar: true,
    });
  };

  handleRequestClose = () => {
    this.setState({
      openSnackBar: false,
    });
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col m3">
            <Animated animationIn="fadeInUp">
              <RaisedButton
                onClick={this.handleTouchTap}
                primary={true}
                label="Click Here to see Snackbar Feature"
              />
              <Snackbar
                open={this.state.openSnackBar}
                message="This is a Snackbar Feature"
                autoHideDuration={800}
                onRequestClose={this.handleRequestClose}
                style={{textAlign: 'center'}}
              />
            </Animated>
          </div>
        </div>

      </div>
    );
  }
}

export default MenuItemSix;
