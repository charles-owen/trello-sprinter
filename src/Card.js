/**
 * @file
 * Representation of a Trello list in a board
 */

import {Util} from './Util';

export const Card = function(board, list, data) {
    var that = this;

    this.board = board;
    this.list = list;
    this.id = data.id;
    this.name = Util.strip_tags(data.name);
    this.data = data;
    this.desc = '<p>' +
        Util.strip_tags(data.desc).replace(/\n/gm, '<p>') +
        '</p>';
    this.created = new Date(parseInt(data.id.substr(0, 8), 16) * 1000);

    this.members = [];

    data.idMembers.forEach(function(id) {
        that.members.push(id);
    });

    this.comments = [];
    this.updates = [];
}

Card.prototype.sort_updates = function() {
    this.updates.sort(function(a, b) {
        if(a.date < b.date) {
            return -1;
        } else if(a.date == b.date) {
            return 0;
        } else {
            return 1;
        }
    });
}

/**
 * Determine the last time this card was moved.
 * This is used to determine when a completed card was
 * moved to Completed.
 */
Card.prototype.final_time = function() {
    if(this.updates.length > 0) {
        return this.updates[this.updates.length-1].date;
    }

    return this.created;
}

/**
 * Count members from a collection of cards.
 * @param board Board object
 * @param list array of Card objects
 * @returns object with id as property to object {cnt: ?, member: ?}
 */
Card.count_members = function(board, list) {
    var count = {};

    list.forEach(function(card) {
        card.members.forEach(function(id) {
            var member = board.members[id];
            if(count.hasOwnProperty(member.id)) {
                count[member.id].cnt++;
            } else {
                count[member.id] = {cnt: 1, member: member};
            }
        })
    });

    return count;
}
