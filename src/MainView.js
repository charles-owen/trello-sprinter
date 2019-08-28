import {Util} from "./Util";
import {Board} from './Board';
import {BoardView} from './BoardView';
import {SprintView} from "./Sprints/SprintView";
import {SprintTableView} from './Sprints/SprintTableView';
import {DisconnectedView} from "./DisconnectedView";

export const MainView = function(element, trello, options) {
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
	button.innerText = 'Disconnect';
	button.addEventListener('click', (event) => {
		event.preventDefault();
		trello.disconnect();

		new DisconnectedView(element, trello, options);
	})


	let pStatus = Util.createElement('p', 'trello-status');
	pStatus.innerText = 'Connecting to Trello...';
	div.appendChild(pStatus);

	let pMsg = Util.createElement('p', 'trello-msg');
	div.appendChild(pMsg);

	Board.fetch(trello, options.board, options, pMsg, (board) => {
		// Success
		pStatus.innerText = 'Trello Board: ' + board.name;
		pMsg.parentNode.removeChild(pMsg);

		for(let view in options.views) {
			switch(view) {
				case 'board':
					let v = new BoardView(div, board);
					v.present();
					break;

				case 'sprint':
					v = new SprintView(div, board, options.views.sprint);
					v.present();
					break;

				case 'sprintTable':
					v = new SprintTableView(div, board, options.views.sprintTable);
					v.present();
					break;
			}
		}
	}, (msg) => {
		// Failure
		pMsg.parentNode.removeChild(pMsg);
		pStatus.innerText = msg;
	});

	//trello.fetch();

}