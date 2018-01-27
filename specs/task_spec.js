const assert = require('assert');
const Hero = require('../hero.js');
const Food = require('../food.js');
const Task = require('../task.js');

describe('Task tests', function() {
  var testHero;
  var testFood;
  var testTaskOne;
  var testTaskTwo;
  var testTaskThree;

  beforeEach(function() {
    testFood = new Food("Chicken", 10);
    testTaskOne = new Task("Easy", "High", "Gold");
    testTaskTwo = new Task("Medium", "Medium", "Gems");
    testTaskThree = new Task("Hard", "Low", "Silver");
    testHero = new Hero("Knight", 100, "Steak");
  })

  it('Can mark task as complete', function() {
    testTaskOne.markComplete();
    assert.strictEqual(testTaskOne.completed, true);
  })

  it('Can map difficulty levels to numbers', function() {
    assert.strictEqual(testTaskOne.mapDifficultyToNumber(), 1);
    assert.strictEqual(testTaskTwo.mapDifficultyToNumber(), 2);
    assert.strictEqual(testTaskThree.mapDifficultyToNumber(), 3);
  })

  it('Can map urgency levels to numbers', function() {
    assert.strictEqual(testTaskOne.mapUrgencyToNumber(), 3);
    assert.strictEqual(testTaskTwo.mapUrgencyToNumber(), 2);
    assert.strictEqual(testTaskThree.mapUrgencyToNumber(), 1);
  })

  it('Can map rewards to numbers', function() {
    assert.strictEqual(testTaskOne.mapRewardToNumber(), 2);
    assert.strictEqual(testTaskTwo.mapRewardToNumber(), 3);
    assert.strictEqual(testTaskThree.mapRewardToNumber(), 1);
  })

  it('Can compare difficulty levels', function() {
    assert.strictEqual(testTaskOne.compareDifficultyLevel(testTaskTwo), -1);
    assert.strictEqual(testTaskOne.compareDifficultyLevel(testTaskThree), -2);
    assert.strictEqual(testTaskOne.compareDifficultyLevel(testTaskOne), 0);
  })

  it('Can compare urgency levels', function() {
    assert.strictEqual(testTaskOne.compareUrgencyLevel(testTaskTwo), 1);
    assert.strictEqual(testTaskOne.compareUrgencyLevel(testTaskThree), 2);
    assert.strictEqual(testTaskOne.compareUrgencyLevel(testTaskOne), 0);
  })

  it('Can compare rewards', function() {
    assert.strictEqual(testTaskOne.compareReward(testTaskTwo), -1);
    assert.strictEqual(testTaskOne.compareReward(testTaskThree), 1);
    assert.strictEqual(testTaskOne.compareReward(testTaskOne), 0);
  })

  it('Can compare tasks', function() {
    assert.strictEqual(testTaskOne.compareTo(testTaskTwo, "Difficulty"), -1)
    assert.strictEqual(testTaskOne.compareTo(testTaskTwo, "Urgency"), 1)
    assert.strictEqual(testTaskOne.compareTo(testTaskTwo, "Reward"), -1)
  })


})
