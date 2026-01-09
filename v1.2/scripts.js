'use strict';




const $ = function(selector) {
	return document.querySelector(selector);
};




import { table, dateOfChange } from '../general.js';




$('.date-of-change').innerText = dateOfChange;

$('table').innerHTML = table;
