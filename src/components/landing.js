import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render = () => {
    return (
      <div id="landingFlex">
        <div id="homeText" className="landingFlexChild">
          <h1 className="titleText">Hello! I&apos;m <br /> William Pérez!</h1>
        </div>
        <h2 className="secondaryText">

          <Typewriter
            options={{
              strings: ['UI/UX Designer', 'Full Stack Web Developer', 'Front End Mobile Developer'],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>

        <p className="paragraph landingFlexChild">Designing, Developing, Innovating.
          <br />From idea, to Figma, and then to code.
          <br />Currently looking for internship opportunities for Winter and Summer of 2022.
        </p>
        <div className="landingFlexChild">
          <button className="greenButton " type="button"> My Story</button>
        </div>
        <div className="socials landingFlexChild">
          <div className="circle">
            <a href="https://twitter.com/williamperez000?lang=en">
              <img src="https://img.icons8.com/metro/452/twitter.png" alt="twiter icon" width="25px" />
            </a>
          </div>
          <div className="circle">
            <a href="mailto:william.23@dartmouth.edu">
              <img src="https://www.designbust.com/download/1026/png/email_icon_transparent_background512.png" alt="email icon" width="25px" />
            </a>
          </div>
          <div className="circle">
            <a href="https://www.linkedin.com/in/williamperez23/">
              <img src="http://simpleicon.com/wp-content/uploads/linkedin.svg" alt="linkedIn icon" width="25px" />
            </a>
          </div>
        </div>
        <div />
        <div>
          <h5>*This website was coded entirely by me :))</h5>
        </div>

      </div>
    );
  }
}

export default withRouter(connect(null, {})(Landing));
