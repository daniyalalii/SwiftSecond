const cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItemsContainer = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");

let totalPrice = 0;
cart.forEach(item => {
    const itemContainer = document.createElement("div");
    itemContainer.style.display = "flex";
    itemContainer.style.alignItems = "center";
    itemContainer.style.marginBottom = "15px";
    itemContainer.style.borderBottom = "1px solid #ddd";
    itemContainer.style.paddingBottom = "10px";

    const itemImage = document.createElement("img");
    itemImage.src = item.image;
    itemImage.alt = item.name;
    itemImage.style.width = "50px";
    itemImage.style.height = "50px";
    itemImage.style.marginRight = "15px";

    const itemText = document.createElement("p");
    itemText.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    itemText.style.flexGrow = "1";
    itemText.style.textAlign = "left";

    itemContainer.appendChild(itemImage);
    itemContainer.appendChild(itemText);
    cartItemsContainer.appendChild(itemContainer);

    totalPrice += item.price;
});

totalPriceElement.textContent = totalPrice.toFixed(2);

function clearCart() {
    localStorage.removeItem("cart"); 
    cartItemsContainer.innerHTML = ""; 
    totalPriceElement.textContent = "0.00"; 
    alert("Cart cleared!");
}
