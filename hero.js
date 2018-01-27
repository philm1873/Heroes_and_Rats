const Hero = function(name, health, favouriteFood) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
};

Hero.prototype.speak = function() {
  return `Hi, I'm a ${this.name}!`;
};

Hero.prototype.addTask = function(task) {
  this.tasks.push(task);
};

Hero.prototype.isFavouriteFood = function(food) {
  return food.name === this.favouriteFood;
};

Hero.prototype.eatFood = function(food) {
  if (this.isFavouriteFood(food)) {
    this.health += food.replenishmentValue * 1.5;
  } else {
    this.health += food.replenishmentValue;
  }
};

module.exports = Hero;
