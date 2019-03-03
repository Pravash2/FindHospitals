import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Directions";

import { Link } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1
  }
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            {props.HospitalName}
          </Typography>

          <IconButton
            style={{ margin: "auto", marginRight: "0", color: "blue" }}
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <a
              href={`https://maps.google.com?saddr=${17.597},${78.4863}&daddr=${
                props.cordinate[0]
              },${props.cordinate[1]}`}
            >
              <MenuIcon />
            </a>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleAppBar);
