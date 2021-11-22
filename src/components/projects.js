import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink, Link } from 'react-router-dom';

import './projects.scss';

const jsonFile = require('./projects.json');

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // current: 0,
      name: jsonFile[0].name,
      description: jsonFile[0].description,
      time: jsonFile[0].time,
      position: jsonFile[0].position,
      type: jsonFile[0].type,

    };
  }

  // componentDidMount() {
  //   if (this.state.current === 4) {
  //     const newIntervalId = setInterval(() => {
  //       this.setState((prevState) => {
  //         return {
  //           ...prevState,
  //           count: 0,
  //         };
  //       });
  //     }, 1000);

  //     this.setState((prevState) => {
  //       return {
  //         ...prevState,
  //         intervalId: newIntervalId,
  //       };
  //     });
  //   } else {
  //     const newIntervalId = setInterval(() => {
  //       this.setState((prevState) => {
  //         return {
  //           ...prevState,
  //           count: prevState.count + 1,
  //         };
  //       });
  //     }, 1000);

  //     this.setState((prevState) => {
  //       return {
  //         ...prevState,
  //         intervalId: newIntervalId,
  //       };
  //     });
  //   }
  // }

  betmate = () => {
    // this.setState({ current: 0 });
    this.setState({ name: jsonFile[0].name });
    this.setState({ description: jsonFile[0].description });
    this.setState({ time: jsonFile[0].time });
    this.setState({ position: jsonFile[0].position });
    this.setState({ type: jsonFile[0].type });
  }

  beepboop = () => {
    // this.setState({ current: 2 });
    this.setState({ name: jsonFile[2].name });
    this.setState({ description: jsonFile[2].description });
    this.setState({ time: jsonFile[2].time });
    this.setState({ position: jsonFile[2].position });
    this.setState({ type: jsonFile[2].type });
  }

  polaris = () => {
    // this.setState({ current: 3 });
    this.setState({ name: jsonFile[3].name });
    this.setState({ description: jsonFile[3].description });
    this.setState({ time: jsonFile[3].time });
    this.setState({ position: jsonFile[3].position });
    this.setState({ type: jsonFile[3].type });
  }

  greeknav = () => {
    // this.setState({ current: 1 });
    this.setState({ name: jsonFile[1].name });
    this.setState({ description: jsonFile[1].description });
    this.setState({ time: jsonFile[1].time });
    this.setState({ position: jsonFile[1].position });
    this.setState({ type: jsonFile[1].type });
  }

  fosterfeedfriends = () => {
    // this.setState({ current: 1 });
    this.setState({ name: jsonFile[4].name });
    this.setState({ description: jsonFile[4].description });
    this.setState({ time: jsonFile[4].time });
    this.setState({ position: jsonFile[4].position });
    this.setState({ type: jsonFile[4].type });
  }

    render = () => {
      return (
        <div>
          <div className="header">
            <h1> Projects</h1>
          </div>
          <div className="projectDetails">
            <h2>{this.state.name}</h2>
            <h3>{this.state.position}</h3>
            <div className="dateandtype">
              <p>{this.state.time}</p>
              <p className="bluetag"> {this.state.type}</p>
            </div>

            <p>{this.state.description}</p>
            <div className="casestudybutton_container">
              {this.state.name === 'BetMate' ? <NavLink className="casestudybutton" to="casestudy/BetMate">Read the Case Study </NavLink>
                : [this.state.name === 'GreekNav' ? (<a className="casestudybutton" href="src/documents/GreekNavFinalDemo.apk" download> Download the apk</a>)
                  : [this.state.name === 'Polaris' ? <NavLink className="casestudybutton" to="casestudy/Polaris">Read the Case Study</NavLink>
                    : [this.state.name === 'BeepBoop' ? <NavLink className="casestudybutton" to="casestudy/BeepBoop">Read the Case Study</NavLink>
                      : <Link className="casestudybutton" to="casestudy/FosterFeedFriends">Visit Our Site</Link>,
                    ],
                  ],
                ]}
            </div>

          </div>

          <div className="dotContainer">
            <button className="dot" type="button" onClick={this.polaris}> </button>
            <button className="dot" type="button" onClick={this.beepboop}> </button>
            <button className="dot" type="button" onClick={this.greeknav}> </button>
            <button className="dot" type="button" onClick={this.betmate}> </button>
            <button className="dot" type="button" onClick={this.fosterfeedfriends}> </button>
          </div>
        </div>
      );
    }
}
export default withRouter(connect(null, {})(Projects));
