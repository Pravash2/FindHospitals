import React from "react";
import axios from "axios";
import { List, ListItem, ListItemText } from "@material-ui/core";
import {
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody
} from "@material-ui/core";
const keys =
	"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InByYXZhc2hiZWhlcmEyQGdtYWlsLmNvbSIsInJvbGUiOiJVc2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiMzYyMSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IjIwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGltaXQiOiI5OTk5OTk5OTkiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXAiOiJQcmVtaXVtIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAxOC0wNy0yNSIsImlzcyI6Imh0dHBzOi8vc2FuZGJveC1hdXRoc2VydmljZS5wcmlhaWQuY2giLCJhdWQiOiJodHRwczovL2hlYWx0aHNlcnZpY2UucHJpYWlkLmNoIiwiZXhwIjoxNTUxNjE5NDYyLCJuYmYiOjE1NTE2MTIyNjJ9.aaH3nGtIcQ1PlBLe8nPfaLlv_jFak_Kd-zfgBu5k4nc";
class App extends React.Component {
	constructor(props) {
		super(props);
		axios
			.get(
				`https://sandbox-healthservice.priaid.ch/diagnosis?symptoms=[${
					this.props.match.params.id
				}]&gender=male&year_of_birth=20&token=${keys}&format=json&language=en-gb`
			)
			.then(res => this.setState({ disease: res.data }));
		axios
			.get(`https://find-hospital.herokuapp.com/api/hospitals/all`)
			.then(res => this.setState({ hospital: res.data }));
	}
	state = {
		disease: "",
		hospital: ""
	};
	renderLists() {
		console.log(this.state.disease);
		if (this.state.hospital)
			return (
				<div>
					<List>
						<h2>{`${this.state.disease[0].Issue.Name}`}</h2>
						<ListItem>
							<ListItemText>
								<Table>
									<TableHead>
										<TableCell>Doctor</TableCell>
										<TableCell>Hospital</TableCell>
										<TableCell>Suggested Tests</TableCell>
									</TableHead>

									<TableBody>
										<TableCell>
											{this.state.hospital[0].doctors[0].name}
										</TableCell>
										<TableCell>
											{this.state.hospital[0].Hospital_Name}
										</TableCell>
										<TableCell row={3}>
											<p>1: ECG</p>
											<p>2: Holter monitering</p>
											<p>3: Stress test</p>
											<p>4: Cardiac MRI </p>,
										</TableCell>
									</TableBody>

									<TableBody>
										<TableCell>
											{this.state.hospital[0].doctors[1].name}
										</TableCell>
										<TableCell>
											{this.state.hospital[0].Hospital_Name}
										</TableCell>
										<TableCell row={3}>
											<p>1: ECG</p>
											<p>2: Holter monitering</p>
											<p>3: Stress test</p>
											<p>4: Cardiac MRI </p>,
										</TableCell>
									</TableBody>

									<TableBody>
										<TableCell>
											{this.state.hospital[0].doctors[2].name}
										</TableCell>
										<TableCell>
											{this.state.hospital[0].Hospital_Name}
										</TableCell>
										<TableCell row={3}>
											<p>1: ECG</p>
											<p>2: Holter monitering</p>
											<p>3: Stress test</p>
											<p>4: Cardiac MRI </p>,
										</TableCell>
									</TableBody>

									<TableBody>
										<TableCell>
											{this.state.hospital[2].doctors[0].name}
										</TableCell>
										<TableCell>
											{this.state.hospital[2].Hospital_Name}
										</TableCell>
										<TableCell row={3}>
											<p>1: ECG</p>
											<p>2: Holter monitering</p>
											<p>3: Stress test</p>
											<p>4: Cardiac MRI </p>,
										</TableCell>
									</TableBody>

									<TableBody>
										<TableCell>
											{this.state.hospital[4].doctors[0].name}
										</TableCell>
										<TableCell>
											{this.state.hospital[4].Hospital_Name}
										</TableCell>
										<TableCell row={3}>
											<p>1: ECG</p>
											<p>2: Holter monitering</p>
											<p>3: Stress test</p>
											<p>4: Cardiac MRI </p>,
										</TableCell>
									</TableBody>
								</Table>
							</ListItemText>
						</ListItem>
					</List>
				</div>
			);
	}
	render() {
		if (this.state.disease) return <div>{this.renderLists()}</div>;

		return <div>Loading</div>;
	}
}

export default App;
