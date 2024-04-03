import { Product } from './product';

let products: Product[] = [];

function createProduct(): void {
    const nameInput = document.getElementById("nameInput") as HTMLInputElement;
    const priceInput = document.getElementById("priceInput") as HTMLInputElement;
    
    const name = nameInput.value;
    const price = parseFloat(priceInput.value);

    if (name.trim() === "" || isNaN(price)) {
        alert("Please enter both name and price.");
        return;
    }

    const newProduct: Product = { name, price };
    products.push(newProduct);

    displayProducts();
}

function displayProducts(): void {
    const productList = document.getElementById("products");
    if (!productList) {
        console.error("Product list element not found.");
        return;
    }

    productList.innerHTML = "";

    products.forEach(product => {
        const li = document.createElement("li");
        li.textContent = `Name: ${product.name}, Price: ${product.price}`;
        productList.appendChild(li);
    });
}
