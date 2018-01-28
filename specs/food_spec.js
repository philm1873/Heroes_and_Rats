const assert = require('assert');
const Food = require('../food.js');

describe('Food tests', function() {
  var testFood;

  beforeEach(function() {
    testFood = new Food("Chicken", 5);
  })

  it('Can make food poisoned', function() {
    testFood.poison();
    assert.strictEqual(testFood.poisoned, true);
  })
})
