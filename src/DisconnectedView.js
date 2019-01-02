import {Util} from "./Util";

export const DisconnectedView = function(element, trello, options) {
	// Ensure empty
	element.innerHTML = '';

	let div = document.createElement('div');
	element.appendChild(div);
	Util.addClass(div, 'trello-sprinter');

	let p = document.createElement('p');
	div.appendChild(p);
	Util.addClass(p, 'center');

	let button = document.createElement('button');
	p.appendChild(button);
	button.innerText = 'Connect to Trello';
	button.addEventListener('click', (event) => {
		event.preventDefault();
		trello.authorize();
	})
}