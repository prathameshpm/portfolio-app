import React, { Component } from 'react';

import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';

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
        <RaisedButton
          onClick={this.handleTouchTap}
          primary={true}
          label="Click Me Please"
        />
        <Snackbar
          open={this.state.openSnackBar}
          message="Thank You"
          autoHideDuration={800}
          onRequestClose={this.handleRequestClose}
          style={{textAlign: 'center'}}
        />
      </div>
    );
  }
}

export default MenuItemSix;
