"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products = [];
function createProduct() {
    var nameInput = document.getElementById("nameInput");
    var priceInput = document.getElementById("priceInput");
    var name = nameInput.value;
    var price = parseFloat(priceInput.value);
    if (name.trim() === "" || isNaN(price)) {
        alert("Please enter both name and price.");
        return;
    }
    var newProduct = { name: name, price: price };
    products.push(newProduct);
    displayProducts();
}
function displayProducts() {
    var productList = document.getElementById("products");
    if (!productList) {
        console.error("Product list element not found.");
        return;
    }
    productList.innerHTML = "";
    products.forEach(function (product) {
        var li = document.createElement("li");
        li.textContent = "Name: ".concat(product.name, ", Price: ").concat(product.price);
        productList.appendChild(li);
    });
}
