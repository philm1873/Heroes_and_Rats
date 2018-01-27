const assert = require('assert');
const Hero = require('../hero.js');
const Food = require('../food.js');
const Task = require('../task.js');

describe('Task tests', function() {
  var testHero;
  var testFood;
  var testTask;

  beforeEach(function() {
    testFood = new Food("Chicken", 10);
    testTask = new Task("Easy", "High", "Gold");
    testHero = new Hero("Knight", 100, "Steak");
  })

  it('Can mark task as complete', function() {
    testTask.markComplete();
    assert.strictEqual(testTask.completed, true);
  })

})
