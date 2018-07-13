function Checkout() {

  this.products = { 'pasta': 2, 'pizza': 3, 'milk': 2, 'bread' :1 };
  this.basket = [];
}

Checkout.prototype.checkPrice = function(item) {
  return this.products[item];
};

Checkout.prototype.scanItem = function(item) {
  return this.basket.push(item);
};
