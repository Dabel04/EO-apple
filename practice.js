// ---------------------------
// SAMPLE CATEGORY DATA
// ---------------------------
const sampleCategories = [
  { id: 1, name: "Men's Clothing", image: "👔", color: "#2d5a3d" },
  { id: 2, name: "Women's Clothing", image: "👗", color: "#e74c3c" },
  { id: 3, name: "Men's Sneakers", image: "👟", color: "#14281d" },
  { id: 4, name: "Women's Sneakers", image: "🥿", color: "#e8e4c7" },
  { id: 5, name: "Handbags", image: "👜", color: "#8b4513" },
  { id: 6, name: "Accessories", image: "👑", color: "#ffd700" },
  { id: 7, name: "Traditional", image: "🌍", color: "#2d5a3d" },
  { id: 8, name: "Jewelry", image: "💎", color: "#e74c3c" }
];

// ---------------------------
// SAMPLE PRODUCTS DATA
// ---------------------------
const sampleProducts = [
  { id: 1, name: "African Print Maxi Dress", price: 45.99, originalPrice: 65.99, discount: 30, image: "👗" },
  { id: 2, name: "Men's Kente Shirt", price: 35.50, originalPrice: 50.00, discount: 29, image: "👔" },
  { id: 3, name: "Leather Crossbody Bag", price: 89.99, originalPrice: 120.00, discount: 25, image: "👜" },
  { id: 4, name: "Women's Running Shoes", price: 59.99, originalPrice: 79.99, discount: 25, image: "👟" },
  { id: 5, name: "Men's Casual Sneakers", price: 49.99, originalPrice: 69.99, discount: 29, image: "👞" },
  { id: 6, name: "Beaded Necklace Set", price: 25.99, originalPrice: 35.99, discount: 28, image: "📿" }
];

// ---------------------------
// CART DATA
// ---------------------------
let cart = [];

// DOM ELEMENTS
const cartBadge = document.getElementById("cartBadge");
const categoriesContainer = document.getElementById("categoriesContainer");
const productsContainer = document.getElementById("productsContainer");

// ---------------------------
// RENDER CATEGORIES
// ---------------------------
function loadCategories() {
  categoriesContainer.innerHTML = "";

  sampleCategories.forEach(cat => {
    const div = document.createElement("div");
    div.className = "category-item";

    div.innerHTML = `
      <div class="category-icon" style="background-color:${cat.color};">
        ${cat.image}
      </div>
      <span class="category-name">${cat.name}</span>
    `;

    categoriesContainer.appendChild(div);
  });
}

// ---------------------------
// RENDER PRODUCTS
// ---------------------------
function loadProducts() {
  productsContainer.innerHTML = "";

  sampleProducts.forEach(product => {
    const div = document.createElement("div");
    div.className = "product-card";

    div.innerHTML = `
      <div class="product-image">
        <div class="product-emoji">${product.image}</div>
        <div class="discount-badge">-${product.discount}%</div>
      </div>

      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>

        <div class="price-section">
          <span class="current-price">$${product.price}</span>
          <span class="original-price">$${product.originalPrice}</span>
        </div>

        <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
          Add to Cart
        </button>
      </div>
    `;

    productsContainer.appendChild(div);
  });
}

// ---------------------------
// ADD TO CART LOGIC
// ---------------------------
function addToCart(productId) {
  const product = sampleProducts.find(p => p.id === productId);

  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartBadge();
}

function updateCartBadge() {
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (total > 0) {
    cartBadge.style.display = "inline-block";
    cartBadge.textContent = total;
  } else {
    cartBadge.style.display = "none";
  }
}

// ---------------------------
// BACK BUTTON HANDLER
// ---------------------------
document.getElementById("backBtn").addEventListener("click", () => {
  window.history.back();
});

// INITIAL LOAD
loadCategories();
loadProducts();
updateCartBadge();
