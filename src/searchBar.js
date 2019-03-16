import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/FlashOn";

import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/StoreMallDirectory";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import Edit from "@material-ui/icons/AddCircle";

import axios from "axios";

import Drawers from "./Drawer";
import Map from "./map";

import { Link } from "react-router-dom";

const styles = {
  root: {
    display: "flex",
    alignItems: "center",
    width: `${window.innerWidth - 15}px`
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  }
};

class CustomizedInputBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.ChangeHandler = this.ChangeHandler.bind(this);
    this.onSubmits = this.onSubmits.bind(this);
  }

  MenuIconHandeler = () => {
    this.setState({ open: !this.state.open ? true : false });
  };

  onSubmits() {
    const hospitals = "";

    axios
      .post(`https://find-hospital.herokuapp.com/api/hospitals/search`, {
        query: this.state.text
      })
      .then(res => {
        this.setState({
          hospital: res.data
        });
      });
    this.setState({
      hospital: hospitals
    });
    this.setState({
      opens: false
    });
  }

  ChangeHandler(event) {
    this.setState({
      text: event.target.value
    });
  }
  renderList() {}

  render() {
    const { classes } = this.props;
    console.log(this.state.hospital);
    if (this.state.hospital) {
      return this.state.hospital.map(hospital => (
        <div key={hospital._id}>
          <Link
            to={`/disease/${hospital._id}`}
            style={{ textDecoration: "none" }}
          >
            <ListItem button>
              <ListItemIcon>
                <Edit />
              </ListItemIcon>
              <ListItemText primary={hospital.Hospital_Name} />
            </ListItem>
            <Divider />
          </Link>
        </div>
      ));
    }
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <IconButton className={classes.iconButton} aria-label="Menu">
            <MenuIcon onClick={this.MenuIconHandeler} />
            <Drawers open={this.state.open} close={this.MenuIconHandeler} />
          </IconButton>

          <InputBase
            className={classes.input}
            placeholder="e.g Cardiac, Diabeties..."
            onClick={this.onSubmit}
            onChange={this.ChangeHandler}
          />
          <IconButton className={classes.iconButton} aria-label="Search">
            <SearchIcon onClick={this.onSubmits} />
          </IconButton>

          <Divider className={classes.divider} />
          <Link to="/emer" style={{textDecoration:'none'}}>
          <IconButton
            color="secondary"
            className={classes.iconButton}
            aria-label="Directions"
          >
            <DirectionsIcon />
            <p style={{ fontSize: "8px" }}>Emergency</p>
          </IconButton>
          </Link>
        </Paper>
      </div>
    );
    return <div>Loading</div>;
  }
}

export default withStyles(styles)(CustomizedInputBase);
