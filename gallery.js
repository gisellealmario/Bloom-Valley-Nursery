let cart = [];
let total = 0.0;

function initializeCart() {
  // Retrieve cart from localStorage
  const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = savedCart;
  total = cart.reduce((acc, item) => acc + item.price, 0);
  updateCart();
}

function addToCart(productName, productPrice) {
  // Add product to cart array
  cart.push({ name: productName, price: productPrice });
  total += productPrice;

  // Save updated cart to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Update the cart modal
  updateCart();
  // Show alert message
  const notification = document.getElementById("notification");
  notification.style.display = "block";

  // Hide notification after 3 seconds
  setTimeout(() => {
    notification.style.display = "none";
  }, 2000);
}

function updateCart() {
  const cartItemsElement = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");

  // Clear the current cart items
  cartItemsElement.innerHTML = "";

  // Add each item in the cart to the modal
  cart.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsElement.appendChild(listItem);
  });

  // Update the total price
  cartTotalElement.textContent = total.toFixed(2);
}

function toggleCart() {
  const cartModal = document.getElementById("cart-modal");
  cartModal.style.display =
    cartModal.style.display === "block" ? "none" : "block";
}

// Close the modal when clicking outside of it
window.onclick = function (event) {
  const cartModal = document.getElementById("cart-modal");
  if (event.target === cartModal) {
    cartModal.style.display = "none";
  }
};

function clearCart() {
  // Clear the cart array and reset the total
  cart = [];
  total = 0.0;

  // Clear the cart from localStorage
  localStorage.removeItem("cart");

  // Update the cart modal to reflect the cleared cart
  updateCart();
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty. Please add items before checking out.");
    return;
  }

  // Perform checkout actions (e.g., redirect to payment page, etc.)
  alert("Proceeding to checkout. Total amount: $" + total.toFixed(2));

  // Clear sessionStorage (if using sessionStorage)
  sessionStorage.removeItem("cart");

  // Clear the cart after checkout
  clearCart();
}

// Initialize cart on page load
window.onload = initializeCart;
