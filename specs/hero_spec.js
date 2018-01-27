const assert = require('assert');
const Hero = require('../hero.js');
const Food = require('../food.js');
const Task = require('../task.js');

describe('Hero tests', function() {
  var testHero;
  var testFoodOne;
  var testFoodTwo;
  var testTask;

  beforeEach(function() {
    testFoodOne = new Food("Steak", 10);
    testFoodTwo = new Food("Chicken", 10);
    testTask = new Task("Easy", "High", "Gold");
    testHero = new Hero("Knight", 100, "Steak");
  })

  it('Hero can speak', function() {
    assert.strictEqual(testHero.speak(), "Hi, I'm a Knight!");
  })

  it('Can add a task to hero', function() {
    testHero.addTask(testTask);
    assert.deepEqual(testHero.tasks, [testTask]);
  })

  it('Can check favourite food', function() {
    assert.strictEqual(testHero.isFavouriteFood(testFoodOne), true)
  })

  it('Can check is not favourite food', function() {
    assert.strictEqual(testHero.isFavouriteFood(testFoodTwo), false)
  })

  it('Can eat food', function() {
    testHero.eatFood(testFoodTwo);
    assert.strictEqual(testHero.health, 110);
  })

  it('Can eat favourite food', function() {
    testHero.eatFood(testFoodOne);
    assert.strictEqual(testHero.health, 115);
  })
})
