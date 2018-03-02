const { assert } = require('chai')
const { expect } = require('chai')
const Board = require('../src/board').Board


describe('Board', function() {

  describe('#current', function() {
    it('should return an array with a length of 9 after initialising', function() {
      console.log(Board)
      let board = new Board();
      assert.lengthOf(board.current(), (9))
    });

    it('should contain only null', function() {
      let board = new Board();
      let empty = board.current().join('')
      expect(empty).equal('')
    });
  })
  describe('#add', () => {
    it('should add an X to the board', () => {
      let board = new Board();
      board.play('x', 4);
      expect(board.current()[3]).equal('x')
    });

    it('should add an O to the board', () => {
      let board = new Board();
      board.play('o', 8);
      expect(board.current()[7]).equal('o')
    })
  })
   describe('#isFull', () => {
     it('starts not full', () => {
       let board = new Board();
       expect(board.full()).equal(false)
     })

     it('returns unfinished false after 8 rounds', () => {
       let board = new Board();
       for(var i=1; i < 9; i += 1) {
       board.play('o', i);
     }
       expect(board.full()).equal(false)
     })

    it('when all spaces are filled, returns fulld', () => {
      let board = new Board();
      for(var i=1; i < 10; i += 1) {
      board.play('o', i);
    }
      expect(board.full()).equal(true)
    })
  });
});
