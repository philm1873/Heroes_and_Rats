const assert = require('assert');
const Food = require('../food.js');
const Rat = require('../rat.js');

describe('Rat tests', function() {
  var testRat;
  var testFood;

  beforeEach(function() {
    testRat = new Rat();
    testFood = new Food("Steak", 10);
  })

  it('Can touch food', function() {
    testRat.touchFood(testFood);
    assert.strictEqual(testFood.poisoned, true);
  })
})
