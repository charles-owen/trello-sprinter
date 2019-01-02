/*
 * Representation of a Trello member in a board
 */

export const Member = function(board, data) {
    this.board = board;
    this.id = data.id;
    this.name = data.fullName;
    this.data = data;
}