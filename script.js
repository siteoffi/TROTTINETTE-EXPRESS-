
"use strict";

const SHOP = {
  whatsapp: "33688489721",
  email: "achattrottinette@gmail.com"
};

/*
 * Catalogue de référence.
 * null = prix à confirmer.
 * Les prix variables sont affichés comme prix de départ.
 */
const PRODUCTS = [
  // AUSOM
  {id:"ausom-k20",brand:"AUSOM",name:"Ausom K20",price:300,power:"Selon version",battery:"Selon version",range:"Selon version",badge:"VILLE",image:"images/cc370809-5fd5-4bc0-a33b-1b08ba5017dd.jpeg"},
  {id:"ausom-k20-pro",brand:"AUSOM",name:"Ausom K20 Pro",price:399,power:"Selon version",battery:"Selon version",range:"Selon version",badge:"PRO",image:"images/e7fed6e6-bdef-44c9-8acc-69ef101f376e.jpeg"},
  {id:"ausom-k20-pro-dual",brand:"AUSOM",name:"Ausom K20 Pro Dual",price:499,power:"Double moteur",battery:"Selon version",range:"Selon version",badge:"DOUBLE MOTEUR",image:"images/b0004e09-7b7b-4d73-9a91-d8d9034f7de3.jpeg"},
  {id:"ausom-gosoul-2",brand:"AUSOM",name:"Ausom Gosoul 2",price:399,power:"Selon version",battery:"Selon version",range:"Selon version",badge:"",image:"images/efa3d4eb-77ad-4ae9-834c-a03d24fd8414.jpeg"},
  {id:"ausom-gosoul-2-pro",brand:"AUSOM",name:"Ausom Gosoul 2 Pro",price:449,power:"Selon version",battery:"Selon version",range:"Selon version",badge:"PRO",image:"images/efa3d4eb-77ad-4ae9-834c-a03d24fd8414.jpeg"},
  {id:"ausom-gosoul-2-dual",brand:"AUSOM",name:"Ausom Gosoul 2 Dual",price:480,power:"Double moteur",battery:"Selon version",range:"Selon version",badge:"DOUBLE MOTEUR",image:"images/efa3d4eb-77ad-4ae9-834c-a03d24fd8414.jpeg"},
  {id:"ausom-gosoul-2-pro-dual",brand:"AUSOM",name:"Ausom Gosoul 2 Pro Dual",price:500,power:"Double moteur",battery:"Selon version",range:"Selon version",badge:"DOUBLE MOTEUR",image:"images/60e23d7c-3b99-4112-89bf-90b882dabb1c.jpeg"},
  {id:"ausom-dt2-pro",brand:"AUSOM",name:"Ausom DT2 Pro",price:700,power:"Selon version",battery:"Selon version",range:"Selon version",badge:"TOUT-TERRAIN",image:"images/b8e76865-6e82-4530-8670-d36a800c6f21.jpeg"},
  {id:"ausom-l2-max-dual",brand:"AUSOM",name:"Ausom L2 Max Dual",price:600,power:"Double moteur",battery:"Selon version",range:"Selon version",badge:"DOUBLE MOTEUR",image:"images/d5d3fcfe-95b9-471d-9d67-8a67e3448251.jpeg"},
  {id:"ausom-l1-abe",brand:"AUSOM",name:"Ausom L1 ABE",price:420,power:"Selon version",battery:"Selon version",range:"Selon version",badge:"VERSION ABE",image:"images/0a19faae-3cc1-4c6f-9eab-669023048836.jpeg"},
  {id:"ausom-f1-max",brand:"AUSOM",name:"Ausom F1 Max",price:800,power:"Selon version",battery:"Selon version",range:"Selon version",badge:"PREMIUM",image:"images/6304a642-5d5c-4bdf-b351-6614e52c1b87.jpeg"},

  // DUALTRON
  {id:"dualtron-aminia",brand:"Dualtron",name:"Dualtron Aminia 2026",price:649,priceNote:"À partir de",power:"Selon version",battery:"Selon version",range:"Selon version",badge:"COMPACTE",image:"images/8f612cdc-8269-44c5-a906-5e76daa446ad.jpeg"},
  {id:"dualtron-togo",brand:"Dualtron",name:"Dualtron Togo",price:499,priceNote:"À partir de",power:"Selon version",battery:"Selon version",range:"Selon version",badge:"VILLE",image:"images/83060be5-81c2-4dc5-a8aa-dca743a11c15.jpeg"},
  {id:"dualtron-pop",brand:"Dualtron",name:"Dualtron POP",price:699,priceNote:"À partir de",power:"Selon version",battery:"Selon version",range:"Selon version",badge:"",image:"images/914408d7-9522-4274-a1ab-f97a5b9ebcb5.jpeg"},
  {id:"dualtron-victor",brand:"Dualtron",name:"Dualtron Victor 2026",price:1400,power:"Selon version",battery:"Selon version",range:"Selon version",badge:"SPORT",image:"images/ed119a36-50ae-4432-b7c4-fc3fb75daada.jpeg"},
  {id:"dualtron-victor-luxury-plus",brand:"Dualtron",name:"Dualtron Victor Luxury PLUS 2026",price:1500,priceNote:"À partir de",power:"Selon version",battery:"Selon version",range:"Selon version",badge:"LUXURY",image:"images/acef500d-22e6-485b-b7a4-ef58cde74734.jpeg"},
  {id:"dualtron-victor-luxury",brand:"Dualtron",name:"Dualtron Victor Luxury 2026",price:1600,power:"Selon version",battery:"Selon version",range:"Selon version",badge:"LUXURY",image:"images/6bb09e24-1c76-499e-a23a-f638b93ac9ca.jpeg"},
  {id:"dualtron-thunder-2",brand:"Dualtron",name:"Dualtron Thunder 2",price:2500,power:"Selon version",battery:"Selon version",range:"Selon version",badge:"HAUTE PERFORMANCE",image:"images/e88357a1-4ca8-4b4b-b69d-6265587f728b.jpeg"},
  {id:"dualtron-thunder-3",brand:"Dualtron",name:"Dualtron Thunder 3 2026",price:2889,priceNote:"À partir de",power:"Selon version",battery:"Selon version",range:"Selon version",badge:"PREMIUM",image:"images/dualtron-thunder-3.jpg"},
  {id:"dualtron-x-limited",brand:"Dualtron",name:"Dualtron X Limited 2026",price:4590,power:"Selon version",battery:"Selon version",range:"Selon version",badge:"EXTRÊME",image:"images/dualtron-x-limited.jpg"},
  {id:"dualtron-storm-limited",brand:"Dualtron",name:"Dualtron New Storm Limited",price:null,power:"Selon version",battery:"Selon version",range:"Selon version",badge:"LIMITED",image:"images/dualtron-storm-limited.jpg"},
  {id:"dualtron-sonic-alien",brand:"Dualtron",name:"Dualtron Sonic Alien",price:null,power:"Selon version",battery:"Selon version",range:"Selon version",badge:"PREMIUM",image:"images/dualtron-sonic-alien.jpg"},

  // KUKIRIN
  {id:"kukirin-a1",brand:"KuKirin",name:"KuKirin A1",price:419,power:"800 W",battery:"48 V, 13 Ah",range:"Jusqu'à 45 km",badge:"VILLE",image:"images/kukirin-a1.jpg"},
  {id:"kukirin-s1-max",brand:"KuKirin",name:"KuKirin S1 Max",price:249,power:"350 W",battery:"36 V, 10,4 Ah",range:"Jusqu'à 39 km",badge:"COMPACTE",image:"images/kukirin-s1-max.jpg"},
  {id:"kukirin-x1",brand:"KuKirin",name:"KuKirin X1",price:1239,power:"Moteur central 2000 W crête",battery:"48 V, 20,8 Ah",range:"Selon conditions",badge:"TOUT-TERRAIN",image:"images/kukirin-x1.jpg"},
  {id:"kukirin-t3",brand:"KuKirin",name:"KuKirin T3",price:519,power:"800 W",battery:"48 V, 15,6 Ah",range:"Jusqu'à 58 km",badge:"NOUVEAUTÉ",image:"images/kukirin-t3.jpg"},
  {id:"kukirin-m4",brand:"KuKirin",name:"KuKirin M4",price:null,power:"À confirmer",battery:"À confirmer",range:"À confirmer",badge:"",image:"images/kukirin-m4.jpg"},
  {id:"kukirin-m4-pro",brand:"KuKirin",name:"KuKirin M4 Pro",price:null,power:"À confirmer",battery:"À confirmer",range:"À confirmer",badge:"PRO",image:"images/kukirin-m4-pro.jpg"},
  {id:"kukirin-m4-max",brand:"KuKirin",name:"KuKirin M4 Max",price:419,power:"800 W",battery:"48 V, 18,2 Ah",range:"Jusqu'à 64 km",badge:"",image:"images/kukirin-m4-max.jpg"},
  {id:"kukirin-g2",brand:"KuKirin",name:"KuKirin G2",price:489,power:"800 W",battery:"48 V, 15,6 Ah",range:"Jusqu'à 55 km",badge:"POPULAIRE",image:"images/kukirin-g2.jpg"},
  {id:"kukirin-g2-pro",brand:"KuKirin",name:"KuKirin G2 Pro",price:459,priceNote:"À partir de",power:"600 W (version standard)",battery:"48 V, 15,6 Ah",range:"Jusqu'à 58 km",badge:"PRO",image:"images/kukirin-g2-pro.jpg"},
  {id:"kukirin-g2-max",brand:"KuKirin",name:"KuKirin G2 Max",price:649,power:"1000 W",battery:"48 V, 20 Ah",range:"Jusqu'à 70 km",badge:"LONGUE AUTONOMIE",image:"images/kukirin-g2-max.jpg"},
  {id:"kukirin-g2-master",brand:"KuKirin",name:"KuKirin G2 Master",price:839,power:"2 × 1000 W",battery:"52 V, 20,8 Ah",range:"Jusqu'à 70 km",badge:"DOUBLE MOTEUR",image:"images/kukirin-g2-master.jpg"},
  {id:"kukirin-g2-ultra",brand:"KuKirin",name:"KuKirin G2 Ultra",price:659,power:"2 × 800 W",battery:"48 V, 18 Ah",range:"Jusqu'à 55 km",badge:"DOUBLE MOTEUR",image:"images/kukirin-g2-ultra.jpg"},
  {id:"kukirin-g3",brand:"KuKirin",name:"KuKirin G3",price:null,power:"À confirmer",battery:"À confirmer",range:"À confirmer",badge:"",image:"images/kukirin-g3.jpg"},
  {id:"kukirin-g3-pro",brand:"KuKirin",name:"KuKirin G3 Pro",price:1159,power:"2 × 1200 W",battery:"52 V, 23,4 Ah",range:"Jusqu'à 80 km",badge:"DOUBLE MOTEUR",image:"images/kukirin-g3-pro.jpg"},
  {id:"kukirin-g4",brand:"KuKirin",name:"KuKirin G4",price:859,power:"2000 W",battery:"60 V, 20 Ah",range:"Jusqu'à 75 km",badge:"SPORT",image:"images/kukirin-g4.jpg"},
  {id:"kukirin-g4-ultra",brand:"KuKirin",name:"KuKirin G4 Ultra",price:969,power:"Selon version",battery:"Selon version",range:"Selon version",badge:"PREMIUM",image:"images/kukirin-g4-ultra.jpg"}
];

const CART_KEY = "trott-express-cart-v3";
let selectedBrand = "Tous";
let cart = loadCart();
let toastTimer;

const $ = id => document.getElementById(id);
const grid = $("product-grid");
const searchInput = $("search-input");
const sortSelect = $("sort-select");
const cartOverlay = $("cart-overlay");

function money(value) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0
  }).format(value);
}

function priceText(product) {
  if (product.price == null) return "Prix à confirmer";
  return (product.priceNote ? product.priceNote + " " : "") + money(product.price);
}

function safeText(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;",
    '"': "&quot;", "'": "&#39;"
  })[character]);
}

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
    return Array.isArray(saved)
      ? saved.filter(item => PRODUCTS.some(p => p.id === item.id))
          .map(item => ({ id: item.id, qty: Math.max(1, Number(item.qty) || 1) }))
      : [];
  } catch {
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch {
    // Le panier fonctionne encore temporairement si le stockage est indisponible.
  }
}

function showToast(message) {
  const toast = $("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function renderProducts() {
  if (!grid) return;

  const query = (searchInput?.value || "").trim().toLowerCase();
  let list = PRODUCTS.filter(product => {
    const matchesBrand = selectedBrand === "Tous" || product.brand === selectedBrand;
    const matchesSearch = `${product.brand} ${product.name}`.toLowerCase().includes(query);
    return matchesBrand && matchesSearch;
  });

  const sort = sortSelect?.value || "default";
  if (sort === "price-asc") {
    list.sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
  } else if (sort === "price-desc") {
    list.sort((a, b) => (b.price ?? -Infinity) - (a.price ?? -Infinity));
  } else if (sort === "name") {
    list.sort((a, b) => a.name.localeCompare(b.name, "fr"));
  }

  grid.innerHTML = list.map(product => `
    <article class="product-card">
      <div class="product-image">
        ${product.badge ? `<span class="product-badge">${safeText(product.badge)}</span>` : ""}
        <img src="${safeText(product.image)}"
             alt="${safeText(product.name)}"
             loading="lazy"
             onerror="this.onerror=null;this.src='https://placehold.co/600x400/f2f2f2/222?text='+encodeURIComponent('${safeText(product.name)}')">
      </div>
      <div class="product-info">
        <span class="product-brand">${safeText(product.brand)}</span>
        <h3>${safeText(product.name)}</h3>
        <p class="product-description">Trottinette électrique ${safeText(product.brand)}. Vérifie la version, le stock et les caractéristiques avant achat.</p>
        <div class="specs">
          <div class="spec"><span>Puissance</span><strong>${safeText(product.power)}</strong></div>
          <div class="spec"><span>Batterie</span><strong>${safeText(product.battery)}</strong></div>
          <div class="spec"><span>Autonomie annoncée</span><strong>${safeText(product.range)}</strong></div>
          <div class="spec"><span>Prix</span><strong>${product.price == null ? "À confirmer" : safeText(priceText(product))}</strong></div>
        </div>
        <div class="product-bottom">
          <div class="product-price">${product.price == null ? "À confirmer" : money(product.price)}
            <small>${product.priceNote ? "Prix de départ indicatif" : "Prix indicatif"}</small>
          </div>
        </div>
        <div class="product-actions">
          <button class="add-cart" type="button" data-add="${product.id}">AJOUTER AU PANIER</button>
          <button class="order-now" type="button" data-order="${product.id}">COMMANDER</button>
        </div>
      </div>
    </article>
  `).join("");

  $("product-total").textContent = `${list.length} modèle${list.length > 1 ? "s" : ""}`;
  $("no-results").hidden = list.length !== 0;
}

function setBrand(brand) {
  selectedBrand = brand;
  document.querySelectorAll(".brand-filter").forEach(button => {
    button.classList.toggle("active", button.dataset.brand === brand);
  });
  renderProducts();
  $("catalogue")?.scrollIntoView({ behavior: "smooth" });
}

function addToCart(id) {
  const product = PRODUCTS.find(item => item.id === id);
  if (!product) return;

  const existing = cart.find(item => item.id === id);
  if (existing) existing.qty += 1;
  else cart.push({ id, qty: 1 });

  saveCart();
  renderCart();
  showToast(`${product.name} ajouté au panier`);
}

function changeQty(id, amount) {
  const item = cart.find(entry => entry.id === id);
  if (!item) return;
  item.qty += amount;
  if (item.qty <= 0) cart = cart.filter(entry => entry.id !== id);
  saveCart();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  renderCart();
}

function cartDetails() {
  return cart.map(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    return product ? { ...product, qty: item.qty } : null;
  }).filter(Boolean);
}

function renderCart() {
  const details = cartDetails();
  $("cart-count").textContent = details.reduce((sum, item) => sum + item.qty, 0);

  if (!details.length) {
    $("cart-items").innerHTML = '<p class="cart-empty">Ton panier est vide.</p>';
    $("cart-total").textContent = money(0);
    return;
  }

  $("cart-items").innerHTML = details.map(item => `
    <div class="cart-item">
      <div>
        <h3>${safeText(item.name)}</h3>
        <p>${safeText(item.brand)} · ${item.price == null ? "Prix à confirmer" : money(item.price)}</p>
        <div class="quantity-controls">
          <button type="button" data-minus="${item.id}" aria-label="Diminuer la quantité">−</button>
          <span>${item.qty}</span>
          <button type="button" data-plus="${item.id}" aria-label="Augmenter la quantité">+</button>
          <button type="button" class="remove-item" data-remove="${item.id}">Retirer</button>
        </div>
      </div>
      <strong>${item.price == null ? "À confirmer" : money(item.price * item.qty)}</strong>
    </div>
  `).join("");

  const hasUnknownPrice = details.some(item => item.price == null);
  const total = details.reduce((sum, item) => sum + (item.price ?? 0) * item.qty, 0);
  $("cart-total").textContent = hasUnknownPrice ? `${money(total)} + prix à confirmer` : money(total);
}

function orderMessage(items) {
  if (!items.length) return "";

  const lines = items.map(item =>
    `- ${item.name} (${item.brand}) × ${item.qty} : ` +
    (item.price == null ? "prix à confirmer" : money(item.price * item.qty))
  );

  const hasUnknownPrice = items.some(item => item.price == null);
  const total = items.reduce((sum, item) => sum + (item.price ?? 0) * item.qty, 0);

  return [
    "Bonjour Trottinettes Express,",
    "Je souhaite commander / obtenir un devis pour :",
    ...lines,
    `Total indicatif des prix connus : ${money(total)}`,
    hasUnknownPrice ? "Certains prix restent à confirmer." : "",
    "",
    "Merci de confirmer la disponibilité, le prix final et la livraison."
  ].filter(Boolean).join("\n");
}

function openWhatsApp(message) {
  if (!message) {
    showToast("Ajoute d'abord un modèle au panier.");
    return;
  }
  const url = `https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function openEmail(subject, message) {
  if (!message) {
    showToast("Ajoute d'abord un modèle au panier.");
    return;
  }
  const url = `mailto:${SHOP.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  window.location.href = url;
}

function orderSingle(id) {
  const product = PRODUCTS.find(item => item.id === id);
  if (!product) return;

  const message = orderMessage([{ ...product, qty: 1 }]);
  openWhatsApp(message);
}

// Filtres et recherche
document.querySelectorAll(".brand-filter").forEach(button => {
  button.addEventListener("click", () => setBrand(button.dataset.brand));
});

document.querySelectorAll("[data-brand-button]").forEach(button => {
  button.addEventListener("click", () => setBrand(button.dataset.brandButton));
});

searchInput?.addEventListener("input", renderProducts);
sortSelect?.addEventListener("change", renderProducts);

// Boutons produits : ajout au panier ou commande directe
grid?.addEventListener("click", event => {
  const addButton = event.target.closest("[data-add]");
  const orderButton = event.target.closest("[data-order]");
  if (addButton) addToCart(addButton.dataset.add);
  if (orderButton) orderSingle(orderButton.dataset.order);
});

// Contrôles du panier
$("open-cart")?.addEventListener("click", () => {
  cartOverlay.hidden = false;
});
$("close-cart")?.addEventListener("click", () => {
  cartOverlay.hidden = true;
});
cartOverlay?.addEventListener("click", event => {
  if (event.target === cartOverlay) cartOverlay.hidden = true;
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && cartOverlay) cartOverlay.hidden = true;
});

$("cart-items")?.addEventListener("click", event => {
  const minus = event.target.closest("[data-minus]");
  const plus = event.target.closest("[data-plus]");
  const remove = event.target.closest("[data-remove]");
  if (minus) changeQty(minus.dataset.minus, -1);
  if (plus) changeQty(plus.dataset.plus, 1);
  if (remove) removeFromCart(remove.dataset.remove);
});

$("checkout-whatsapp")?.addEventListener("click", () => {
  openWhatsApp(orderMessage(cartDetails()));
});
$("checkout-email")?.addEventListener("click", () => {
  openEmail("Commande Trottinettes Express", orderMessage(cartDetails()));
});

// Liens de contact configurés automatiquement
const contactWhatsApp = $("contact-whatsapp");
if (contactWhatsApp) contactWhatsApp.href = `https://wa.me/${SHOP.whatsapp}`;

const contactEmail = $("contact-email");
if (contactEmail) contactEmail.href = `mailto:${SHOP.email}`;

$("year").textContent = new Date().getFullYear();

renderProducts();
renderCart();
