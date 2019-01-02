/*
 * Trello board view that displays sprint result in a table.
 */
import {DataView} from '../DataView';
import {Sprints} from './Sprints';
import {Util} from '../Util';
import {Card} from "../Card";
import {BoardView} from "../BoardView";

export const SprintTableView = function(div, board, options) {
    DataView.call(this);

    let addHeadings = true;
    if(options.addHeadings !== undefined) {
        addHeadings = options.addHeadings;
    }

    this.present = function() {
        const view = Util.createElement('div', 'trello-sprint-table');
        div.appendChild(view);

	    const table = Util.createElement('table');
	    view.appendChild(table);

        if(options.class !== undefined) {
	        Util.addClass(table, options.class);
        }

	    //
	    // Create the sprint analysis
	    //
	    const sprints = new Sprints(board);
	    const teamSize = sprints.num_members();

	    if(addHeadings) {
		    tableHeading(table, board, sprints);
	    }

	    var rowHTML = '';
	    function item(data) {
		    rowHTML += '<td>' + data + '</td>';
	    }

	    for(var id in sprints.members) {
		    if(sprints.members.hasOwnProperty(id)) {
			    var member = sprints.members[id];
			    var id = member.member.id;

			    rowHTML = '';

			    // Our statistics
			    item(board.name);
			    item(teamSize);
			    item(member.member.name);
			    item(member.meetings_attended);
			    item(member.meetings_count);
			    item(member.meetings_percentage());
			    item(member.completed_count);
			    item(member.completed_total);
			    item(member.completed_factor(teamSize));
			    item(member.reviews_count);
			    item(member.reviews_total);
			    item(member.reviewing_factor(teamSize));
			    item(sprints.sprints.length);

			    sprints.sprints.forEach(function(sprint) {
				    var cnt = 0;
				    sprint.completed.forEach(function(card) {
					    if(card.members.length == 1 && card.members[0] == id) {
						    cnt++;
					    }
				    });

				    item(cnt);
				    item(sprint.completed.length);
			    });

			    if(!isNaN(addHeadings)) {
				    for(var i=sprints.sprints.length; i<addHeadings; i++) {
					    item("&nbsp;");
					    item("&nbsp;");
				    }
			    }

			    const tr = Util.createElement('tr');
			    tr.innerHTML = rowHTML;
			    table.appendChild(tr);
		    }
	    }
    }

    const tableHeading = function(table, board, sprints) {
        const tr = Util.createElement('tr');
        table.appendChild(tr);

        if(options.tr1class !== undefined) {
            Util.addClass(tr, options.tr1class);
        }

	    var rowHTML = '';
	    function item(data) {
		    rowHTML += '<th><div>' + data + '</div></th>';
	    }

	    item("Team");
	    item("#");
	    item("Member");
	    item("Attended");
	    item("Total");
	    item("%");
	    item("Completed");
	    item("Total");
	    item("%");
	    item("Reviews");
	    item("Total");
	    item("%");
	    item("Sprints");

	    if(addHeadings === true) {
		    for(var i=1; i<=sprints.sprints.length; i++) {
			    item(i);
			    item("#");
		    }
	    } else {
		    for(var i=1; i<=addHeadings; i++) {
			    item(i);
			    item("#");
		    }
	    }

        tr.innerHTML = rowHTML;
    }
}

/// @cond
SprintTableView.prototype = Object.create(DataView.prototype);
SprintTableView.prototype.constructor = SprintTableView;
/// @endcond


SprintTableView.prototype.table_headings = function(board, sprints) {

}

