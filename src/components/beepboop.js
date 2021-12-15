import React from 'react';
import beepBoopDevice from '../images/BeepBoopDevicesFlair.png';
import beepBoopMindMap from '../images/BeepBoop MindMap.png';
import beepBoopPersona from '../images/BeepBoop Persona.png';
import beepBoopSketchI from '../images/BeepBoop Sketches I.png';
import beepBoopSketchII from '../images/BeepBoop Sketches II.png';
import beepBoopGreyscalesI from '../images/BeepBoop GreyScales I.png';
import beepBoopGreyscalesII from '../images/BeepBoop GreyScales II.png';
import beepBoopGreyscalesIII from '../images/BeepBoop GreyScales III.png';
import beepBoopGreyscalesIV from '../images/BeepBoop Screens IV.png';
import beepBoopStyle from '../images/BeepBoop Style.png';
import beepBoopScreensI from '../images/BeepBoop Screens I.png';
import beepBoopScreensII from '../images/BeepBoop Screens II.png';
import beepBoopScreensIII from '../images/BeepBoop Screens III.png';

const divider = () => {
  <div className="Bar" />;
};

const beepboop = () => {
  return (
    <div>
      <section>
        <div className="landing_conatiner">
          <div className="leftRowContainer">
            <div className="landing_sub_container_left rightMargin">
              <h1>BeepBoop.us</h1>
              <divider />
              <h3>Case Study </h3>

              <h4>Purpose:</h4>
              <p>
                As a language learning platform, BeepBoop
                relies heavily on the teacher to student
                interaction. Beepboop is in the process of
                creating their MVP web/mobile platform for
                their students and instructors, easing the
                teaching process and consolidating all of
                BeepBoop’s user data.
              </p>

              <h4>Timeframe:</h4>
              <p>
                Approximately 10 Weeks
              </p>

              <h4>Team:</h4>
              <p>
                Salvatore Lupo - Designer <br />
                William Perez - Designer <br />
                Melissa Valencia - Designer <br />
                Devon Saliga - Company CEO <br />
              </p>

              <h4>Tags:</h4>
              <div className="tagRow">
                <p className="tag"> Mobile</p>
                <p className="tag"> Light UI</p>
                <p className="tag"> Spanish</p>
                <p className="tag"> Language Learning</p>
                <p className="tag"> Startup </p>
              </div>
            </div>
          </div>
          <img src={beepBoopDevice} alt="BeepBoop MockUps" />
        </div>
      </section>
      <section className="projectContainer">
        <section className="contentContainer">
          <h2> Understanding the Product </h2>
          <bar />
          <p> BeepBoop is a language learning start-up that was in it’s early stages when I joined their team.
            After our first meeting, we identified a clear end goal: a fully functioning mobile prototype for
            the BeepBoop platform, addressing both instructor and BeepBoop consumer needs. BeepBoop draws on
            the Rassias method, which was founded at Dartmouth College, to help their users practice and exercise
            their Spanish skills. As a design team, our initial user research began with the design team attending
            sessions where we were taught how to create drills and attending drills as students. We conducted user
            interviews with current drill instructors, analyzing their experience teaching through Zoom and using
            BeepBoop materials. I drew on my experience transitioning from an in-person to a virtual drill instructor
            at Dartmouth to fill in any gaps in my understanding of the product. The design process was also conducted
            in Spanish as the drill instructors’ native lanugage was Spanish, which threw an interesting twist on the
            design challenge.
          </p>
        </section>
        <section className="contentContainer">
          <h2> Talking to the Instructors</h2>
          <bar />
          <p className="marginBtm"> After conducting initial user research, the team <em>synthesized</em> all of the <em>collected data</em>. We began with a <em>mind map</em>,
            condensing the <em>core emotions and functionalities</em> that the CEO wanted. Then we narrowed in on our guiding how might
            we question which would guide our entire design process, highlighting the focus on establishing the main features.
            We interviewed five of the current drill instructors to fully understand their pain points as we began our initial
            design process.
          </p>
          <div className="leftRowContainer">
            <div className="projectContainer">
              <img src={beepBoopMindMap} alt="beep boop mind map" />
              <h2 className="caption">HMW create a simple user flow to solidify our main features while also encouraging engagement?</h2>
            </div>
            <img src={beepBoopPersona} alt="persona" width="" height="" />
          </div>
        </section>
        <section className="contentContainer">
          <h2>Ideating through sketches</h2>
          <bar />
          <p className="marginBtm"> The team moved forward with our sketches using the <em>Crazy 8 sketching method.</em> The each member of the design team
            sketched eight screens, depicting the main features: a <em>profile</em>, a <em>live drill plaform</em>, a <em>drill catalog</em>,
            and a <em>dashboard</em> with the instructor’s drill information. I designed from the <em>teacher’s perspective</em>, ensuring
            that their <em>pain points regarding drill issues, and feedback</em> were addressed and easened. We discussed as a team and used
            the dot voting method to identify the screens that we wanted. Our how might we was always kept in mind as we narrowed down the
            designs that exemplified BeepBoop’s main features, while also incorporating as much <em>virality for the future growth of the company</em>.
          </p>
          <div className="centeredImages">
            <img className="rightMargin" src={beepBoopSketchI} alt="crazy 8 sketches" width="" height="" />
            <img src={beepBoopSketchII} alt="crazy 8 sketches" width="" height="" />
          </div>
        </section>
        <section className="contentContainer">
          <h2> Laying a foundation</h2>
          <bar />
          <p className="marginBtm"> Bringing the sketches to life began with greyscales. We <em>initially</em> thought that the <em>rofile</em> would just be an <em>overlay</em>,
            leaving only three main navigation features on the nav bar. I tried to <em>deviate</em> from the traditional nav bar with different shapes to bring
            playfulness into the platform, feeding off of the direction from the CEO and mascot, the Quokka. As a team we tried to keep a rounded look for the
            buttons and the all of the clickable features, and used overlays for the <em>convenience</em> of target users (ie, revisions overlays for instructors,
            and profile overlays for all users). The greyscales gave the team a strong direction as to where the plaform was headed. I took the lead on user interaction with the teacher platform.
          </p>
          <div className="centeredRowContiner marginBtm">
            <div className="polarisScreens">
              <img src={beepBoopGreyscalesI} alt="crazy 8 sketches" width="" height="" />
              <p className="caption">The profile overlay with options of edit login information, profile picture, and notification changes </p>
            </div>
            <div className="polarisScreens">
              <img src={beepBoopGreyscalesII} alt="crazy 8 sketches" width="" height="" />
              <p className="caption">The course catalog is avaliable here for the instructors to prep before their lesson or explore new lessons </p>
            </div>
            <div className="polarisScreens">
              <img src={beepBoopGreyscalesIII} alt="crazy 8 sketches" width="" height="" />
              <p className="caption">The general dashboard shows their lessons for the week and instructors can look at previous drill lessons </p>
            </div>
            <div className="polarisScreens noMargin">
              <img src={beepBoopGreyscalesIV} alt="crazy 8 sketches" width="" height="" />
              <p className="caption">The review overlay offers instructors a view into student feedback and points of improvement</p>
            </div>
          </div>
        </section>
        <section className="contentContainer">
          <h2>Iterating into our high-fidelity screens</h2>
          <bar />
          <p> The unconventional shapes throughout the platform was my <em>first attempt at exploring new means of navigation</em> and user experience.
            However, when it come to profiles and displaying important user information, <em>user testing revealed that users preferred a traditional means of navigation</em>
            and user interaction. I also began to explore other general profile navigations and discovered <em> neomorphism</em>. When applying it to BeepBoop’s profile navigation,
            it gave the plaform a more <em>professional and sleek look</em>. It created a distinction between sections and an <em>emphasis on the main body</em> of the landing page.
            The profile page was populated with more information collected during the onboarding process to share with BeepBoop students. The revisions page adopted the neomorphism
            from the landing page as well. Throughout the entire platform we <em>incorporated the style guide that was created by the marketing team</em>, and matched the BeepBoop logo.
            Reflecting on this project, I can notice a large sense of <em>monochromatic screens</em>, which could have <em>benefited from a secondary color</em>, aside from the company’s
            orange and blue.
          </p>
          <div className="centeredImages marginBtm">
            <img src={beepBoopStyle} alt="colors" width="" height="" />
          </div>
          <div className="centeredRowContiner">
            <div className="polarisScreens">
              <img src={beepBoopScreensI} alt="high-fi I" width="" height="" />
              <p className="caption">landing home page with the neomorphism components and BeepBoop color palete </p>
            </div>
            <div className="polarisScreens">
              <img src={beepBoopScreensII} alt="high-fi II" width="" height="" />
              <p className="caption">profile page using the BeepBoop colors on components </p>
            </div>
            <div className="polarisScreens noMargin">
              <img src={beepBoopScreensIII} alt="high-fi III" width="" height="" />
              <p className="caption">reviews overlay with neomorphism components and BeepBoop color palette </p>
            </div>
          </div>
        </section>
        <section className="contentContainer">
          <h2> Instructors inspiring designers </h2>
          <bar />
          <p>We finalized the hi-fi screens and created a well routed prototype. Figma’s prototype feature allowed for a streamlined
            user testing experience. BeepBoop instructors reassured the design team that their pain points were addressed. They were
            appreciative of the smaller features such as the pay information displayed on the home screen, as well as the title of the
            class they are teaching with a link to the material. I was overwhelmed with the compassion and thankfulness that these
            instructors expressed when going through the finalized prototype. As a designer, I am continously reminded why the work
            we do matters and how much of an impact UI/UX design can have on people.
          </p>
        </section>
      </section>
      <section className="figmaContainer">

        <h2> Check out the fully functional Figma protype!</h2>

        <iframe
          title="beepboop figma"
          width="800"
          height="450"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FPKaq52Q7MQch6vxgSkdC36%2FBeepboop-Copy%3Fnode-id%3D560%253A0"
          allowFullScreen
          className="marginBtm"
        />

      </section>

    </div>
  );
};
export default beepboop;
