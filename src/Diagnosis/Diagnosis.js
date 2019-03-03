import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";

import { ListItem, ListItemText } from "@material-ui/core";
import axios from "axios";
import { Link } from "react-router-dom";

const styles = {
	root: {
		padding: "2px 4px",
		display: "flex",
		alignItems: "center",
		width: 400
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

const keys =
	"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InByYXZhc2hiZWhlcmEyQGdtYWlsLmNvbSIsInJvbGUiOiJVc2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiMzYyMSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IjIwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGltaXQiOiI5OTk5OTk5OTkiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXAiOiJQcmVtaXVtIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAxOC0wNy0yNSIsImlzcyI6Imh0dHBzOi8vc2FuZGJveC1hdXRoc2VydmljZS5wcmlhaWQuY2giLCJhdWQiOiJodHRwczovL2hlYWx0aHNlcnZpY2UucHJpYWlkLmNoIiwiZXhwIjoxNTUxNjExODQyLCJuYmYiOjE1NTE2MDQ2NDJ9.hhFFr8F9-Jtg3BPIxchi1ZEypOKergRCgrxo3pIWocw";

class CustomizedInputBase extends React.Component {
	constructor(props) {
		super(props);
		this.HandelInput = this.HandelInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	state = {
		input: "",
		disease: ""
	};
	HandelInput(event) {
		this.setState({
			input: event.target.value
		});
		axios
			.get(
				`https://sandbox-healthservice.priaid.ch/symptoms?token=${keys}&format=json&language=en-gb`
			)
			.then(res =>
				this.setState({
					disease: res.data.filter(temp =>
						temp.Name.toLowerCase().includes(this.state.input.toLowerCase())
					)
				})
			);
		console.log(this.state.disease);
	}

	handleSubmit(event) {
		event.preventDefault();
	}

	render() {
		const { classes } = this.props;
		if (this.state.disease) {
			return (
				<div>
					<form onSubmit={this.handleSubmit}>
						<Paper className={classes.root} elevation={1}>
							<InputBase
								className={classes.input}
								onChange={this.HandelInput}
								placeholder="e.g Abdominal pain"
							/>
							<Divider className={classes.divider} />
							<IconButton className={classes.iconButton} aria-label="Search">
								<SearchIcon type="submit" />
							</IconButton>
						</Paper>
					</form>
					{this.state.disease.map(disease => (
						<Link
							to={`/disease/${disease.ID}`}
							style={{ textDecoration: "none" }}>
							<ListItem button>
								<ListItemText primary={disease.Name} />
							</ListItem>
						</Link>
					))}
				</div>
			);
		}
		return (
			<form onSubmit={this.handleSubmit}>
				<Paper className={classes.root} elevation={1}>
					<InputBase
						className={classes.input}
						onChange={this.HandelInput}
						placeholder="e.g Abdominal pain"
					/>
					<Divider className={classes.divider} />
					<IconButton className={classes.iconButton} aria-label="Search">
						<SearchIcon type="submit" />
					</IconButton>
				</Paper>
			</form>
		);
	}
}

CustomizedInputBase.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedInputBase);
