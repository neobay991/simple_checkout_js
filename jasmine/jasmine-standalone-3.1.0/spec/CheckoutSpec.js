'use strict';

describe('Simple Checkout', function(){
  var checkout;

  beforeEach(function(){
    checkout = new Checkout();
  });

  it('Shopper able to see price of an item', function(){
    expect(checkout.checkPrice("pasta")).toEqual(2);
  });

  it('Shopper able to scan items at checkout v1', function(){
    expect(checkout.scanItem("pasta")).toEqual(1);
  });

  it('Shopper able to scan items at checkout v2', function(){
    checkout.scanItem("pasta");
    expect(checkout.basket.length).toEqual(1);
  });
});
