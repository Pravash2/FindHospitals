import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class CheckboxListSecondary extends React.Component {
  constructor(props){
    super(props)
     this.state = {
    checked: ''
  };
  }

  
  
 

  handleToggle = value => () => {
    if(this.state.checked.indexOf(value)==-1){
    const newChecked=[...this.state.checked,value]
    this.setState({
      checked: newChecked
    })
    this.props.handelSp(newChecked)
    }else{
      const index=this.state.checked.indexOf(value)
      const newChecked=[...this.state.checked]
      newChecked.splice(index, 1);
      this.setState({
      checked: newChecked,
    });
  
    }
    
  };

  render() {
    const { classes } = this.props;
    
    return (
      <List dense className={classes.root}>
        {this.props.lists.map(value => (
          <ListItem key={value} button>
            
            <ListItemText primary={`${value + 1}`} />
            <ListItemSecondaryAction>
              <Checkbox
                onChange={this.handleToggle(value) }
                checked={this.state.checked.indexOf(value) !== -1}
              />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    );
  }
}

CheckboxListSecondary.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxListSecondary);
