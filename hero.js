const Hero = function(name, health, favouriteFood) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
};

Hero.prototype.speak = function() {
  return `Hi, I'm a ${this.name}!`;
};

module.exports = Hero;
