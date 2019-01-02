/**
 * @file
 * Representation of a Trello update on a card
 */

export const Update = function(board, card, data) {
    this.board = board;
    this.card = card; 
    this.data = data;
    this.member = data.idMemberCreator;
    this.listBefore = data.data.listBefore.name;
    this.listAfter = data.data.listAfter.name;
    this.date = new Date(Date.parse(data.date));
}

