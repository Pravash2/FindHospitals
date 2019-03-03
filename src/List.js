import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/StoreMallDirectory";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import Edit from "@material-ui/icons/AddCircle";

import axios from "axios";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 560,
    margin: "0 auto",
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

class NestedList extends React.Component {
  state = {
    hospital: [],
    open: false
  };

  componentDidMount() {
    axios
      .get(
        `https://find-hospital.herokuapp.com/api/hospitals/filter/${
          this.props.match.params.type
        }`
      )
      .then(res => {
        this.setState({ hospital: res.data });
      });
  }

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };
  renderDialog() {
    this.setState({ open: true });
  }

  renderList() {
    return this.state.hospital.map(hospital => {
      return (
        <div key={hospital._id}>
          <Link to={`/hospital/${hospital._id}`} style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemIcon>
                <Edit />
              </ListItemIcon>
              <ListItemText
                primary={hospital.Hospital_Name}
                secondary={hospital.Location}
              />
            </ListItem>
            <Divider />
          </Link>
        </div>
      );
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <List
        component="nav"
        subheader={
          <ListSubheader component="div">
            Welcome to edit page of List of Hospital
          </ListSubheader>
        }
        className={classes.root}
      >
        {this.renderList()}
      </List>
    );
    return <div>Loading</div>;
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NestedList);
