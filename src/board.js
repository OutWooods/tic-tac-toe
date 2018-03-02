
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

    play() {

    }
  };

  exports.Board = Board;

})(this)
