import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import CheakBox from './checkBox'

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class AlertDialogSlide extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    
    if(this.props.check){
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          {`Set the ${this.props.type}`}
        </Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
           <CheakBox lists={this.props.lists} check={this.props.check[0].split(',')} handelSp={this.props.handelSp}/>
        </Dialog>
      </div>
    );
    }
    return <div>Loading</div>
  }
}

export default AlertDialogSlide;
