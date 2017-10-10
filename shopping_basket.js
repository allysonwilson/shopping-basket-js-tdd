var ShoppingBasket = function() {
  this.items = [];
};

ShoppingBasket.prototype.add = function (item) {
  this.items.push(item);
};

module.exports = ShoppingBasket;
