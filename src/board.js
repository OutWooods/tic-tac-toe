(function(exports) {
   class Board {
    constructor() {
      this.board = this.boardSetup();
    }

    current() {
      return this.board;
    }

    boardSetup() {
      const store = [];
      for (let i = 0; i < 9; i += 1) {
        store.push(null);
      }
      return store;
    }

    play(val, pos) {
      this.board[pos - 1] = val;
      return this.board;
    }

    full() {
      return !this.board.includes(null);
    }

  }

  exports.Board = Board
}(this))
