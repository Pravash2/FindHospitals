import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";

import axios from "axios";
import { withRouter } from "react-router-dom";
import Dialogs from "./Dialogs";

const specilities = [
  "Burn Center",
  "Family Practice",
  "General Medicine/Geriatrics",
  "General Surgery",
  "Hematology/Oncology",
  "Neuroscience",
  "Orthopedics",
  "Physiotherapy"
];
const facilities = [
  "OPD (Allopathy & Homeopathy)",
  "Ward/ Indoor facility",
  "Minor OT",
  "Physiotherapy",
  "Laboratory services",
  "ECG Services",
  "Pharmacy"
];
const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

const hospitaltype = [
  {
    value: "government",
    label: "Government"
  },
  {
    value: "private",
    label: "Private"
  }
];

const currencies = [
  {
    value: "hospital",
    label: "Hospital"
  },
  {
    value: "clinic",
    label: "Clinic"
  },
  {
    value: "nursinghome",
    label: "Nursing home"
  },
  {
    value: "childcare",
    label: "Child Care"
  },
  {
    value: "ayurvedic",
    label: "Ayurvedic"
  },
  {
    value: "homopatic",
    label: "Homopatic"
  },
  {
    value: "veterinary",
    label: "Veterinary"
  },
  {
    value: "dentalcare",
    label: "Dental Care"
  },
  {
    value: "eyecare",
    label: "Eye Care"
  },
  ,
  {
    value: "testlab",
    label: "Test Lab"
  },
  {
    value: "communityhealthcentre",
    label: "Community Health Centre"
  }
];

class OutlinedTextFields extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    let hospital = [];
    axios
      .get(
        `https://find-hospital.herokuapp.com/api/hospitals/${
          this.props.match.params.id
        }`
      )
      .then(res => {
        hospital = res.data;

        this.setState({
          Location_Coordinates: [hospital.Location_Coordinates],
          Mobile_Number: hospital.Mobile_Number,
          Emergency_Num: hospital.Emergency_Num,
          Ambulance_Phone_No: hospital.Ambulance_Phone_No,
          Bloodbank_Phone_No: hospital.Bloodbank_Phone_No,
          Specialties: hospital.Specialties,
          Facilities: hospital.Facilities,
          Nodal_Person_Tele: hospital.Nodal_Person_Tele,
          _id: hospital._id,
          Sr_No: hospital.Sr_No,
          Location: hospital.Location,
          Hospital_Name: hospital.Hospital_Name,
          Hospital_Category: hospital.Hospital_Category,
          Hospital_Care_Type: hospital.Hospital_Care_Type,
          Discipline_Systems_of_Medicine:
            hospital.Discipline_Systems_of_Medicine,
          Address_Original_First_Line: hospital.Address_Original_First_Line,
          State: hospital.State,
          District: hospital.District,
          Subdistrict: hospital.Subdistrict,
          Pincode: hospital.Pincode,
          Telephone: hospital.Telephone,
          Foreign_pcarethis: hospital.Foreign_pcarethis,
          Tollfree: hospital.Tollfree,
          Helpline: hospital.Helpline,
          Hospital_Fax: hospital.Hospital_Fax,
          Hospital_Secondary_Email_Id: hospital.Hospital_Secondary_Email_Id,
          Website: hospital.Website,
          Accreditation: hospital.Accreditation,
          Hospital_Regis_Number: hospital.Hospital_Regis_Number,
          Registeration_Number_Scan: hospital.Registeration_Number_Scan,
          Nodal_Person_Info: hospital.Nodal_Person_Info,
          Nodal_Person_Email_Id: hospital.Nodal_Person_Email_Id,
          Town: hospital.Town,
          Subtown: hospital.Subtown,
          Village: hospital.Village,
          Establised_Year: hospital.Establised_Year,
          Ayush: hospital.Ayush,
          Miscellaneous_Facilities: hospital.Miscellaneous_Facilities,
          Number_Doctor: hospital.Number_Doctor,
          Num_Mediconsultant_or_Expert: hospital.Num_Mediconsultant_or_Expert,
          Total_Num_Beds: hospital.Total_Num_Beds,
          Number_Private_Wards: hospital.Number_Private_Wards,
          Num_Bed_for_Eco_Weaker_Sec: hospital.Num_Bed_for_Eco_Weaker_Sec,
          Empanelment_or_Collaboration_with: hospital,
          Emergency_Services: hospital.Emergency_Services,
          Tariff_Range: hospital.Tariff_Range,
          State_ID: hospital.State_ID,
          District_ID: hospital.District_ID,
          __v: hospital.__v
        });
        if (hospital.Location_Coordinates.length > 1) {
          this.setState({
            lat: hospital.Location_Coordinates[0],
            lng: hospital.Location_Coordinates[1]
          });
        }
      });
  }

  state = {
    Location_Coordinates: [""],
    Mobile_Number: [""],
    Emergency_Num: [""],
    Ambulance_Phone_No: [""],
    Bloodbank_Phone_No: [""],
    Specialties: [""],
    Facilities: [""],
    Nodal_Person_Tele: [""],
    _id: "5c6db136d15c060d686145b1",
    Sr_No: 20965,
    Location: "Plot No. 168, Ekamra Marg, Unit - 6",
    Hospital_Name: "Maa Shakti Hospital - Bhubaneshwar",
    Hospital_Category: "0",
    Hospital_Care_Type: "0",
    Discipline_Systems_of_Medicine: "0",
    Address_Original_First_Line: "Plot No. 168, Ekamra Marg, Unit - 6",
    State: "Odisha",
    District: "Khordha",
    Subdistrict: "0",
    Pincode: "751001",
    Telephone: "",
    Foreign_pcare: "",
    Tollfree: "",
    Helpline: "",
    Hospital_Fax: "2595166 / 2595300",
    Hospital_Secondary_Email_Id: "0",
    Website: "0",
    Accreditation: 0,
    Hospital_Regis_Number: 0,
    Registeration_Number_Scan: 0,
    Nodal_Person_Info: "0",
    Nodal_Person_Email_Id: "0",
    Town: "0",
    Subtown: "0",
    Village: "0",
    Establised_Year: "0",
    Ayush: "0",
    Miscellaneous_Facilities: "0",
    Number_Doctor: 0,
    Num_Mediconsultant_or_Expert: 0,
    Total_Num_Beds: 0,
    Number_Private_Wards: 0,
    Num_Bed_for_Eco_Weaker_Sec: 0,
    Empanelment_or_Collaboration_with: 0,
    Emergency_Services: "0",
    Tariff_Range: 0,
    State_ID: 21,
    District_ID: 386,
    lat: 0,
    lng: 0,
    __v: 0
  };

  handelCheckSpecialities = items => {
    const item = items.filter(it => it.length > 1);
    this.setState({ Specialties: [...item] });
  };
  handelCheckFacilites = items => {
    this.setState({ Facilities: items });
  };

  handleSubmit(event) {
    event.preventDefault();

    axios
      .put(
        `https://find-hospital.herokuapp.com/api/hospitals/hospital/${
          this.props.match.params.id
        }`,
        this.state
      )
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
        alert(
          "Sorry! Server is not able to process this request at the moment."
        );
      });
    this.props.history.push("/");
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    if (this.state.Hospital_Name) {
      return (
        <form
          className={classes.container}
          noValidate
          autoComplete="off"
          onSubmit={this.handleSubmit}>
          <TextField
            id="outlined-full-width"
            label="Hospital Name"
            style={{ margin: 8 }}
            value={this.state.Hospital_Name}
            placeholder="e.g Apollo Hospital"
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
            onChange={this.handleChange("Hospital_Name")}
          />
          <TextField
            id="outlined-number"
            label="Longitude"
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
            variant="outlined"
            value={this.state.lat}
            onChange={this.handleChange("lat")}
          />
          <TextField
            id="outlined-number"
            label="Latitude"
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
            variant="outlined"
            value={this.state.lng}
            onChange={this.handleChange("lng")}
          />
          <TextField
            id="outlined-select-currency"
            select
            label="Type"
            className={classes.textField}
            value={this.state.Hospital_Category}
            onChange={this.handleChange("Hospital_Category")}
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
            helperText="e.g private or government"
            margin="normal"
            variant="outlined">
            {hospitaltype.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-currency"
            select
            label="Hospital Category"
            className={classes.textField}
            value={this.state.Hospital_Care_Type}
            onChange={this.handleChange("Hospital_Care_Type")}
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
            helperText="e.g superspecialist,clinic,Laboratories"
            margin="normal"
            variant="outlined">
            {currencies.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Dialogs
            type="Specilities"
            lists={specilities}
            check={this.state.Specialties}
            handelSp={this.handelCheckSpecialities}
          />
          <Dialogs
            type="Facilities"
            lists={facilities}
            check={this.state.Facilities}
            handelSp={this.handelCheckFacilites}
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Address"
            multiline
            rows="4"
            value={this.state.Location}
            onChange={this.handleChange("Location")}
            className={classes.textField}
            margin="normal"
            variant="outlined"
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
          />

          <TextField
            id="outlined-full-width"
            label="Discipline Systems of Medicine"
            style={{ margin: 8 }}
            placeholder="Availability of Medicine"
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
            value={this.state.Discipline_Systems_of_Medicine}
            onChange={this.handleChange("Discipline_Systems_of_Medicine")}
          />
          <TextField
            id="outlined-full-width"
            label="State"
            style={{ margin: 8 }}
            placeholder="Availability of Medicine"
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
            value={this.state.State}
            onChange={this.handleChange("State")}
          />
          <TextField
            id="outlined-full-width"
            label="District"
            style={{ margin: 8 }}
            placeholder="Availability of Medicine"
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
            value={this.state.District}
            onChange={this.handleChange("District")}
          />
          <TextField
            id="outlined-number"
            label="Pincode"
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
            variant="outlined"
            value={this.state.Pincode}
            onChange={this.handleChange("Pincode")}
          />
          <TextField
            id="outlined-number"
            label="TelePhone"
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
            variant="outlined"
            value={this.state.Telephone}
            onChange={this.handleChange("Telephone")}
          />
          <TextField
            id="outlined-full-width"
            label="Mobile Number"
            style={{ margin: 8 }}
            placeholder="Availability of Medicine"
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
            value={this.state.Mobile_Number}
            onChange={this.handleChange("Mobile_Number")}
          />
          <TextField
            id="outlined-full-width"
            label="Emergency Number"
            style={{ margin: 8 }}
            placeholder="Availability of Medicine"
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
            value={this.state.Emergency_Num}
            onChange={this.handleChange("Emergency_Num")}
          />
          <TextField
            id="outlined-full-width"
            label="Ambulance Phone No"
            style={{ margin: 8 }}
            placeholder="Availability of Medicine"
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
            value={this.state.Ambulance_Phone_No}
            onChange={this.handleChange("Ambulance_Phone_No")}
          />
          <TextField
            id="outlined-full-width"
            label="Bloodbank Phone No"
            style={{ margin: 8 }}
            placeholder="Availability of Medicine"
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
            value={this.state.Bloodbank_Phone_No}
            onChange={this.handleChange("Bloodbank_Phone_No")}
          />
          <TextField
            id="outlined-full-width"
            label="Hospital Fax Number"
            style={{ margin: 8 }}
            placeholder="Availability of Medicine"
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
            value={this.state.Hospital_Fax}
            onChange={this.handleChange("Hospital_Fax")}
          />
          <TextField
            id="outlined-email-input"
            label="Hospital Email"
            className={classes.textField}
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
            value={this.state.Hospital_Secondary_Email_Id}
            onChange={this.handleChange("Hospital_Secondary_Email_Id")}
          />

          <TextField
            id="outlined-full-width"
            label="Hospital Websites"
            style={{ margin: 8 }}
            placeholder="abc.com"
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">https://</InputAdornment>
              )
            }}
            value={this.state.Website}
            onChange={this.handleChange("Website")}
          />
          <TextField
            id="outlined-full-width"
            label="Miscellaneous Facilities"
            style={{ margin: 8 }}
            placeholder="Availability of Medicine"
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
            value={this.state.Miscellaneous_Facilities}
            onChange={this.handleChange("Miscellaneous_Facilities")}
          />
          <TextField
            id="outlined-number"
            label="Number_Doctor"
            value={this.state.age}
            onChange={this.handleChange("age")}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
            variant="outlined"
            value={this.state.Number_Doctor}
            onChange={this.handleChange("Number_Doctor")}
          />
          <TextField
            id="outlined-number"
            label="Num_Mediconsultant_or_Expert"
            onChange={this.handleChange("age")}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
            variant="outlined"
            value={this.state.Num_Mediconsultant_or_Expert}
            onChange={this.handleChange("Num_Mediconsultant_or_Expert")}
          />
          <TextField
            id="outlined-number"
            label="Total_Num_Beds"
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
            variant="outlined"
            value={this.state.Total_Num_Beds}
            onChange={this.handleChange("Total_Num_Beds")}
          />
          <TextField
            id="outlined-number"
            label="Number_Private_Wards"
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
            variant="outlined"
            value={this.state.Number_Private_Wards}
            onChange={this.handleChange("Number_Private_Wards")}
          />
          <TextField
            id="outlined-number"
            label="Number of Bed for Ecoconomically Weaker Sec"
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
            variant="outlined"
            fullWidth
            value={this.state.Num_Bed_for_Eco_Weaker_Sec}
            onChange={this.handleChange("Num_Bed_for_Eco_Weaker_Sec")}
          />
          <TextField
            id="outlined-full-width"
            label="Emergency_Service"
            style={{ margin: 8 }}
            placeholder="Availability of Medicine"
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
            value={this.state.Emergency_Service}
            onChange={this.handleChange("Emergency_Service")}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className={classes.button}>
            Submit
          </Button>
        </form>
      );
    }
    return <div>Loading</div>;
  }
}

export default withRouter(withStyles(styles)(OutlinedTextFields));
