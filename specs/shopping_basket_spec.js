var assert = require("assert");
var Item = require("../item");
var ShoppingBasket = require("../shopping_basket");

describe("Shopping Basket", function(){

  var shoppingBasket;
  var ps4;
  var nikeShoes;
  var frozen;

  beforeEach(function() {
    shoppingBasket = new ShoppingBasket();
    ps4 = new Item("PS4", 250);
    nikeShoes = new Item("Nike Shoes", 60);
    frozen = new Item("Frozen DVD", 8);
  });

  it("should start with no items", function() {
    assert.strictEqual(shoppingBasket.items.length, 0);
  });

  it("should be able to add item", function(){
    shoppingBasket.add(ps4);
    assert.strictEqual(shoppingBasket.items.length, 1);
  });

})
