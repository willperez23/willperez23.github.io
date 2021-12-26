import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink, Link } from 'react-router-dom';
import './projects.scss';
import polaris from '../images/BetMateDevices.png';
import betMate from '../images/GreekNavDevices.png';
import greekNav from '../images/PolarisDevices.png';
import foster from '../images/FFFDevices.png';
import beepBoop from '../images/BeepBoopDevices.png';

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

  betmate = () => {
    // this.setState({ current: 0 });
    this.setState({ name: jsonFile[3].name });
    this.setState({ description: jsonFile[3].description });
    this.setState({ time: jsonFile[3].time });
    this.setState({ position: jsonFile[3].position });
    this.setState({ type: jsonFile[3].type });
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
    this.setState({ name: jsonFile[0].name });
    this.setState({ description: jsonFile[0].description });
    this.setState({ time: jsonFile[0].time });
    this.setState({ position: jsonFile[0].position });
    this.setState({ type: jsonFile[0].type });
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
        <div className="projectsLanding">
          <div>
            <div className="header">
              <h1> Projects</h1>
            </div>
            <div className="projectDetails">
              <h2>{this.state.name}</h2>
              <h3>{this.state.position}</h3>
              <div className="dateandtype">
                <span>{this.state.time}</span>
                <span className="bluetag"> {this.state.type}</span>
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
              <button className="dot" type="button" onClick={this.betmate}> </button>
              <button className="dot" type="button" onClick={this.greeknav}> </button>
              <button className="dot" type="button" onClick={this.fosterfeedfriends}> </button>
              <button className="dot" type="button" onClick={this.beepboop}> </button>
              <button className="dot" type="button" onClick={this.polaris}> </button>
            </div>
          </div>
          <div>
            {this.state.name === 'BetMate' ? <img src={betMate} alt="BetMate MockUp" width="700px" />
              : [this.state.name === 'GreekNav' ? <img src={greekNav} alt="GreekNav MockUp" width="700px" />
                : [this.state.name === 'Polaris' ? <img className="polarisImage" src={polaris} alt="Polaris MockUp" width="700px" />
                  : [this.state.name === 'BeepBoop' ? <img src={beepBoop} alt="BeepBoop MockUp" width="700px" />
                    : <img src={foster} alt="Foster Feed Friends MockUp" width="700px" />,
                  ],
                ],
              ]}
          </div>
        </div>
      );
    }
}
export default withRouter(connect(null, {})(Projects));
