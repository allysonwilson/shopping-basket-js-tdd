var Item = function (name, price) {
  this.name = name;
  this.price = price;
  this.bogofEligibility = false;
};

Item.prototype.changeBogofEligibility = function () {
  if(this.bogofEligibility === false){
    this.bogofEligibility = true;
    return;
  }
  if(this.bogofEligibility === true){
    this.bogofEligibility = false;
    return;
  }
};


module.exports = Item;
