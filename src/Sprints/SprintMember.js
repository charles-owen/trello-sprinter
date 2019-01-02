/**
 * @file
 * Team member statistics for a sprint
 */

export const SprintMember = function(sprints, member) {
    this.member = member;
    this.sprints = sprints;

    this.meetings_count = 0;
    this.meetings_attended = 0;
    
    this.completed_count = 0;
    this.completed_total = 0;
    
    this.reviews_count = 0;
    this.reviews_total = 0;
}

SprintMember.prototype.meetings_percentage = function() {
    if(this.meetings_count <= this.sprints.meetings_slop) {
        return '(insufficient meetings)';
    }

    var per = this.meetings_attended / (this.meetings_count - this.sprints.meetings_slop);
    if(per > 1) {
        per = 1;
    }

    return per.toFixed(2);
}

SprintMember.prototype.completed_factor = function(teamSize) {
    if(this.completed_total === 0) {
        return 0;
    }

    var factor = this.completed_count /
        (this.completed_total / teamSize * this.sprints.completed_factor);
    if(factor > 1) {
        factor = 1;
    }
    
    return factor.toFixed(2);
}

SprintMember.prototype.reviewing_factor = function(teamSize) {
    if(this.reviews_total === 0) {
        return 0;
    }

    var factor = this.reviews_count /
        (this.reviews_total / teamSize * this.sprints.reviewing_factor);
    if(factor > 1) {
        factor = 1;
    }

    return factor.toFixed(2);
}