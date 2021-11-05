import React from 'react';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';
import Landing from './landing';
import About from './about';
import Projects from './projects';
import beepboop from './beepboop';
import BetMate from './betmate';
import Polaris from './polaris';
import '../style.scss';

const FallBack = (props) => {
  return <div>OOPS 404 Error! Seems like we can not find that page!</div>;
};
const Nav = (props) => {
  return (
    <nav>
      <div className="Logo">William Pérez</div>
      <span id="links">
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </span>
    </nav>
  );
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/casestudy/beepboop" component={beepboop} />
          <Route path="/casestudy/BetMate" component={BetMate} />
          {/* https://stackoverflow.com/questions/42914666/react-router-external-link */}
          <Route path="/casestudy/FosterFeedFriends"
            component={() => {
              window.location.href = 'https://fosterfeedfriends.netlify.app';
              return null;
            }}
          />
          <Route path="/casestudy/Polaris" component={Polaris} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
