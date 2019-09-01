import {options} from './options';
import {Util} from './Util';
import {DisconnectedView} from "./DisconnectedView";
import {MainView} from './MainView';
import {TrelloConnect} from 'trello-connect';

export const TrelloSprinter = function(userOptions) {
	// Default and supplied options
	const opts = Util.merge(options, userOptions);

	const trello = new TrelloConnect(opts);

	Util.ready(() => {
		let elements;
		if(opts.sel.nodeType) {
			elements = [opts.sel];
		} else {
			elements = document.querySelectorAll(opts.sel);
		}

		for(let i=0; i<elements.length; i++) {
			switch(trello.state) {
				case TrelloConnect.DISCONNECTED:
					new DisconnectedView(elements[i], trello, opts);
					break;

				default:
					new MainView(elements[i], trello, opts);
					break;
			}
		}
	});



}