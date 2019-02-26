import React from "react";
import Map from "./map";
import "./leaflet.css";
import SearchBar from "./searchBar";
import Typist from "react-typist";

import Fade from '@material-ui/core/Fade';


export default class App extends React.Component {
 
   constructor() {
    super();
    this.state = { time: {}, seconds: 11 };
    this.timer = 0;

    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
    
    // Check if we're at zero.
    if (seconds == 0) { 
      clearInterval(this.timer);
    }
  }
  
  render() {
    if(this.state.time.s<1)
    return (
      <div>
        <SearchBar />
        <Map type="true" />
      </div>
    );

    return <Text />;
  }
}

var sectionStyle = {
  width: "100%",
  height: `${window.innerheight}`,
  backgroundImage: `url(https://images.unsplash.com/photo-1512069511692-b82d787265cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)`
};

var textStyle={
  Title:{
  fontSize:'30px',
  color:'white'},
  middle:{
    color:'silver',
    fontSize:'18px',
  }
  ,Last:{
    color:'#eaecf0'
  }
}

class Text extends React.Component {
  render() {
    return (
      <div style={ sectionStyle }>
      
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
        <Typist>
          <span style={textStyle.Title} className="my-custom-class">WelCome to HospEazy</span>
          <br />
          <div className="container">
            <p style={textStyle.middle}>You can Find by Hospital Name, Specialized Doctor,Facilities,Medicine/Blood Availabilities and much more</p>
          </div>
          <div style={textStyle.Last}>Your Home For Hospital...</div>
        </Typist>
      </div>
      </div>
    );
  }
}
