import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import '../style.scss';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render = () => {
    return (
      <nav>
        <div className="Logo">William Pérez</div>
        <span id="links">
          <NavLink to="/" exact>Home</NavLink>
          <NavLink to="/mystory">My Story</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </span>
      </nav>
    );
  }
}

export default withRouter(connect(null, {})(NavBar));
