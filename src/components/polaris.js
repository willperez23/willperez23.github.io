import React from 'react';
import './general_project.scss';

const polaris = () => {
  return (
    <div>
      <section>
        <div className="landing_conatiner">
          <div className="leftRowContainer">
            <div className="landing_sub_container_left rightMargin">
              <h1>Polaris</h1>
              <divider />
              <h3>Case Study </h3>
              <h4>Purpose:</h4>
              <p>
                As the final project for COSC 25.01 at Dartmouth, tackling the
                mental health topic. In the age of Zoom, college students have
                placed a pause on their mental health. Polaris aims to provide
                incentive to acheive personal goals, motivational quotes, as
                well as a journaling self-reflection component.
              </p>

              <h4>Timeframe:</h4>
              <p>
                Approximately 2 Weeks
              </p>

              <h4>Team:</h4>
              <p>
                Maia Ward - Designer <br />
                William Perez - Designer <br />
                Carson Levine  - Design Mentor <br />
                Kim Mamers - Design Industry Mentor <br />
              </p>

              <h4>Tags:</h4>
              <div className="tagRow">
                <p className="tag"> Mobile </p>
                <p className="tag"> Light UI </p>
                <p className="tag"> Mental Health </p>
                <p className="tag"> Journal </p>
                <p className="tag"> Challenges </p>
              </div>
            </div>
          </div>
          <img src="../src/images/PolarisDevicesFlair.png" alt="Polaris Devices" />
        </div>
      </section>
      <section className="projectContainer">
        <section className="contentContainer">
          <h2>Mental Health as a Priority </h2>
          <p>
            According to a 2018 report, more teens were <em>struggling with their mental health</em>, and especially with current events impacting everybody in different ways, tools to help
            overwhelmed and stressed out students find time to <em>focus on themselves and their mental wellness</em> is more important than ever. One group we identified that could benefit from a new
            <em>mindful, reflective habit</em> is teenagers, particularly <em>high school and college students.</em> We aimed to target the
            <em>tediousness, scheduling, and unknown starting point for our audience.</em> This case study takes a closer look at the journaling and challenges functionality.
          </p>
        </section>
        <section className="contentContainer">
          <h2>Searching for Insight </h2>
          <p> After several brainstorming sessions, we narrowed it down to a <em>mobile app</em>, the most <em>convenient</em> and <em>accessible</em> option.
            Four ideas that initially stood out to us were <em>journaling, music, resources, and mindful habit challenges,</em> which would help users make new,
            mindful habits a part of their routines.  Through <em>user interviews</em>, we were able to understand how <em>different users dealt with stress</em>.
            A <em>journaling</em> feature would conform to most <em>users’ needs for self-reflection;</em> whether that is writing down
            thoughts, doodling, or inserting images. After reflecting on the use of resources, we decided to focus more on incentivizing users through challenges which would
            encourage users to develop mindful habits. After synthesizing all of the data from user interviews and industry research, we identified our guiding how might we question.
          </p>
        </section>
        <section className="centeredText">
          <h2> How might we promote mindful habits through self-reflection?</h2>
        </section>
        <section className="centeredRowContiner marginBtm">
          <div>
            <img src="../src/images/PolarisPersona.png" alt="persona" width="700px" />
          </div>
          <div>
            <div className="centeredColumnContainer">
              <div className="centeredImages ">
                <img src="../src/images/MindMapI.png" alt="sketch" width="250px" />
                <img src="../src/images/MindMapII.png" alt="sketch" width="250px" />
              </div>
              <p>mind mapping exercise in which we identified the purpose and sentiments we wanted to be associated with our app using the dot voting method</p>
            </div>
          </div>

        </section>
        <section className="contentContainer">
          <div className="leftRowContainer marginBtm">
            <div className="leftText">
              <h2>Transitioning our thoughts to sketches</h2>
              <p>Our sketches broke down each of the core functionalities of our
                app.  We used the Crazy 8 sketching process to bring our ideas
                to life. This method emphasizes creative freedom, while placing
                a time limit on it. It allowed me and my team to get all of our
                ideas on paper and ready for revision, while staying true to our
                initial goals found in the mind mapping stage of the design
                process. The digital journaling method allows for image uploads
                if users wished to physically write out their thoughts. Additionally,
                our voice to text feature would lessen the physical restriction of
                viewing a screen and typing. In order to cater to pain points
                regarding inspiration, I added a suggestions button to aid in the
                self reflection process. The challenges sketches created a basic
                breakdown of the screen with the ability to view the various challeges
                and add more. There are star progress symbols that tie into our nature theme.
              </p>
            </div>

            <img src="../src/images/Polaris Sketches.png" alt="Polaris Crazy 8 Sketches" />
          </div>

        </section>
        <section className="contentContainer">
          <h2> Inducing calmness and security </h2>
          <p>
            As we progressed to greyscales, we found the concept of nature to be central in our project, ensuring
            that users were always in a calm and safe environrment. The digital creation of this reality was crucial
            to the user experience. This reality carried over to the journaling feature. We offered users many tools
            that they would use with a physical journal with the goal of emphasizing the convenience and ease of using
            them to our audience. No UI decisions were made through the greyscaling portion of the design process;
            however, it was considered and our greyscales reflect the possiblity of a darker UI. Our low-fidelidty screens
            were re-imaginged after speaking to our Design Mentor Carson Levine and Kim Maymers. We began to make stars
            a central focus of our app acting as a guiding force throughout a user’s self reflection journey.
          </p>
          <div className="greyscales">

            <img src="../src/images/Polaris GreyScales I.png" alt="Polaris Greyscales" />

            <img src="../src/images/Polaris GreyScales II.png" alt="Polaris Greyscales" />

            <img src="../src/images/Polaris GreyScales I.png" alt="Polaris Greyscales" />

          </div>
        </section>
        <section className="contentContainer">
          <h2>Taking a step back, and creating our style guide</h2>
          <div className="leftRowContainer marginBtm">
            <div className="rightMargin">
              <p className="marginBtm">
                Our designs were clean and stayed true to our initial intention. Perhaps a bit too much, as we spread our design abilities
                across mulitiple features, rather than focusing on the core components of our platform. In a way we overdesigned; we realized
                for this app simplicity does more for our user. We scaled down and directed our attention to the challenges and journaling
                functionalities. Our high fidelity screens incorporated color, as we drifted away from our initial thoughts for dark UI, to a
                pastel color palette. The light colors tied in with the visual and graphical focus on nature and delivered the calmness we targeted
                from the beginning. The typography for our app used the sans serif font, Montserrat, throughout the entire platform for consistency.
                We varied the boldness and italics to create a distinction amongst the singular font. Our navigation shifted to a scroll nagivation.
                In the sky you would see the stars that guide you through your challenges, and as you dove into the pond, the water would bring clarity when you opened your journal.
              </p>
              <img src="../src/images/Polaris Style Guide.png" alt="Polaris Style Guide" />

            </div>
            <div>
              <img src="../src/images/PolarisLandingPage.png" alt="Polaris Landing Page" />
              <p>Our landing screen is the navigation screen, and can be reached through a vertical scroll.</p>
            </div>

          </div>
        </section>
        <section className="contentContainer">
          <h2>User Testing uncovers new insights</h2>
          <div className="leftRowContainer">
            <div className="lefttrisection rightMargin">
              <p>The high fidelity screens were finalized after we solidified our style guide. After prototyping our project on Figma, we began user testing with individuals that
                fit our target audience.  We each conducted four user tests, getting feedback from a total of eight users. After restructuring our designs, we received necessary
                feedback about our prototype. There were issues with the journaling mechanism; however, the concept of journaling was well recieved by our testing group. User testing
                also revealed that emojis were preferred over the images because there was too much ambiguitiy on their mood expression. In the challenges section, we decided to add
                incentives for users by providing them a reward of a constellation after completing their challenge. We also chose the 21 days for a challenge, thinking it was an
                adequate amount of time for users to be consistent in their own goals. There was a suggestion to provide challege suggestions in addition to the journaling suggestions.
              </p>
            </div>
            <div className="spaceBetween ">
              <div className="polarisScreens">
                <img src="../src/images/Polaris Screen I.png" alt="Polaris Screen I" />
                <p>emoji recap of the month in their journal </p>
              </div>
              <div className="polarisScreens">
                <img src="../src/images/Polaris Screen II.png" alt="Polaris Screen II" />
                <p>progress tracker of challenges, stars central to the display of progress</p>
              </div>
              <div className="polarisScreens">
                <img src="../src/images/Polaris Screen III.png" alt="Polaris Screen III" />
                <p>journal with color tries to replicate an actual journal while also  offering more features</p>
              </div>

            </div>
          </div>
        </section>
        <section className="centeredText">

          <h2>“The home screen visuals induced calmness and set the mood for the rest of the app experience.”</h2>

        </section>

        <section className="contentContainer marginBtm">
          <h2>Our star app’s future </h2>
          <p>Polaris will continue to guide. The ulitmate goal would be to have users using the app daily and encouraging users towards self-improvement
            in a safe, supportive space. This is an app we would like to see people using to document moments from their day: good, bad, and in between,
            and to look back on how much they’ve grown through adopting mindful habits. Our main goals for the future would be:
          </p>
          <br />
          <p>1.  Increase engagement
            The goal would be to have users using the app daily encouraging users towards self-improvement in a safe, supportive space. This is an app we
            would like to see people using to document moments from their day: the good, the bad, and in between, and to look back on how much they’ve grown
            through adopting mindful habits.
          </p>
          <br />
          <p>
            2. Increase Personalization
            Many users were excited to use the app, yet were worried about forgetting and losing sight of their goals. As a solution, our team wanted to
            emphasize a strong and effective notification system that would be tailored to the users’ needs. Our app is here to guide users and assist them through their own journey.
          </p>
          <br />
          <p>
            3. Attention to Accessibility needs
            We want everybody to feel comfortable and confident using this digital journal daily, creating moments for reflection, mindfulness, and growth. We want to ensure that all
            of our users’ needs are addressed and that means going back to the small details and refining the voice to text option, the challenges options, and other seemingly minor fixes.
          </p>
        </section>
        <section className="figmaContainer">
          <h3>Check out the fully functional Figma prototype!</h3>
          <br />
          <iframe
            title="Polaris"
            width="800"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FEpYyKBNxotTnijSu7Xdvc9%2FFinal-Project---Team-11-Maia-%2526-William%3Fnode-id%3D631%253A0"
            allowFullScreen
            className="marginBtm"
          />
        </section>
      </section>
    </div>
  );
};
export default polaris;
