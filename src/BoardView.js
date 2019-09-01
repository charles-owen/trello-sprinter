/**
 * @file
 * Standard Trello board view
 */
import {DataView} from './DataView';
import {Util} from './Util';

export const BoardView = function(div, board) {
    DataView.call(this);

    this.present = function() {
		let view = Util.createElement('div', 'trello-view');
	    div.appendChild(view);

	    for(let list of board.lists) {
			presentList(view, list);
	    }
    }

    const presentList = (view, list) => {
    	const header = Util.createElement('h3', 'trello-plus');
    	header.innerText = list.name;
    	view.appendChild(header);

    	const expander = Util.createElement('div', 'trello-expand');
    	expander.style.display = 'none';
    	view.appendChild(expander);

    	header.addEventListener('click', (event) => {
    		if(expander.style.display === 'none') {
    			expander.style.display = 'block';
    			Util.removeClass(header, 'trello-plus');
    			Util.addClass(header, 'trello-minus');
		    } else {
    			expander.style.display = 'none';
			    Util.removeClass(header, 'trello-minus');
			    Util.addClass(header, 'trello-plus');
		    }
	    });

    	let count = list.count_members();

	    let members = '<em>Cards:</em>[' + list.cards.length + '] ';
	    for(var c in count) {
		    if(count.hasOwnProperty(c)) {
			    members += count[c].member.name + ':[' + count[c].cnt + ']&nbsp;&nbsp;';
		    }
	    }

	    const countEl = Util.createElement('p', 'trello-count');
	    expander.appendChild(countEl);
	    countEl.innerHTML = members;

	    for(let card of list.cards) {
	    	presentCard(expander, card);
	    }
    }

    let presentCard = (div, card) => {
	    //
	    // Heading
	    //
	    let date = Util.formatDatetime(card.created);

		let cardDiv = Util.createElement('div', 'trello-card');
		div.appendChild(cardDiv);
		cardDiv.innerHTML = `<h4><span class="trello-date">${date}</span>${card.name}</h4>`;

	    //
	    // Members
	    //
	    let members = '';
	    for(let id of card.members) {
		    var member = card.board.members[id];
		    if(members.length > 0) {
			    members += ' / ';
		    }
		    members += '<span>' + member.name + '</span>';
	    }

	    let membersP = Util.createElement('p', 'trello-card-members')
	    cardDiv.appendChild(membersP);
	    membersP.innerHTML = members;


	    //
	    // Description
	    //
	    let desc = Util.createElement('div', 'trello-description');
	    cardDiv.appendChild(desc);
	    desc.innerHTML = card.desc;

	    presentComments(cardDiv, card);
	    presentUpdates(cardDiv, card);
    }
    this.presentCard = presentCard;

    let presentComments = (div, card) => {
	    if(card.comments.length === 0) {
		    return;
	    }

	    let commentDiv = Util.createElement('div', 'trello-comments');
	    div.appendChild(commentDiv);

		for(let comment of card.comments) {
			let member = card.board.members[comment.member];
			let memberName = member !== undefined ? member.name : "undefined";
			let date = Util.formatDatetime(comment.date);

			let h5 = Util.createElement('h5');
			commentDiv.appendChild(h5);
			h5.innerHTML = `<span class="trello-date">${date}</span>${memberName}`;

			let textDiv = Util.createElement('div');
			commentDiv.appendChild(textDiv);
			textDiv.innerHTML = comment.text;
		}
    }

    let presentUpdates = (div, card) => {
	    if(card.updates.length === 0) {
		    return;
	    }

	    let updateDiv = Util.createElement('div', 'trello-updates');
	    div.appendChild(updateDiv);

	    for(let update of card.updates) {
		    var member = card.board.members[update.member];
		    var memberName = member !== undefined ? member.name : "undefined";
		    var date = Util.formatDatetime(update.date);
		    let p = document.createElement('p');
		    updateDiv.appendChild(p);
		    p.innerHTML = '<span class="date">' + date + '</span> ' + memberName +
			    ' moved from <span class="list">' + update.listBefore +
			    '</span> to <span class="list">' + update.listAfter + '</span>';
	    }
    }
}

/// @cond
BoardView.prototype = Object.create(DataView.prototype);
BoardView.prototype.constructor = BoardView;
/// @endcond
