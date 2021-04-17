// change require to es6 import style
// import $ from 'jquery';
// import './style.scss';

// let num = 0;

// setInterval(() => { $('#main').html(`Youve been on this page for ${num} seconds.`); num += 1; }, 1000);
// // const $ = require('jquery');

import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

const App = () => <div className="test">All the REACT are belong to us!</div>;

ReactDOM.render(<App />, document.getElementById('main'));
