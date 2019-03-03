import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import AppBars from "./AppBar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";

import IconButton from "@material-ui/core/IconButton";

import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import SendIcon from "@material-ui/icons/Send";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import axios from "axios";

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500
  }
});

class FullWidthTabs extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get(
        `https://find-hospital.herokuapp.com/api/hospitals/${
          this.props.match.params.id
        }`
      )
      .then(res => {
        console.log(res.data);
        this.setState({
          doctor: res.data.doctors,
          hospital: res.data
        });
      });
  }
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;
    if (this.state.doctor && this.state.doctor.length > 0) {
      const hospital = this.state.doctor;
      return (
        <div className={classes.root}>
          <AppBars />
          <AppBar position="static" color="default">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="Info" />
              <Tab label="Specialists" />
              <Tab label="Blood Bank" />
              <Tab label="Medicine" />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={this.state.value}
            onChangeIndex={this.handleChangeIndex}
          >
            <TabContainer dir={theme.direction}>
              <List>
                <ListItem button>
                  <ListItemText primary={`Location`} secondary={`vsss`} />
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
                    secondary={`{hospital.Pincode}`}
                  />
                </ListItem>
                <Divider />
                <ListItem button>
                  <ListItemText
                    primary="District"
                    secondary={`hospital.District`}
                  />
                </ListItem>
                <Divider />
                <ListItem button>
                  <ListItemText primary="State" secondary={`hospital.State`} />
                </ListItem>
              </List>
            </TabContainer>
            <TabContainer dir={theme.direction}>
              <Paper>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell align="right">Experience</TableCell>
                      <TableCell align="right">Eduction</TableCell>
                      <TableCell align="right">Specialties</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {hospital.map(item => {
                      return (
                        <TableRow>
                          <TableCell>{item.name}</TableCell>
                          <TableCell align="right">{item.experience}</TableCell>
                          <TableCell align="right">{item.eduction}</TableCell>
                          <TableCell align="right">
                            {item.specialties}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </Paper>
            </TabContainer>
            <TabContainer dir={theme.direction}>Item Three</TabContainer>
            <TabContainer dir={theme.direction}>Item Three</TabContainer>
          </SwipeableViews>
        </div>
      );
    }
    return <div>Loading</div>;
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);
