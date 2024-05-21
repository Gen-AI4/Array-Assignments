//Part 1: Basic Arrays - Product Inventory
// 2. Create an array named products containing at least three product objects. Each product object should include a name, price, and inventory details.
let products = [
    {
        name: "Watch",
        price: 999,
        stock: 3500,
        colorOptions: ["white", "red", "black"],
    },
    {
        name: "Shoes",
        price: 9999,
        stock: 500,
        colorOptions: ["blue", "orange", "red"],
        size: [33, 34, 35, 38],
    },
    {
        name: "Cap",
        price: 199,
        stock: 999,
        colorOptions: ["black", "brown", "indigo"],
    },
];
// 3. Implement a function named changeColor that takes a product object and a new color as input. This function should update the color property of the product and adjust the price based on the new color (implement your own logic, e.g., increase by 10% for red, decrease by 5% for blue).
function changeColor(product, newColor) {
    const colorPriceAdjustments = {
        red: 1.1,
        blue: 0.95,
        green: 1.05,
        yellow: 1.0,
    };
    const adjustmentFactor = colorPriceAdjustments[newColor.toLowerCase()] || 1.0;
    const newPrice = product.price * adjustmentFactor;
    const updatedProduct = {
        ...product,
        color: newColor,
        price: parseFloat(newPrice.toFixed(2)),
    };
    return updatedProduct;
}
const product = {
    name: "T-shirt",
    price: 20.0,
    stock: 100,
    colorOptions: ["white", "red"],
    color: "white",
};
// 4. Display each product's name, price, stock, and available colors. Iterate through the products array and print each product's details.
const updatedProduct = changeColor(product, "red");
console.log(product);
console.log(updatedProduct);
export {};
