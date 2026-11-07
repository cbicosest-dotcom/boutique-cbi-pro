

const WHATSAPP_NUMBER = "237672143561";
const CART_KEY = "cbi_cart_v1";

let cart = JSON.parse(localStorage.getItem(CART_KEY) || "[]");

const grid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

const escapeHTML = value =>
  String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);

const categories = [
  ...new Set(PRODUCTS.map(product => product.category))
].sort((a, b) => a.localeCompare(b, "fr"));

categories.forEach(category => {
  const option = document.createElement("option");
  option.value = category;
  option.textContent = category;
  categoryFilter.appendChild(option);
});

function getDescription(product) {
  if (product.description) return product.description;

  return `${product.name}. Découvrez ce produit dans la boutique CBI, à Douala au Cameroun. Contactez-nous pour obtenir les informations, le prix et les modalités de commande.`;
}

function renderProducts() {
  const search = searchInput.value.toLowerCase().trim();
  const category = categoryFilter.value;

  const filtered = PRODUCTS.filter(product => {
    const searchableText = [
      product.name,
      product.category,
      getDescription(product),
      ...(product.keywords || [])
    ].join(" ").toLowerCase();

    const matchesCategory =
      category === "Toutes" || category === product.category;

    const matchesSearch = searchableText.includes(search);

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

    const price = Number(product.price) > 0
      ? `${Number(product.price).toLocaleString("fr-FR")} FCFA`
      : "Prix sur demande";

    card.innerHTML = `
      <div class="product-image">
        <img
          src="${escapeHTML(product.image)}"
          alt="${escapeHTML(product.seoTitle || product.name)}"
          loading="lazy"
        >
      </div>

      <div class="product-category">
        ${escapeHTML(product.category)}
      </div>

      <h3>${escapeHTML(product.name)}</h3>

      <p class="product-description">
        ${escapeHTML(getDescription(product))}
      </p>

      <div class="product-actions">
        <span class="price">${price}</span>
        <button class="add-btn" data-id="${product.id}">
          Ajouter +
        </button>
      </div>
    `;

    grid.appendChild(card);
  });
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  renderCart();
}

function addToCart(id) {
  const item = cart.find(product => product.id === id);

  if (item) {
    item.qty++;
  } else {
    cart.push({ id, qty: 1 });
  }

  saveCart();
  openCart();
}

function changeQty(id, amount) {
  const item = cart.find(product => product.id === id);
  if (!item) return;

  item.qty += amount;

  if (item.qty <= 0) {
    cart = cart.filter(product => product.id !== id);
  }

  saveCart();
}

function removeItem(id) {
  cart = cart.filter(product => product.id !== id);
  saveCart();
}

function renderCart() {
  const count = cart.reduce(
    (total, item) => total + item.qty, 0
  );

  document.getElementById("cartCount").textContent = count;

  const target = document.getElementById("cartItems");

  if (cart.length === 0) {
    target.innerHTML =
      '<p class="empty-cart">Votre panier est vide.</p>';

    document.getElementById("checkout").disabled = true;
    return;
  }

  document.getElementById("checkout").disabled = false;

  target.innerHTML = cart.map(item => {
    const product = PRODUCTS.find(p => p.id === item.id);

    if (!product) return "";

    return `
      <div class="cart-row">
        <img src="${escapeHTML(product.image)}"
             alt="${escapeHTML(product.name)}">

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

function openCart() {
  document.getElementById("cartPanel").classList.add("open");
  document.getElementById("overlay").classList.add("show");
  document.getElementById("cartPanel").setAttribute("aria-hidden", "false");
}

function closeCart() {
  document.getElementById("cartPanel").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");
  document.getElementById("cartPanel").setAttribute("aria-hidden", "true");
}

grid.addEventListener("click", event => {
  const button = event.target.closest("[data-id]");
  if (button) addToCart(Number(button.dataset.id));
});

document.getElementById("cartItems").addEventListener("click", event => {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const id = Number(button.dataset.id);

  if (button.dataset.action === "plus") changeQty(id, 1);
  if (button.dataset.action === "minus") changeQty(id, -1);
  if (button.dataset.action === "remove") removeItem(id);
});

document.getElementById("openCart").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
document.getElementById("overlay").addEventListener("click", closeCart);

document.getElementById("checkout").addEventListener("click", () => {
  if (cart.length === 0) return;

  const lines = cart.map(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    if (!product) return "";

    return `• ${product.name} — quantité : ${item.qty}`;
  }).filter(Boolean);

  const message =
    "Bonjour CBI, je souhaite commander :\n\n" +
    lines.join("\n") +
    "\n\nMerci de me communiquer les prix et les modalités de livraison.";

  window.open(
    "https://wa.me/" + WHATSAPP_NUMBER +
    "?text=" + encodeURIComponent(message),
    "_blank"
  );
});

searchInput.addEventListener("input", renderProducts);
categoryFilter.addEventListener("change", renderProducts);

document.getElementById("aboutWhatsApp").href =
  "https://wa.me/" + WHATSAPP_NUMBER;

document.getElementById("year").textContent =
  new Date().getFullYear();

// Informations SEO générales de la boutique
document.title =
  "Boutique CBI | Cosmétiques, soins capillaires et formations au Cameroun";

const metaDescription =
  "Découvrez la boutique CBI à Douala : produits cosmétiques, soins capillaires, parfumerie, entretien et formations professionnelles. Commandes WhatsApp.";

let descriptionTag = document.querySelector(
  'meta[name="description"]'
);

if (!descriptionTag) {
  descriptionTag = document.createElement("meta");
  descriptionTag.name = "description";
  document.head.appendChild(descriptionTag);
}

descriptionTag.content = metaDescription;

renderProducts();
renderCart();