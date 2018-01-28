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

Hero.prototype.eatSafeFood = function(food) {
  if (this.isFavouriteFood(food)) {
    this.health += food.replenishmentValue * 1.5;
  } else {
    this.health += food.replenishmentValue;
  }
};

Hero.prototype.eatPoisonedFood = function(food) {
  this.health -= food.replenishmentValue;
};

Hero.prototype.sortTasks = function(field) {
  return this.tasks.sort(function(a,b) {
    return a.compareTo(b, field);
  })
};

Hero.prototype.viewIncompleteTasks = function() {
  return this.tasks.filter(function(element) {
    return !element.completed;
  })
};

Hero.prototype.viewCompleteTasks = function() {
  return this.tasks.filter(function(element) {
    return element.completed;
  })
};

Hero.prototype.eatFood = function(food) {
  if (food.poisoned) {
    this.eatPoisonedFood(food);
  } else {
    this.eatSafeFood(food);
  }
}


module.exports = Hero;
