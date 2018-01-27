const assert = require('assert');
const Hero = require('../hero.js');
const Food = require('../food.js');
const Task = require('../task.js');

describe('Hero tests', function() {
  var testHero;
  var testFoodOne;
  var testFoodTwo;
  var testTaskOne;
  var testTaskTwo;
  var testTaskThree;

  beforeEach(function() {
    testFoodOne = new Food("Steak", 10);
    testFoodTwo = new Food("Chicken", 10);
    testTaskOne = new Task("Easy", "High", "Gold");
    testTaskTwo = new Task("Medium", "Medium", "Gems");
    testTaskThree = new Task("Hard", "Low", "Silver");
    testHero = new Hero("Knight", 100, "Steak");
    testHero.addTask(testTaskTwo);
    testHero.addTask(testTaskThree);
    testHero.addTask(testTaskOne);
  })

  it('Hero can speak', function() {
    assert.strictEqual(testHero.speak(), "Hi, I'm a Knight!");
  })

  it('Can add a task to hero', function() {
    assert.deepEqual(testHero.tasks, [testTaskTwo, testTaskThree, testTaskOne]);
  })

  it('Can check favourite food', function() {
    assert.strictEqual(testHero.isFavouriteFood(testFoodOne), true);
  })

  it('Can check is not favourite food', function() {
    assert.strictEqual(testHero.isFavouriteFood(testFoodTwo), false);
  })

  it('Can eat food', function() {
    testHero.eatFood(testFoodTwo);
    assert.strictEqual(testHero.health, 110);
  })

  it('Can eat favourite food', function() {
    testHero.eatFood(testFoodOne);
    assert.strictEqual(testHero.health, 115);
  })

  it('Can sort tasks by difficulty', function() {
    assert.deepEqual(testHero.sortTasks("Difficulty"), [testTaskOne, testTaskTwo, testTaskThree]);
  })
})
