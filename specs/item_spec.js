var assert = require("assert");
var Item = require("../item");

describe("Item", function() {

  var item;

  beforeEach(function() {
    item = new Item("PS4", 250);
  });

  it("should have name, price and eligibility for BOGOF discount", function() {
    assert.strictEqual(item.name, "PS4");
    assert.strictEqual(item.price, 250);
    assert.strictEqual(item.bogofEligibility, false);
  });

})
