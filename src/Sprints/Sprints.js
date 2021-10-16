/*
 * Sprint analysis of Trello board
 */

import {Sprint} from "./Sprint";
import {SprintMember} from "./SprintMember";

export const Sprints = function(board) {
    var that = this;

    /// Number of missed meetings allow
    this.meetings_slop = 1;


    /// Number of seconds after meeting time to consider completed
    /// in a current sprint in seconds.
    this.sprint_time_slop = 5 * 60 * 60;   // 5 hours
    
    /// Each users is expected to complete 80% of his share of tasks
    this.completed_factor = 0.8;
    
    /// Each users is expected to complete 80% of 90% of the task count in reviews
    this.reviewing_factor = 0.8 * 0.9;

    this.board = board;

    this.errors = [];
    this.warnings = [];

    this.members = {};
    this.sprints = [];

    this.design = null;
    this.risks = null;
    this.meetings = null;
    this.todo = null;
    this.sprint_active = null;
    this.sprint_completed = null;
    this.completed = null;

    //
    // Copy over the members
    //
    for(var id in board.members) {
        var member = board.members[id];
        if(member.name.toLowerCase() === "cse335") {
            continue;
        }

        this.members[id] = new SprintMember(this, member);
    }

    //
    // Find all of the required lists
    //
    this.find_lists();

    if(this.errors.length > 0) {
        this.error('e900');
        return;
    }

    //
    // Order testing
    //
    this.order_test();

    //
    // Determine attendance
    //
    this.meeting_attendance();

    //
    // Convert meetings into sprints
    //
    this.create_sprints();

    //
    // Sort completed into sprints
    //
    this.sort_completed();

    //
    // Completed statistics
    //
    this.completed_statistics();
}

/**
 * Ensure all required lists exist.
 */
Sprints.prototype.find_lists = function() {
    // Find the "Design" list
    this.design = this.board.find_list('Design');
    if(this.design === null) {
        this.error('e001');
    }

    // Find the "Risks" list
    this.risks = this.board.find_list('Risks');
    if(this.risks === null) {
        this.error('e002');
    }

    // Find the "Meetings" list
    this.meetings = this.board.find_list('Meetings');
    if(this.meetings === null) {
        this.error('e003');
    }

    // Find the "To Do" list
    this.todo = this.board.find_list('To Do');
    if(this.todo === null) {
        this.error('e004');
    }

    // Find the "This Sprint Active" list
    this.sprint_active = this.board.find_list('This Sprint Active');
    if(this.sprint_active === null) {
        this.error('e005');
    }

    // Find the "This Sprint Completed" list
    this.sprint_completed = this.board.find_list('This Sprint Completed');
    if(this.sprint_completed === null) {
        this.error('e006');
    }

    // Find the "Completed" list
    this.completed = this.board.find_list('Completed');
    if(this.completed === null) {
        this.error('e007');
    }
}

/**
 * Ensure lists are in the right order
 */
Sprints.prototype.order_test = function() {
    const order = this.board.options.cards;

    for(var i=0; i<order.length; i++) {
        if(this.board.lists[i].name.toLowerCase() !== order[i].toLowerCase()) {
            this.warning('w001');
            return;
        }
    }
}

/**
 * Count meeting attendance for a user
 */
Sprints.prototype.meeting_attendance = function() {
    var that = this;

    var meetings_count = this.meetings.cards.length;
    for(var id in this.members) {
        var member = this.members[id];
        member.meetings_count = meetings_count;
        member.meetings_attended = 0;
    }

    this.meetings.cards.forEach(function(card) {
        card.members.forEach(function(id) {
            var member = that.find_member(id);
            if(member !== null) {
                member.meetings_attended++;
            }
        });
    });

}

Sprints.prototype.create_sprints = function() {
    var meetings = this.meetings.cards.slice();

    meetings.sort(function(a, b) {
        if(a.created < b.created) {
            return -1;
        } else if(a.created === b.created) {
            return 0;
        } else {
            return 1;
        }
    });

    for(var i=0; i<(meetings.length - 1); i++) {
        this.sprints.push(new Sprint(this, meetings[i], meetings[i+1]));
    }
}

Sprints.prototype.sort_completed = function() {
    var that = this;

    var completed = this.completed.cards.slice();
    completed.sort(function(a, b) {
        var at = a.final_time();
        var bt = b.final_time();
        if(at === bt) {
            return 0;
        } else if(at < bt) {
            return -1;
        }

        return 1;
    });

    completed.forEach(function(completed) {
        //
        // Was this card ever in the risk list?
        //
        let risk = false;
        for(let update of completed.updates) {
            if(update.listBefore === 'Risk') {
                risk = true;
            }
        }

        //
        // We ignore "risk" cards
        //
        if(!risk) {
            const date = completed.final_time();
            let i=0;
            for( ; i<that.sprints.length;  i++) {
                const sprint = that.sprints[i];
                if(date <= sprint.end_time()) {
                    break;
                }
            }

            if(i >= that.sprints.length) {
                i = that.sprints.length - 1;
            }

            const sprint = that.sprints[i];
            sprint.completed.push(completed);
        }

    });
}

Sprints.prototype.completed_statistics = function() {
    var completed_count = 0;
    var reviews_total = 0;

    for(var i=0; i<this.sprints.length; i++) {
        const sprint = this.sprints[i];
        completed_count += sprint.completed.length;

        for(let j=0; j<sprint.completed.length; j++) {
            const completed = sprint.completed[j];

            if(completed.members.length === 1) {
                const id = completed.members[0];
                const member = this.find_member(id);
                if(member !== null) {
                    member.completed_count++;
                }
            } else if(completed.members.length === 0) {
                this.warning("w002", "Completed task <em>" + completed.name +
                    "</em> has no team members assigned. Nobody will get credit for that task.")
            } else {
                this.warning("w003", "Completed task <em>" + completed.name +
                "</em> has more than one team member assigned. Nobody will get credit for that task.");
            }

            // Are they any reviews?
            if(completed.comments.length > 0) {
                reviews_total++;
                const id = completed.comments[0].member;
                const member = this.find_member(id);
                if(member !== null) {
                    member.reviews_count++;
                }
            }
        }
    }

    for(var id in this.members) {
        this.members[id].completed_total = completed_count;
        this.members[id].reviews_total = reviews_total;
    }
}

Sprints.prototype.find_member = function(id) {
    if(this.members.hasOwnProperty(id)) {
        return this.members[id];
    }

    return null;
}

Sprints.prototype.num_members = function() {
    var cnt = 0;

    for(var id in this.members) {
        if(this.members.hasOwnProperty(id)) {
            cnt++;
        }
    }

    return cnt;
}

Sprints.prototype.error = function(code) {
    // Does the error already exist?
    for(var i=0; i<this.errors.length;  i++) {
        var error = this.errors[i];
        if(error.code === code) {
            return;
        }
    }

    switch(code) {
        case 'e001':
            this.errors.push({code: code, msg: "There is no list named 'Design'"});
            break;

        case 'e002':
            this.errors.push({code: code, msg: "There is no list named 'Risks'"});
            break;

        case 'e003':
            this.errors.push({code: code, msg: "There is no list named 'Meetings'"});
            break;

        case 'e004':
            this.errors.push({code: code, msg: "There is no list named 'To Do'"});
            break;

        case 'e005':
            this.errors.push({code: code, msg: "There is no list named 'This Sprint Active'"});
            break;

        case 'e006':
            this.errors.push({code: code, msg: "There is no list named 'This Sprint Completed'"});
            break;

        case 'e007':
            this.errors.push({code: code, msg: "There is no list named 'Completed'"});
            break;

        case 'e900':
            this.errors.push({code: code, msg: "Fatal errors, unable to proceed with sprints analysis"});
            break;
    }
}

Sprints.prototype.warning = function(code, msg) {
    if(msg !== undefined) {
        this.warnings.push({code: code, msg: msg});
        return;
    }

    switch(code) {
        case 'w001':
            var msg = "Your lists are not in the correct order. " +
                "The exact order should be:";

            let first = true;
            for(const card of this.board.options.cards) {
                if(first) {
                    first = false;
                } else {
                    msg += ',';
                }

                msg += ' ' + card;
            }

            this.warnings.push({code: code, msg: msg});
            break;

    }
}