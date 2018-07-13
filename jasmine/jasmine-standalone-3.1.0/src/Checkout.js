function Checkout() {

  this.products = { 'pasta': 2, 'pizza': 3, 'milk': 2, 'bread' :1 };
  this.basket = [];
}

Checkout.prototype.getPrice = function(item) {
  return this.products[item];
};

Checkout.prototype.scanItem = function(item) {
  this.item_price = this.products[item];
  return this.basket.push(this.item_price);
};

Checkout.prototype.getTotal = function(item) {
  var sum = 0, arr = this.basket;
    for (var i = this.basket.length; !!i--;){
    sum += arr[i];
    }
  return "£"+sum +".00"
};
