const Food = function(name, replenishmentValue) {
  this.name = name;
  this.replenishmentValue = replenishmentValue;
  this.poisoned = false;
};

Food.prototype.poison = function() {
  this.poisoned = true;
}

module.exports = Food;
