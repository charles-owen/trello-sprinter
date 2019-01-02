/**
 * @file
 * Trello board view that displays sprint results
 */
import {DataView} from '../DataView';
import {Sprints} from './Sprints';
import {Util} from '../Util';
import {Card} from "../Card";
import {BoardView} from "../BoardView";

export const SprintView = function(div, board) {
    DataView.call(this);

    // This uses BoardView to draw what it knows how to draw
    const board_view = new BoardView(div, board);

    this.present = function() {
	    //
	    // Create the sprint analysis
	    //
	    const sprints = new Sprints(board);

		let view = Util.createElement('div', 'trello-sprints');
		div.appendChild(view);

	    let h2 = Util.createElement('h2');
	    h2.innerText = 'Sprints Analysis';
	    view.appendChild(h2);

		present_errors(view, sprints);
		present_warnings(view, sprints);

	    if(sprints.errors.length > 0) {
	        return;
	    }

	    present_sprints(view, sprints);
		present_members(view, sprints);
    }

    let present_errors = function(div, sprints) {
	    if(sprints.errors.length === 0) {
	        return;
	    }

	    let errors = Util.createElement('div', 'trello-errors');
	    div.appendChild(errors);

	    errors.innerHTML = '<h3>Errors</h3>';

	    for(let error of sprints.errors) {
	    	let p = Util.createElement('p');
	    	errors.appendChild(p);
	    	p.innerHTML = '<span class="trello-code">' + error.code + ':</span> ' + error.msg;
	    }
    }

    let present_warnings = function(div, sprints) {
    	if(sprints.warnings.length === 0) {
    		return;
    	}

	    let warnings = Util.createElement('div', 'trello-warnings');
	    div.appendChild(warnings);

	    warnings.innerHTML = '<h3>Warnings</h3>';

	    for(let warning of sprints.warnings) {
		    let p = Util.createElement('p');
		    warnings.appendChild(p);
		    p.innerHTML = '<span class="trello-code">' + warning.code + ':</span> ' + warning.msg;
	    }
    }

    let present_sprints = function(div, sprints) {
		let view = Util.createElement('div', 'trello-view');
		div.appendChild(view);

	    for(var s=1; s<=sprints.sprints.length; s++) {
	        var sprint = sprints.sprints[s-1];
	        present_sprint(view, sprints, s, sprint);
	    }
    }

    let present_sprint = function(div, sprints, num, sprint) {
	    const fmDate = Util.formatDatetime(sprint.start_meeting.created);
	    const toDate = Util.formatDatetime(sprint.end_meeting.created);
	    const completed = sprint.completed.length;

	    //
	    // Member counts for completed
	    //
        const counts = Card.count_members(sprints.board, sprint.completed);

	    let totalCompleted = 0;
	    for(let sprint of sprints.sprints) {
		    totalCompleted += sprint.completed.length;
	    }


	    let completionFactor = 0.00;
	    if(totalCompleted > 0) {
	        completionFactor = completed / (totalCompleted / sprints.sprints.length * 0.8);
	        if(completionFactor > 1) {
	            completionFactor = 1;
	        }
	    }

	    completionFactor = completionFactor.toFixed(2);

	    const header = Util.createElement('h3', 'trello-plus');
	    div.appendChild(header);
	    header.innerHTML = '<span class="date">' + completed +
         ' tasks ' + completionFactor + ' / ' + fmDate + ' to ' + toDate +
         '</span>Sprint: ' + num;

	    const expander = Util.createElement('div', 'trello-expand');
	    expander.style.display = 'none';
	    div.appendChild(expander);

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

        board_view.presentCard(expander, sprint.start_meeting);
        board_view.presentCard(expander, sprint.end_meeting);

	    //
	    // Completed
	    //
	    let pCompleted = Util.createElement('p', 'trello-completed-header');
	    expander.appendChild(pCompleted);
	    pCompleted.innerText = 'Sprint Completed Tasks';

	    let pMembers = Util.createElement('p', 'trello-count');
	    expander.appendChild(pMembers);

	    let members = '<em>Completed:</em>[' + sprint.completed.length + '] ';
	    for(var c in counts) {
	        if(counts.hasOwnProperty(c)) {
	            members += counts[c].member.name + ':[' + counts[c].cnt + ']&nbsp;&nbsp;';
	        }
	    }

	    pMembers.innerHTML = members;

	    //
	    // Present completed cards
	    //
	    for(let i=0; i<sprint.completed.length; i++) {
	        let completed = sprint.completed[i];
	        board_view.presentCard(expander, completed);
	    }
    }

    let present_members = function(div, sprints) {
    	let membersDiv = Util.createElement('div', 'trello-members');
    	div.appendChild(membersDiv);

	    for(var id in sprints.members) {
	        if(sprints.members.hasOwnProperty(id)) {
	            var member = sprints.members[id];
	            present_member(membersDiv, sprints, member);
	        }
	    }

		present_info(membersDiv, sprints);
    }

    let present_member = function(div, sprints, member) {
    	let memberDiv = Util.createElement('div', 'trello-member');
    	div.appendChild(memberDiv);

	    let meetings = sprints.meetings_slop === 1 ? ' meeting' : ' meetings';
	    let teamSize = sprints.num_members();

	    memberDiv.innerHTML = '<h4>' + member.member.name + '</h4>' +

	        '<p>Meetings attended: ' + member.meetings_attended + '/' + member.meetings_count +
	        ' percentage: ' + member.meetings_percentage() +
	        ' <em>You are allowed to miss ' + sprints.meetings_slop + meetings +  '</em>' +
	        '</p>' +

	        '<p>Tasks completed: ' + member.completed_count +
	        '/' + (member.completed_total / teamSize).toFixed(2) + ' for a completion factor of: ' +
	        member.completed_factor(teamSize) + '</p>' +

	        '<p>Reviews completed: ' + member.reviews_count + ' for a reviewing factor of: ' +
	        member.reviewing_factor(teamSize) + '</p>';
    }

    let present_info = function(div, sprints) {
    	const infoDiv = Util.createElement('div', 'trello-info');
    	div.appendChild(infoDiv);

    	infoDiv.innerHTML = '<p>The completion factor for tasks is based on a metric that every' +
		    ' team member is expected to complete ' + (sprints.completed_factor * 100).toFixed(0) + '% of' +
		    ' an equal distribution of tasks. Values less than 1.00 indicate that you will be' +
		    ' losing points on the assignment.</p>' +
		    '<p>The reviewing factor for tasks is based on a metric that every team member' +
		    ' is expected to review ' + (sprints.reviewing_factor * 100).toFixed(0) + '% of an equal' +
		    ' distribution of tasks. This factor is based on a metric that 90% of tasks should' +
		    ' be programming tasks. Values less than 1.00 indicate that you will be' +
		    ' losing points on the assignment.</p>'
    }
}

/// @cond
SprintView.prototype = Object.create(DataView.prototype);
SprintView.prototype.constructor = SprintView;
/// @endcond
