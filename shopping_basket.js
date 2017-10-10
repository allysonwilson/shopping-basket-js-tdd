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

ShoppingBasket.prototype.over20discount = function (finalSpend) {
  if(finalSpend >= 20) {
    finalSpend *= 0.9;
    return finalSpend;
  }
  return finalSpend;
}

ShoppingBasket.prototype.totalValue = function() {
  var totalValue = 0;
  for(item of this.items){
    itemValue = item.price;
    totalValue += itemValue;
  }
  return this.over20discount(totalValue);
}

module.exports = ShoppingBasket;
