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
}

Hero.prototype.eatFood = function(food) {
  this.health += food.replenishmentValue;
}

module.exports = Hero;
