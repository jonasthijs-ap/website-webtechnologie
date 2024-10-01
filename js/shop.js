const shop = document.getElementById("shop");
const submit = document.getElementsByClassName("shop-submit");
const shopItems = [
    {
        amount: shop.querySelector("#shop-quantity-item-1"),
        price: shop.querySelector("#shop-submit-item-1")
    },
    {
        amount: shop.querySelector("#shop-quantity-item-2"),
        price: shop.querySelector("#shop-submit-item-2")
    },
    {
        amount: shop.querySelector("#shop-quantity-item-3"),
        price: shop.querySelector("#shop-submit-item-3")
    },
    {
        amount: shop.querySelector("#shop-quantity-item-4"),
        price: shop.querySelector("#shop-submit-item-4")
    },
    {
        amount: shop.querySelector("#shop-quantity-item-5"),
        price: shop.querySelector("#shop-submit-item-5")
    },
    {
        amount: shop.querySelector("#shop-quantity-item-6"),
        price: shop.querySelector("#shop-submit-item-6")
    }
];

const numberOfBoughtProducts_output = document.getElementById("number-of-items");
const totalPrice_output = document.getElementById("total-price");

let numberOfBoughtProducts = 0;
let totalPrice = 0;

for (let i = 0; i < submit.length; i++) {
    submit[i].addEventListener("click", (form) => {
        // Calculation of shop data
        let amount = parseFloat(shopItems[i].amount.value);
        let price = parseFloat(shopItems[i].price.value);
        let subtotal = amount * price;
        
        numberOfBoughtProducts += amount;
        totalPrice += subtotal;

        let valueSeparator = totalPrice.toFixed(2).toString().split(".");
        
        // Printing output on screen
        numberOfBoughtProducts_output.innerHTML = numberOfBoughtProducts;
        totalPrice_output.innerHTML = `&euro;&nbsp;${valueSeparator[0]},${valueSeparator[1]}`;
        
        // Prevent page from reloading on submit
        form.preventDefault();
    });
}