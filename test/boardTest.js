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


    it('should add an X to the board', () => {
      let board = new Board();
      board.play('x', 4);
      expect(board.current()[3]).equal('x')
    })

    it('should add an O to the board', () => {
      let board = new Board();
      board.play('o', 8);
      expect(board.current()[7]).equal('o')
    })

  });
});
