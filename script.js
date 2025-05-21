
const foodItems = [
    { name: "Pizza Kes 1000", img: "https://i.pinimg.com/736x/1e/a7/fc/1ea7fca510708ed25f97b2ca63809d32.jpg" },
    { name: "Burger Kes 600", img: "https://i.pinimg.com/736x/eb/cb/c6/ebcbc6aaa9deca9d6efc1efc93b66945.jpg" },
    { name: "Pasta Kes 700", img: "https://i.pinimg.com/736x/91/f4/75/91f475ea479986f068cc8a9fd7517bca.jpg" },
    { name: "Sushi Kes 670", img: "https://i.pinimg.com/736x/ad/10/24/ad1024bec8ffd60319b5157195847ba5.jpg" },
    { name: "Salad Kes 350", img: "https://i.pinimg.com/736x/45/73/d9/4573d97e97a507d2eadbe34261ad0b62.jpg" },
    { name: "Tacos Kes 2100", img: "https://i.pinimg.com/736x/db/c4/c0/dbc4c003d5674030efe2173d2b8dcbce.jpg" },
    { name: "Steak Kes 950", img: "https://i.pinimg.com/736x/ad/88/aa/ad88aa0472018d614906eb5fd45d76db.jpg" },
    { name: "Ice Cream Kes 450", img: "https://i.pinimg.com/736x/c6/5b/60/c65b60705ee905052abf6eb5e143b005.jpg" },
    { name: "Sandwich Kes 1100", img: "https://i.pinimg.com/736x/9e/00/07/9e00078d29c02713a5d1d0915a2f2fc6.jpg" },
    { name: "Fried Chicken Kes 800", img: "https://i.pinimg.com/736x/26/99/12/269912a43432af5c9cf603093bb984c9.jpg" },
    { name: "Dumplings Kes 1400", img: "https://i.pinimg.com/736x/5f/26/58/5f26586bd18d180e6d72b031db118c5a.jpg" },
    { name: "Curry Kes 2500", img: "https://i.pinimg.com/736x/db/97/93/db97934d795526b0e0c4854316368a38.jpg" }
];

let cart = [];
let loggedInUser = localStorage.getItem('username'); // Retrieve username from local storage

// Function to display food items
function displayFoodItems() {
    const foodContainer = document.getElementById('food-items');
    foodContainer.innerHTML = ''; // Clear existing items

    foodItems.forEach(item => {
        const foodDiv = document.createElement('div');
        foodDiv.className = 'food-item';
        foodDiv.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <p>${item.name}</p>
            <button onclick="addToCart('${item.name}', this)">Add to Cart</button>
            <span class="error-message" style="display: none; color: red;"></span> <!-- Error message span -->
        `;
        foodContainer.appendChild(foodDiv);
    });
}

// Function to filter menu items based on search input
function filterMenu() {
    const searchInput = document.getElementById("search").value.toLowerCase();
    const foodItems = document.querySelectorAll(".food-item");
    let count = 0;

    foodItems.forEach(item => {
        const foodName = item.querySelector("p").innerText.toLowerCase();
        if (foodName.includes(searchInput)) {
            item.style.display = "block";
            count++;
        } else {
            item.style.display = "none";
        }
    });

    document.getElementById("food-item-count").innerText = count;
}

// Function to add food item to cart
function addToCart(foodName, button) {
    if (!loggedInUser) {
        // Show error message on button
        const errorMessage = button.nextElementSibling;
        errorMessage.innerText = "Please log in to add items to your cart.";
        errorMessage.style.display = "block";

        setTimeout(() => {
            errorMessage.style.display = "none";
        }, 6000); // Hide after 6 seconds
        return;
    }

    cart.push(foodName);
    updateCart();
}

// Function to update cart display
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    cart.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item;
        cartItems.appendChild(li);
    });
}

// Function to proceed to checkout
function checkout() {
    if (!loggedInUser) {
        // Create a new error message element
        const errorMessage = document.createElement("div");
        errorMessage.innerText = "You must be logged in to proceed to checkout.";
        errorMessage.style.color = "red";
        errorMessage.style.position = "absolute"; // Optional: position it if needed
        errorMessage.style.top = "20px"; // Adjust position as needed
        errorMessage.style.left = "50%"; // Center it horizontally
        errorMessage.style.transform = "translateX(-50%)"; // Centering adjustment
        errorMessage.style.zIndex = "1000"; // Ensure it appears above other elements
        document.body.appendChild(errorMessage);

        setTimeout(() => {
            document.body.removeChild(errorMessage);
        }, 3000); // Hide after 3 seconds

        // Redirect to login page
        window.location.href = "login.html"; // Redirect to login.html
    } else if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Proceeding to checkout with items: " + cart.join(", "));
    }
}

// Initial call to display food items
displayFoodItems();
