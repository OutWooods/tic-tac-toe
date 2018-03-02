
(function(exports) {


  class Board {

    constructor() {
      this.board = this.boardSetup()
    }

    current() {
      return this.board
    }

    boardSetup() {
      let  store = [];
      for(var i = 0; i < 9; i+= 1) {
       store.push(null)
      }
      return store;
   }

    play(val, pos) {
      this.board[pos-1] = val
    }
  };

  exports.Board = Board;

})(this)
