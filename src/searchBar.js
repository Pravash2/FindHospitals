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

import { Link } from "react-router-dom";
import Drawers from "./Drawer";

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
  }

  MenuIconHandeler = () => {
    this.setState({ open: !this.state.open ? true : false });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root} elevation={1}>
        <IconButton className={classes.iconButton} aria-label="Menu">
          <MenuIcon onClick={this.MenuIconHandeler} />
          <Drawers open={this.state.open} close={this.MenuIconHandeler} />
        </IconButton>

        <InputBase
          className={classes.input}
          placeholder="e.g Cardiac, Diabeties..."
        />
        <IconButton className={classes.iconButton} aria-label="Search">
          <SearchIcon />
        </IconButton>
        <Divider className={classes.divider} />

        <IconButton
          color="secondary"
          className={classes.iconButton}
          aria-label="Directions">
          <DirectionsIcon />

          <p style={{ fontSize: "8px" }}>Emergency</p>
        </IconButton>
      </Paper>
    );
  }
}

export default withStyles(styles)(CustomizedInputBase);
