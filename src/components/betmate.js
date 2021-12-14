import React from 'react';

const BetMate = () => {
  return (
    <div>
      <section>
        <div className="landing_conatiner">
          <div className="leftRowContainer">
            <div className="landing_sub_container_left rightMargin">
              <h1>BetMate</h1>
              <divider />
              <h3>Case Study </h3>

              <h4>Purpose:</h4>
              <p>
                With the rise of chess interest after Netflix’s The Queen’s
                Gambit, BetMate aims to capitalize on the chess interest
                through a chess specific betting platform, offering a new way of
                engaging with chess matches through betting on each move
                and outcomes of each match. The platform allows users to
                compete with other betters to earn virtual tokens!
              </p>

              <h4>Timeframe:</h4>
              <p>
                Approximately 8 Weeks
              </p>

              <h4>Team:</h4>
              <p>
                Archita Harathi - Designer  <br />
                William Perez - Designer <br />
                Wylie Kasai - Design Mentor <br />
              </p>

              <h4>Tags:</h4>
              <div className="tagRow">
                <p className="tag">Web</p>
                <p className="tag">Betting </p>
                <p className="tag">Chess</p>
                <p className="tag">Dark UI</p>
                <p className="tag">Neon</p>
              </div>
            </div>

          </div>
          <img src="../src/images/BetMate Device Fair.png" alt="BetMate Screens" width="" />
        </div>
      </section>
      <section className="projectContainer">
        <section className="contentContainer">
          <h2> Chess Betting Reimagined </h2>
          <p>BetMate aims to captialize on the refound interest in chess made within the last year.
            User’s are given virtual currency to place bets on chess games, either on specific moves or the overall
            outcome of the match, from our extensive database. This case study closely examines the user research
            required for users’ interaction with our mechanism, pool betting, and for the platform as
            well as my own personal growth through BetMate’s rebranding.
          </p>
        </section>
        <section className="contentContainer">
          <h2>Uncovering our Competitors </h2>
          <div className="leftRowContainer marginBtm">

            <p className="smallMargin">With a large market already in the field of chess when looking for competitiors we focused
              on <em>three main areas: chess, betting, and the intersection of the two.</em> Industry
              research allows us as designers to begin to understand the complexities of chess and betting.
              A key insight was that there were limited options for betting on chess tournaments.
            </p>

            <img className="smallMargin" src="../src/images/BetMate Competitors.png" alt="BetMate Competitor" width="300px" />
            <p>bwin was the closest competitor to BetMate. They had a variety of betting options; however it
              came at the cost of overwhelming the user. For new users, there was no betting explanation, and
              there were no live games, only scheduled games.
            </p>
          </div>
        </section>
        <section className="tri contentContainer">
          <div className="lefttrisection marginBtm">
            <div>
              <h2>User Interviews Key Insights</h2>
              <p>The candidates given for the user interviews were primarily <em>chess oriented</em>. Though we got a deeper
                understanding of the needs of chess players of all levels, our research fell a bit short when it came to fully
                understanding betting. However, our partners offered the team valuable insight into the overlapping world of
                chess betting. From user interviews we were able to narrow down our persona to the <em>intrigued amateur.</em>
                Though we were compelled to cater to a competitive and exeprienced autdience, since Betmate is an up and coming
                platform we wanted to <em>cater to as many audiences as possible.</em> This user would need more guidance as to how chess
                and betting overlap and a <em>simplified betting flow.</em> More experienced betters wanted more <em>flexibility</em> in their betting experience.
              </p>
            </div>
          </div>
          <div className="righttrisection">
            <img src="../src/images/BetMate Persona.png" alt="user persona" width="600px" />
            <br />
            <p className="caption">Our target user was developed after conducting 8 user interviews. </p>
          </div>
        </section>

        <section className="centeredText">
          <h1 className="marginBtm">“When playing chess you are living in a shared reality. The key to that reality is skill.”</h1>
          <img src="../src/images/BetMate User Journey.png" alt="joruney map" width="" />
          <br />
          <p>We mapped out the <em>user flow </em> for the BetMate platform, breaking down users’ thoughts and emotions throughout
            each step. I focused heavily on the <em>betting flow</em> for users during a chess game and ensuring an enjoyable
            <em>user experience.</em>
          </p>
        </section>

        <section className="contentContainer">
          <h2>Drawing it out</h2>

          <p>After inital user research, the design team moved forward with the design process with <em>Google’s Crazy 8’s process.</em>
            We entered with a creative freedom mentality. I used a thick pencil brush on my iPad in order to <em>avoid spending too much time on the finer details. </em>
            Afterwards, I went back to annotate the core functionality of each sketch. The Crazy 8’s process is fun and messy, allowing designers to focus solely on functionality,
            and I chose to focus on the in-game betting functionality. After <em>dot voting</em> as a team, we moved foward with the following crazy 8s:
          </p>
          <div className="centeredRowContiner">
            <img className="rightMargin" src="../src/images/BetMate Sketch I.png" alt="crazy 8 I" width="" />
            <img className="rightMargin" src="../src/images/BetMate Sketch II.png" alt=" crazy 8 II" width="" />
            <img src="../src/images/BetMate Sketch III.png" alt="crazy 8 II" width="" />
          </div>
          <br />
          <p className="marginBtm"> As we prepared to share with the rest of the DALI Lab, our team found ourselves stuck on betting functionality.
            Users were allowed to choose a betting amount; however,
            we were torn between offering <em>tokens</em> to respresent the betting amount, or a <em>slider.</em> We were also perplexed by the the challenge of <em>displaying the bets</em>
            allowed to the user.
          </p>
        </section>
        <section className="tri contentContainer">
          <div className="lefttrisection">
            <h2>Our Betting Mechanism </h2>
            <p>As we moved into greyscales, our design team had to sit down with the partners to understand the <em>betting mechanisms</em> that we would be implementing.
              Once understanding how <em>pool betting</em> would be incorporated into the platform, we decided as a team to display the possible betting options
              <em>ranked by popularity.</em> Another important point of the betting process was the <em>token v. slider</em>. After continous iterations, the team presented
              Iteration 1 & 2 to the designers of the DALI lab. Each betting flow was designed with the <em> time constraints</em> of quick chess moves
              as well as <em>user engagement and simplifying the complexities of betting</em> . After receiving feedback, we decided to iterate more and move forward with Iteration 3, a
              <em> combination of both with the token betting mechanisim and horizontal display of betting options </em> . This gamified the betting expereince for the user allowing for
              continuous interaction.
            </p>
          </div>
          <br />
          <div className="righttrisection">
            <div className="figmaContainer">
              <p>Overview of entire grayscales:</p>
              <br />
              <div className="centeredRowContiner">
                <div>
                  <img src="../src/images/BetMate GreyScales I.png" alt="BetMate GreyScales" width="" />
                  <p>Iteration 1: betting using tokens, centered layout of chesss and game betting</p>
                </div>
                <div>
                  <img src="../src/images/BetMate GreyScales II.png" alt="BetMate GreyScales" width="" />
                  <p>Iteration 2: betting using sliders, sectioned layout of chesss and game betting </p>
                </div>
              </div>
              <div className="figmaContainer">
                <br />
                <p>Betting Components:</p>
                <br />
                <div className="centeredRowContiner">
                  <div className="thinImageConatiner">
                    <img src="../src/images/BetMate Betting Mech I.png" alt="BetMate Betting Mechanism" width="200px" />
                    <br />
                    <br />
                    <p>Iteration 1: token betting. This method promoted the gamification of chess betting and targeted user interaction while displaying betting options in a vertical manner </p>
                  </div>
                  <div className="thinImageConatiner">
                    <img src="../src/images/BetMate Betting Mech II.png" alt="BetMate Betting Mechanism" width="200px" />
                    <br />
                    <p>Iteration 2: betting using sliders. This was a less gamified form of betting while still being intuitive with a horizontal display of move betting options</p>
                  </div>
                  <div className="thinImageConatiner">
                    <img src="../src/images/BetMate Betting Mech III.png" alt="BetMate Betting Mechanism" width="200px" />
                    <br />
                    <p>Iteration 3: (after design crit) combination of horizontal betting options display with token betting. Also adding the odds bar below all the betting areas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contentContainer">
          <h2>UX Key Insightss</h2>
          <p>Reflecting on the challenge of solidifying a solid UX for this chess betting project was an enormous feat as neither I nor my design partner and mentor had any chess
            or betting expereince.
            Though we struggled to understand the functionality of pool betting and house betting intitally, <em>the mulitple iterations</em> that followed clearly targeted the pain points of users
            (limited time, knowledge of
            chess notation and betting odds, and being overwhelmed) while emphasizing a delightful user expereince. Asking for help and clarifying any confusion through <em>detailed communcation</em>
            with our partners was vital. <em>Communication internally</em> between my design partner, mentor, and I was crucial as I was new to the designer role in the lab.
          </p>
        </section>
        <section className="contentContainer">
          <h2>Discover Color</h2>
          <p>After greyscales, our team moved forward to <em>refine</em> the screens through <em>high fidelity (hi-fi)</em> designs. We were initially set on staying on course with a
            <em> dark UI</em> , specifcially with colors that corresponded to the given <em>original logo (below)</em> , and gradients. We received feedback that the UI was very
            <em> monochrome</em>  giving a structured and data driven
            impression. We took that feedback and decided to explore color
            combinations to interact with a broader audience. After curating a mood board, we iterated multiple times to present various routes to take the plafrom.
            We created a <em>pastel iteration</em> with large background
            graphics and a <em> neon centered UI</em>. For both iterations we attempted to use emojis to cater to <em>various audiences</em> and use a <em>universal language</em>.
          </p>
          <br />
          <div className="centeredImages marginBtm">
            <div className="rightMargin">
              <img src="../src/images/BetMate Old Logo.png" alt="original logo" width="" />
              <br />
              <p> Original Logo from Partners</p>
              <br />
              <img src="../src/images/BetMate Initial Hi-Fi I.png" alt="initial hifi" width="" />
              <p>Initial Gradient Log-In</p>
            </div>
            <div className="thinImageConatiner">
              <img src="../src/images/BetMate Initial Hi-Fi II.png" alt="initial hifi" width="" />
              <br />
              <p className="caption">Initial Dashboard</p>
            </div>
            <div className="thinImageConatiner">
              <img src="../src/images/BetMate Initial Hi-Fi III.png" alt="initial hifi" width="" />
              <br />
              <p className="caption">Neon Iteration: Using bright neon gradients to make the most use of the dark UI</p>
            </div>
            <div className="thinImageConatiner">
              <img src="../src/images/BetMate Initial Hi-Fi IV.png" alt="initial hifi" width="" />
              <br />
              <p className="caption">Pastel Iteration: Using pastels and large graphics to engage our target audience</p>
            </div>
          </div>
          <p>After recieving feedback, we decided to move forward with the <em>neon and gradient</em> focused
            designs because it created a more <em>cohesive style</em> with the dark UI. The other pastel graphic
            designs distracted the user from the main chess betting content. When implementing the style
            throughout the <em> betting mechanism designs</em>, we were torn between the using the <em> money bag emoji v. a token vector</em>.
          </p>
        </section>
        <section className="contentContainer">
          <h2>
            User Testing
          </h2>
          <div className="leftRowContainer">
            <div>
              <p> Once all of the screens were designed and prototyped, user testing brought to light the need for
                consistency with emojis thus we moved forward with the money bag emoji as the betting currency,
                as shown below. User testing also brought forth a need to focus on typography and the finer detail like betting odds displays.
              </p>
            </div>
            <div className="contentContainer">
              <div className="leftRowContainer">
                <img className="smallMargin" src="../src/images/BetMate Screens I.png" alt="BetMate Screens" width="" />

                <img src="../src/images/BetMate Screens II.png" alt="BetMate Screens" width="" />
              </div>
              <br />
              <p className="caption">final implementation of neon gradients and betting currency </p>
            </div>
          </div>
        </section>
        <section className="contentContainer">
          <h2>UI Recap</h2>
          <p>As a designer, this project pushed my UI comfort zone. I felt comfortable and strong
            with the monochrome gradients, but after taking a step back to reflect on our <em>target auidence</em>,
            I found that the need for color to attract a broader audience was neccessary. One thing that helped me
            grow through this process was looking at how dark UI interacted with colors. With our team we gathered
            <em>inspiration</em> from current dark UI platforms and found a high number of neon gradrients among the designs.
            We realized that uniform <em>high brightness and saturation</em> gradients created a cohesiveness against the dark UI across screens.
          </p>
        </section>
      </section>
      <section className="figmaContainer">
        <h2>Check out the fully functional Figma prototype!</h2>
        <br />
        <iframe title="betmate prototype"
          width="800"
          height="450"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FkrxSy1SCHvKdubUXw4ZVES%2FBetMate-21X%3Fnode-id%3D1635%253A653"
          allowFullScreen
          className="marginBtm"
        />
      </section>

    </div>
  );
};
export default BetMate;
