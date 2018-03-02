const { assert } = require('chai')
const { expect } = require('chai')
const ResultChecker = require('../src/resultChecker').ResultChecker

describe('ResultChecker', ()=> {
  describe('#Winner', ()=> {
    it('Should return false on null board', () =>{
      checker = new ResultChecker()
      game = [null, null, null, null, null, null, null, null, null]
      expect(checker.winner(game)).equal(false)
    })

    it('Should return true when there is a row of x\'s', () => {
      checker = new ResultChecker()
      game = ['x', 'x', 'x', null, null, null, null, null, null]
      expect(checker.winner(game)).equal(true)
    })
  })
})
