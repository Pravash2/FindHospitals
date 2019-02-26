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

import { Link } from "react-router-dom";

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
          <Link to="/hospital" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar
                  alt="Hospital"
                  src="https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/6Ggz-045-hospital.png"
                />
              </ListItemAvatar>
              <ListItemText primary="Hospital" />
            </ListItem>
          </Link>
          <Link to="/clinic" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar
                  alt="Clinic"
                  src="https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/t8kE-005-blood-1.png"
                />
              </ListItemAvatar>
              <ListItemText primary="Clinic" />
            </ListItem>
          </Link>
          <Link to="/nursinghome" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar
                  alt="Nurshing Home"
                  src="https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/HrLr-027-drips.png"
                />
              </ListItemAvatar>

              <ListItemText primary="Nurshing Home" />
            </ListItem>
          </Link>
          <Link to="/communityhealthcentre" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar
                  alt="Community Health Centre"
                  src="https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/QqwA-049-pharmacy-2.png"
                />
              </ListItemAvatar>
              <ListItemText primary="Community Health Centre" />
            </ListItem>
          </Link>
        </List>
        <Divider />

        <List>
          <Link to="/childcare" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar
                  alt="Child Care"
                  src="https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/RG1x-childhealthcare.png"
                />
              </ListItemAvatar>
              <ListItemText primary="Child Care" />
            </ListItem>
          </Link>
          <Link to="/eyecare" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar
                  alt="Eye Care"
                  src="https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/jwVg-034-eye-2.png"
                />
              </ListItemAvatar>
              <ListItemText primary="Eye Care" />
            </ListItem>
          </Link>
          <Link to="/dentalcare" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar
                  alt="Dental Care"
                  src="https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/cyKR-094-tooth.png"
                />
              </ListItemAvatar>
              <ListItemText primary="Dental Care" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link to="/ayurvedic" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar
                  alt="Ayurvedic"
                  src="https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/UH0B-006-mortar.png"
                />
              </ListItemAvatar>
              <ListItemText primary="Ayurvedic" />
            </ListItem>
          </Link>
          <Link to="/homopatic" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar
                  alt="Homopatic"
                  src="https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/zMaC-009-mortar-1.png"
                />
              </ListItemAvatar>
              <ListItemText primary="Homopatic" />
            </ListItem>
          </Link>
          <Link to="/veterinary" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar
                  alt="Veterinary"
                  src="https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/IBam-001-pharmacy.png"
                />
              </ListItemAvatar>
              <ListItemText primary="Veterinary" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link to="/testlab" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar
                  alt="Pathology Lab"
                  src="https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/ypF--050-test-tube-1.png"
                />
              </ListItemAvatar>
              <ListItemText primary="Pathology Lab" />
            </ListItem>
          </Link>
        </List>
      </div>
    );

    return (
      <div>
        <Drawer anchor="left" open={this.props.open} onClose={this.props.close}>
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
