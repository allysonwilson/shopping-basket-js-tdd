var ShoppingBasket = function() {
  this.items = [];
};

ShoppingBasket.prototype.add = function (item) {
  this.items.push(item);
};

ShoppingBasket.prototype.remove = function (item) {
  itemIndex = this.items.indexOf(item);
  this.items.splice(itemIndex, 1);
};

module.exports = ShoppingBasket;
