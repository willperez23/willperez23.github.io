// change require to es6 import style
import $ from 'jquery';
import './style.scss';

let num = 0;

setInterval(() => { $('#main').html(`Youve been on this page for ${num} seconds.`); num += 1; }, 1000);
// const $ = require('jquery');
