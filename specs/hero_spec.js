const assert = require('assert');
const Hero = require('../hero.js');
const Food = require('../food.js');
const Task = require('../task.js');

describe('Hero tests', function() {
  var testHero;
  var testFood;
  var testTask;

  beforeEach(function() {
    testFood = new Food("Burger", 10);
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

  it('Can eat food', function() {
    testHero.eatFood(testFood);
    assert.strictEqual(testHero.health, 110);
  })
})
