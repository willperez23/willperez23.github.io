import React from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import californiaVector from '../icons/californiaVector.svg';
import computerVector from '../icons/computerVector.svg';
import gradCapVector from '../icons/gradcapVector.svg';
import '../about.scss';

// class About extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
// // }
// const codingData = (props) => {
//   return (
//     <div>
//       <div>
//         <p>proficent</p>
//         <p>intermediate</p>
//         <p>advanced</p>
//       </div>
//       <div>
//         <p>python</p>
//         <div />
//       </div>
//       <div>
//         <p>react.js</p>
//         <div />
//       </div>
//       <div>
//         <p>java</p>
//         <div />
//       </div>

//     </div>
//   );
// };

const About = () => {
  return (

    <div>
      <div id="aboutFlex">
        <h1 className="secondaryText">Will at a glance...</h1>
        <div className="aboutInfoFlex">
          <div className="aboutInfoSectionFlex">
            <div className="aboutIcon">
              <img src={californiaVector} alt="california vector" />
            </div>
            <p className="paragraph">I am a Southern California native. I bounce between Orange County, and visiting family members in Northeast Los Angeles.</p>
          </div>

          <div className="aboutInfoSectionFlex">
            <div className="aboutIcon">
              <img src={computerVector} alt="california vector" />
            </div>
            <p className="paragraph">I am a sophmore at Dartmouth studying Computer Science modified with Human-Centered Design and Environmental Studies.</p>
          </div>

          <div className="aboutInfoSectionFlex">
            <div className="aboutIcon">
              <img src={gradCapVector} alt="california vector" />
            </div>
            <p className="paragraph"> As a queer first-generation student of color, I wish to bridge gaps in accessibilty of information for all through design and development.</p>
          </div>
        </div>
        <button className="greenButton resume" type="button">download my resume</button>
        <div className="socials landingFlexChild">
          <div className="circle"><a href="https://twitter.com/williamperez000?lang=en"><img src="https://img.icons8.com/metro/452/twitter.png" alt="twiter icon" width="25px" /></a></div>
          <div className="circle">
            <a href="https://twitter.com/williamperez000?lang=en">
              <img src="https://www.designbust.com/download/1026/png/email_icon_transparent_background512.png" alt="twiter icon" width="25px" />
            </a>
          </div>
          <div className="circle">
            <a href="https://www.linkedin.com/in/williamperez23/">
              <img src="http://simpleicon.com/wp-content/uploads/linkedin.svg" alt="linkedIn icon" width="25px" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;