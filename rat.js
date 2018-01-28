const Rat = function() {

}

Rat.prototype.touchFood = function(food) {
  food.poison();
}

module.exports = Rat;
