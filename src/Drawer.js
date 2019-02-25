import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

class TemporaryDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: this.props.open,
    right: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;
    const fullList = (
      <div style={{ height: `500px` }} className={classes.fullList}>
        <List>
          <ListItem button>
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/6Ggz-045-hospital.png"
              />
            </ListItemAvatar>
            <ListItemText primary="Hospital" />
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/t8kE-005-blood-1.png"
              />
            </ListItemAvatar>
            <ListItemText primary="Clinic" />
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/HrLr-027-drips.png"
              />
            </ListItemAvatar>
            <ListItemText primary="Nurshing Home" />
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/QqwA-049-pharmacy-2.png"
              />
            </ListItemAvatar>
            <ListItemText primary="Community Health Centre" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/Srrj-012-pills-1.png"
              />
            </ListItemAvatar>
            <ListItemText primary="Child Care" />
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/jwVg-034-eye-2.png"
              />
            </ListItemAvatar>
            <ListItemText primary="Eye Care" />
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/cyKR-094-tooth.png"
              />
            </ListItemAvatar>
            <ListItemText primary="Dental Care" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/UH0B-006-mortar.png"
              />
            </ListItemAvatar>
            <ListItemText primary="Ayurvedic" />
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/zMaC-009-mortar-1.png"
              />
            </ListItemAvatar>
            <ListItemText primary="Homopatic" />
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/IBam-001-pharmacy.png"
              />
            </ListItemAvatar>
            <ListItemText primary="Veterinary" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/ypF--050-test-tube-1.png"
              />
            </ListItemAvatar>
            <ListItemText primary="Pathology Lab" />
          </ListItem>
        </List>
      </div>
    );

    return (
      <div>
        <Drawer
          anchor="left"
          open={this.props.open}
          onClose={this.props.close}>
          <div
            tabIndex={0}
            role="left"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}>
            {fullList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TemporaryDrawer);
