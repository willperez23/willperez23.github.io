import React, { useState } from 'react';
import californiaVector from '../icons/californiaVector.svg';
import computerVector from '../icons/computerVector.svg';
import gradCapVector from '../icons/gradcapVector.svg';
import '../about.scss';

const interestJSON = require('./interest.json');
const designJSON = require('./software.json');
const languagesJSON = require('./languages.json');

const About = () => {
  const [code, setCode] = useState(true);
  const [design, setDesign] = useState(true);
  const [interest, setInterest] = useState(interestJSON[0].context);
  const [designContext, setDesignContext] = useState(designJSON[0].context);
  const [languages, setLanguages] = useState(languagesJSON[0].context);
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
        <a href="src/documents/21F Resume.pdf" download><button className="greenButton resume" type="button">download my resume</button></a>
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

      </div>
      <section>
        <div className="metricsContainer">
          <div className="metricsColumn">
            <div>
              <h2>Coding Langugages</h2>
              <p>toggle between the two metrics
              </p>
              <div className="">
                <button className="greenButton" type="button" onClick={() => setCode(true)}>confidence</button>
                <button className="blackButton" type="button" onClick={() => setCode(false)}>lines coded</button>
              </div>
              {code ? (
                <div>
                  <div>
                    <div className="metricsRow">
                      <p> proficent</p>
                      <p> intermediate</p>
                      <p> advanced</p>
                    </div>
                    <div>
                      <div aria-hidden="true" onClick={() => setLanguages(languagesJSON[1].context)}>
                        <p>react</p>
                        <div />
                      </div>
                      <div aria-hidden="true" onClick={() => setLanguages(languagesJSON[2].context)}>
                        <p>python</p>
                        <div />
                      </div>
                      <div aria-hidden="true" onClick={() => setLanguages(languagesJSON[3].context)}>
                        <p>java</p>
                        <div />
                      </div>
                      <div aria-hidden="true" onClick={() => setLanguages(languagesJSON[4].context)}>
                        <p>xml</p>
                        <div />
                      </div>
                    </div>
                  </div>
                  <div>
                    {languages}
                  </div>
                </div>

              ) : (
                <div>
                  <div>
                    <div className="metricsRow">
                      <p> 10,000</p>
                      <p> 20,000</p>
                      <p> 40,00</p>
                    </div>
                    <div>
                      <div aria-hidden="true" onClick={() => setLanguages(languagesJSON[1].context)}>
                        <p>react</p>
                        <div />
                      </div>
                      <div aria-hidden="true" onClick={() => setLanguages(languagesJSON[2].context)}>
                        <p>java</p>
                        <div />
                      </div>
                      <div aria-hidden="true" onClick={() => setLanguages(languagesJSON[3].context)}>
                        <p>python</p>
                        <div />
                      </div>
                      <div aria-hidden="true" onClick={() => setLanguages(languagesJSON[4].context)}>
                        <p>xml</p>
                        <div />
                      </div>
                    </div>
                  </div>
                  <div>
                    {languages}
                  </div>
                </div>
              )}
            </div>
            <div>

              <h2>Design Software</h2>
              <p>toggle between the two metrics
              </p>
              <div className="">
                <button className="greenButton" type="button" onClick={() => setDesign(true)}>confidence</button>
                <button className="blackButton" type="button" onClick={() => setDesign(false)}>projects</button>
              </div>
              {design ? (
                <div>
                  <div>
                    <div className="metricsRow">
                      <p> proficent</p>
                      <p> intermediate</p>
                      <p> advanced</p>
                    </div>
                    <div>
                      <div aria-hidden="true" onClick={() => setDesignContext(designJSON[1].context)}>
                        <p>figma</p>
                        <div />
                      </div>
                      <div aria-hidden="true" onClick={() => setDesignContext(designJSON[2].context)}>
                        <p>AdobeXD</p>
                        <div />
                      </div>
                    </div>
                  </div>
                  <div>
                    {designContext}
                  </div>
                </div>

              ) : (
                <div>
                  <div>
                    <div className="metricsRow">
                      <p> {'<'}5</p>
                      <p> 10</p>
                    </div>
                    <div>
                      <div aria-hidden="true" onClick={() => setDesignContext(designJSON[1].context)}>
                        <p>figma</p>
                        <div />
                      </div>
                      <div aria-hidden="true" onClick={() => setDesignContext(designJSON[2].context)}>
                        <p>AdobeXD</p>
                        <div />
                      </div>
                    </div>
                  </div>
                  <div>
                    {designContext}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="metricsColumn centeredText">
            <div className="">
              <h2> my interest </h2>
              <p> click on each icon to learn more about my personal interests</p>
              <div>
                <div className="metricsRow">
                  <div aria-hidden="true" onClick={() => setInterest(interestJSON[1].context)}>
                    <img alt="" />
                    <p>aquatics</p>
                  </div>
                  <div aria-hidden="true" onClick={() => setInterest(interestJSON[2].context)}>
                    <img alt="" />
                    <p>queer novels</p>
                  </div>
                  <div aria-hidden="true" onClick={() => setInterest(interestJSON[3].context)}>
                    <img alt="" />
                    <p>political ecology</p>
                  </div>
                  <div aria-hidden="true" onClick={() => setInterest(interestJSON[4].context)}>
                    <img alt="" />
                    <p>astrology</p>
                  </div>
                </div>
              </div>
              <div>
                {interest}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
