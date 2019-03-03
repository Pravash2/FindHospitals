import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import SendIcon from "@material-ui/icons/Send";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import axios from "axios";
import Loader from "./SpinnerHori";

const styles = {
  appBar: {
    position: "relative"
  },
  flex: {
    flex: 1
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
  //   constructor(props) {
  //     super();
  //     this.state = {
  //       hospital: this.props.hospitals.filter(hospital => hospital.Location_Coordinates == this.props.positions)
  //     };
  //   }

  state = {
    open: false,
    hospitalData: ""
  };

  componentWillMount() {
    axios
      .get(
        `https://find-hospital.herokuapp.com/api/hospitals/${
          this.props.hospitals[0]._id
        }`
      )
      .then(res => {
        this.setState({
          hospitalData: res.data
        });
      });
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const hospital = this.state.hospitalData;
    if (hospital) {
      return (
        <div>
          <Button
            fullWidth
            color="secondary"
            size="small"
            onClick={this.handleClickOpen}>
            {hospital.Hospital_Name}
          </Button>
          <Dialog
            fullScreen
            open={this.state.open}
            onClose={this.handleClose}
            TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
              <Toolbar>
                <IconButton
                  color="inherit"
                  onClick={this.handleClose}
                  aria-label="Close">
                  <CloseIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  color="inherit"
                  className={classes.flex}>
                  {hospital.Hospital_Name}
                </Typography>
              </Toolbar>
            </AppBar>
            <List>
              <ListItem button>
                <ListItemText
                  primary={`Location`}
                  secondary={`${hospital.Location}`}
                />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText
                  primary="Specialties"
                  secondary="Anaesthesia & Critical Care,Blood Bank,Bone Marrow Transplant,Cardiac Surgery"
                  // secondary={`${hospital.Specialties}`}
                />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText
                  primary="Facilities"
                  secondary="OPD (Allopathy & Homeopathy),Minor OT,Physiotherapy,ECG Services"
                  // secondary={`${hospital.Facilities}`}
                />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText
                  primary="Hospital Catrgory"
                  secondary="Private"
                  // secondary={`${hospital.Hospital_Category}`}
                />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText
                  primary="Telephone"
                  secondary="9658884157"
                  // secondary={`${hospital.Telephone}`}
                />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText
                  primary="Pincode"
                  secondary={`${hospital.Pincode}`}
                />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText
                  primary="District"
                  secondary={`${hospital.District}`}
                />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText primary="State" secondary={`${hospital.State}`} />
              </ListItem>
            </List>
          </Dialog>
        </div>
      );
    }
    return <Loader />;
  }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullScreenDialog);
