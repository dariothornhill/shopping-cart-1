var products = [];
var productIds = ["one", "two", "three"];

function Product(id) {
  this.id = id;
  this.quantity = 0;
  products.push(this);
}
for (var i = 0; i < productIds.length; i++) {
  var pic = document.getElementById(productIds[i]);
  pic.addEventListener("click", buyItem);
  new Product(productIds[i]);
}
var search = function(id) {
  for (var i = 0; i < products.length; i++) {
    if (id === products[i].id) {
      products[i].quantity += 1;
      console.log(products)
    }
  }
}

function buyItem(event) {

search(event.target.id)
}

