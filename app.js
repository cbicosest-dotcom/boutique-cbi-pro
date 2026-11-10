
const WHATSAPP_NUMBER = "237672143561";
const CART_KEY = "cbi_cart_v1";

// ==========================================
// INITIALISATION DU PANIER
// ==========================================

let cart = [];

try {
  cart = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
  if (!Array.isArray(cart)) cart = [];
} catch (error) {
  cart = [];
}

const grid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

// Sécurisation du texte affiché dans HTML
function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

// ==========================================
// FILTRES DES CATEGORIES
// ==========================================

const categories = [
  ...new Set(PRODUCTS.map(product => product.category))
].sort((a, b) => a.localeCompare(b, "fr"));

categories.forEach(category => {
  const option = document.createElement("option");
  option.value = category;
  option.textContent = category;
  categoryFilter.appendChild(option);
});

// ==========================================
// AFFICHAGE DES PRODUITS
// ==========================================

function renderProducts() {
  const search = searchInput.value.toLowerCase().trim();
  const category = categoryFilter.value;

  const filtered = PRODUCTS.filter(product => {
    const matchesCategory =
      category === "Toutes" || category === product.category;

    const searchContent = [
  product.name,
  product.category,
  product.description || "",
  product.keywords || "",
  product.seoTitle || "",
  product.seoDescription || ""
].join(" ").toLowerCase();

    const matchesSearch = searchContent.includes(search);

    return matchesCategory && matchesSearch;
  });

  document.getElementById("resultCount").textContent =
    `${filtered.length} produit(s)`;

  grid.innerHTML = "";

  if (filtered.length === 0) {
    grid.innerHTML = "<p>Aucun produit trouvé.</p>";
    return;
  }

  filtered.forEach(product => {
    const card = document.createElement("article");
    card.className = "product-card";

    card.innerHTML = `
      <div class="product-image">
        <img
          src="${escapeHTML(product.image)}"
          alt="${escapeHTML(product.imageAlt || product.name)}"
          loading="lazy"
        >
      </div>

      <div class="product-category">
        ${escapeHTML(product.category)}
      </div>

      <h3>${escapeHTML(product.name)}</h3>

      <p class="product-description">
        ${escapeHTML(product.description || "Contactez-nous pour plus d'informations.")}
      </p>

      <div class="product-actions">
        <span class="price">Prix sur demande</span>

        <button class="add-btn" data-id="${product.id}">
          Ajouter +
        </button>
      </div>
    `;

    grid.appendChild(card);
  });
}

// ==========================================
// GESTION DU PANIER
// ==========================================

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  renderCart();
}

function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const item = cart.find(p => p.id === id);

  if (item) {
    item.qty++;
  } else {
    cart.push({ id, qty: 1 });
  }

  saveCart();
  openCart();
}

function changeQty(id, amount) {
  const item = cart.find(p => p.id === id);
  if (!item) return;

  item.qty += amount;

  if (item.qty <= 0) {
    cart = cart.filter(p => p.id !== id);
  }

  saveCart();
}

function removeItem(id) {
  cart = cart.filter(p => p.id !== id);
  saveCart();
}

// ==========================================
// AFFICHAGE DU PANIER
// ==========================================

function renderCart() {
  const count = cart.reduce(
    (total, item) => total + item.qty, 0
  );

  document.getElementById("cartCount").textContent = count;

  const target = document.getElementById("cartItems");

  cart = cart.filter(item =>
    PRODUCTS.some(product => product.id === item.id)
  );

  if (cart.length === 0) {
    target.innerHTML =
      '<p class="empty-cart">Votre panier est vide.</p>';

    document.getElementById("checkout").disabled = true;
    return;
  }

  document.getElementById("checkout").disabled = false;

  target.innerHTML = cart.map(item => {
    const product = PRODUCTS.find(p => p.id === item.id);

    return `
      <div class="cart-row">
        <img
          src="${escapeHTML(product.image)}"
          alt="${escapeHTML(product.name)}"
        >

        <div>
          <b>${escapeHTML(product.name)}</b>
          <small>${escapeHTML(product.category)}</small>

          <div class="qty">
            <button data-action="minus" data-id="${product.id}">−</button>
            <span>${item.qty}</span>
            <button data-action="plus" data-id="${product.id}">+</button>
          </div>
        </div>

        <button data-action="remove" data-id="${product.id}">
          Retirer
        </button>
      </div>
    `;
  }).join("");
}

// ==========================================
// OUVERTURE ET FERMETURE DU PANIER
// ==========================================

function openCart() {
  document.getElementById("cartPanel").classList.add("open");
  document.getElementById("overlay").classList.add("show");

  document.getElementById("cartPanel")
    .setAttribute("aria-hidden", "false");
}

function closeCart() {
  document.getElementById("cartPanel").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");

  document.getElementById("cartPanel")
    .setAttribute("aria-hidden", "true");
}

// ==========================================
// EVENEMENTS DU PANIER
// ==========================================

grid.addEventListener("click", event => {
  const button = event.target.closest("[data-id]");
  if (button) {
    addToCart(Number(button.dataset.id));
  }
});

document.getElementById("cartItems").addEventListener("click", event => {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const id = Number(button.dataset.id);

  if (button.dataset.action === "plus") changeQty(id, 1);
  if (button.dataset.action === "minus") changeQty(id, -1);
  if (button.dataset.action === "remove") removeItem(id);
});

document.getElementById("openCart")
  .addEventListener("click", openCart);

document.getElementById("closeCart")
  .addEventListener("click", closeCart);

document.getElementById("overlay")
  .addEventListener("click", closeCart);

// ==========================================
// COMMANDE WHATSAPP
// ==========================================

document.getElementById("checkout").addEventListener("click", () => {
  if (cart.length === 0) return;

  const lines = cart.map(item => {
    const product = PRODUCTS.find(p => p.id === item.id);

    return `• ${product.name} — Quantité : ${item.qty}`;
  });

  const message =
    "Bonjour CBI, je souhaite commander :\n\n" +
    lines.join("\n") +
    "\n\nMerci de me communiquer les prix et les modalités de livraison.";

  const url =
    "https://wa.me/" + WHATSAPP_NUMBER +
    "?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
});

// ==========================================
// RECHERCHE ET CATEGORIES
// ==========================================

searchInput.addEventListener("input", renderProducts);

categoryFilter.addEventListener("change", renderProducts);

// ==========================================
// CONTACT ET ANNEE
// ==========================================

document.getElementById("aboutWhatsApp").href =
  "https://wa.me/" + WHATSAPP_NUMBER;

document.getElementById("year").textContent =
  new Date().getFullYear();

// ==========================================
// LANCEMENT DE LA BOUTIQUE
// ==========================================

renderProducts();
renderCart();
