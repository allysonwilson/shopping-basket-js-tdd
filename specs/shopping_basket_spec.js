var assert = require("assert");
var Item = require("../item");
var ShoppingBasket = require("../shopping_basket");

describe("Shopping Basket", function(){

  var shoppingBasket;

  beforeEach(function() {
    shoppingBasket = new ShoppingBasket();
  });

  it("should start with no items", function() {
    assert.strictEqual(shoppingBasket.items.length, 0);
  });

})
