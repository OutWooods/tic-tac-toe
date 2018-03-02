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

    it('should return an that contains only null values in', function() {
      console.log(Board)
      let board = new Board();
      expect(board.current()).equal(expectedBoard)
    });

    // it('should add an X to the board', () => {
    //   console.log(Board)
    //   let board = new Board();
    //   board.play('x', 4);
    //   let expectedBoard = [null, null, null, null, 'x', null, null, null, null]
    //   expect(board.current()).equal(expectedBoard)
    // })

  });
});
