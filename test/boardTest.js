/* eslint-env mocha */

const { assert } = require('chai');
const { expect } = require('chai');
const Board = require('../src/board').Board;

describe('Board', () => {
  describe('#current', () => {
    it('should return an array with a length of 9 after initialising', () => {
      const board = new Board();
      assert.lengthOf(board.current(), (9));
    });

    // unhappy with this test, want to find a better way to test it
    it('should contain only null', () => {
      const board = new Board();
      const empty = board.current().join('');
      expect(empty).equal('');
    });
  });

  describe('#add', () => {
    it('should add an X to the board', () => {
      const board = new Board();
      expect(board.play('x', 4)[3]).equal('x');
    });

    it('should add an O to the board', () => {
      const board = new Board();
      expect(board.play('O', 8)[7]).equal('O');
    });
  });

  describe('#isFull', () => {
    it('starts not full', () => {
      const board = new Board();
      expect(board.full()).equal(false);
    });

    it('returns unfinished false after 8 rounds', () => {
      const board = new Board();
      for (let i = 1; i < 9; i += 1) {
        board.play('o', i);
      }
      expect(board.full()).equal(false);
    });

    it('when all spaces are filled, returns fulld', () => {
      const board = new Board();
      for (let i = 1; i < 10; i += 1) {
        board.play('o', i);
      }
      expect(board.full()).equal(true);
    });
  });
});
