const Task = function(difficultyLevel, urgencyLevel, reward) {
  this.difficultyLevel = difficultyLevel;
  this.urgencyLevel = urgencyLevel;
  this.reward = reward;
  this.completed = false;
};

Task.prototype.markComplete = function() {
  this.completed = true;
};

Task.prototype.mapDifficultyToNumber = function() {
  if (this.difficultyLevel === "Hard") return 3;
  if (this.difficultyLevel === "Medium") return 2;
  if (this.difficultyLevel === "Easy") return 1;
};

Task.prototype.compareDifficultyLevel = function(task) {
  return this.mapDifficultyToNumber() - task.mapDifficultyToNumber();
};

Task.prototype.mapUrgencyToNumber = function() {
  if (this.urgencyLevel === "High") return 3;
  if (this.urgencyLevel === "Medium") return 2;
  if (this.urgencyLevel === "Low") return 1;
};

Task.prototype.compareUrgencyLevel = function(task) {
  return this.mapUrgencyToNumber() - task.mapUrgencyToNumber();
};

Task.prototype.mapRewardToNumber = function() {
  if (this.reward === "Gems") return 3;
  if (this.reward === "Gold") return 2;
  if (this.reward === "Silver") return 1;
};

Task.prototype.compareReward = function(task) {
  return this.mapRewardToNumber() - task.mapRewardToNumber();
};

Task.prototype.compareTo = function(task, field) {
  switch(field) {
    case "Difficulty":
      return this.compareDifficultyLevel(task);

    case "Urgency":
      return this.compareUrgencyLevel(task);

    case "Reward":
      return this.compareReward(task);
  }
}

module.exports = Task;
