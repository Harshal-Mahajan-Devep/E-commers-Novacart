const products = [
  {
    id: 1,
    name: "Aura Wireless Headphones",
    category: "Electronics",
    price: 4999,
    originalPrice: 7999,
    discount: 38,
    rating: 4.8,
    reviews: 245,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=85",
    badge: "Best Seller",
    stock: 18,
  },
  {
    id: 2,
    name: "Luna Smart Watch",
    category: "Electronics",
    price: 6999,
    originalPrice: 9999,
    discount: 30,
    rating: 4.7,
    reviews: 182,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=85",
    badge: "New",
    stock: 12,
  },
  {
    id: 3,
    name: "Urban Runner Sneakers",
    category: "Footwear",
    price: 3499,
    originalPrice: 5499,
    discount: 36,
    rating: 4.9,
    reviews: 312,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=85",
    badge: "Popular",
    stock: 21,
  },
  {
    id: 4,
    name: "Minimal Leather Backpack",
    category: "Accessories",
    price: 2799,
    originalPrice: 3999,
    discount: 30,
    rating: 4.6,
    reviews: 121,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=85",
    badge: "New",
    stock: 30,
  },
  {
    id: 5,
    name: "Cloud Cotton Overshirt",
    category: "Fashion",
    price: 2199,
    originalPrice: 3199,
    discount: 31,
    rating: 4.7,
    reviews: 89,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=85",
    badge: "New",
    stock: 26,
  },
  {
    id: 6,
    name: "Ceramic Home Lamp",
    category: "Home",
    price: 1899,
    originalPrice: 2799,
    discount: 32,
    rating: 4.5,
    reviews: 76,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=85",
    badge: "",
    stock: 17,
  },
  {
    id: 7,
    name: "Studio Mechanical Keyboard",
    category: "Electronics",
    price: 4299,
    originalPrice: 5999,
    discount: 28,
    rating: 4.8,
    reviews: 204,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=85",
    badge: "Best Seller",
    stock: 9,
  },
  {
    id: 8,
    name: "Satin Glow Skincare Set",
    category: "Beauty",
    price: 2499,
    originalPrice: 3599,
    discount: 31,
    rating: 4.7,
    reviews: 158,
    image:
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=800&q=85",
    badge: "New",
    stock: 22,
  },
  {
    id: 9,
    name: "Classic Chrono Watch",
    category: "Accessories",
    price: 5799,
    originalPrice: 8499,
    discount: 32,
    rating: 4.6,
    reviews: 98,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=85",
    badge: "",
    stock: 11,
  },
  {
    id: 10,
    name: "Everyday Linen Shirt",
    category: "Fashion",
    price: 1599,
    originalPrice: 2299,
    discount: 30,
    rating: 4.5,
    reviews: 63,
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=85",
    badge: "",
    stock: 32,
  },
  {
    id: 11,
    name: "Soft Lounge Chair",
    category: "Home",
    price: 8999,
    originalPrice: 12999,
    discount: 31,
    rating: 4.8,
    reviews: 47,
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=85",
    badge: "Premium",
    stock: 6,
  },
  {
    id: 12,
    name: "Daily Glow Face Kit",
    category: "Beauty",
    price: 1799,
    originalPrice: 2499,
    discount: 28,
    rating: 4.6,
    reviews: 112,
    image:
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=800&q=85",
    badge: "",
    stock: 19,
  },
  {
    id: 13,
    name: "Canvas Street Sneakers",
    category: "Footwear",
    price: 2999,
    originalPrice: 4499,
    discount: 33,
    rating: 4.7,
    reviews: 173,
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=85",
    badge: "New",
    stock: 14,
  },
  {
    id: 14,
    name: "Compact Travel Camera",
    category: "Electronics",
    price: 12999,
    originalPrice: 16999,
    discount: 24,
    rating: 4.9,
    reviews: 86,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=85",
    badge: "Premium",
    stock: 7,
  },
  {
    id: 15,
    name: "Soft Knit Tote Bag",
    category: "Accessories",
    price: 1999,
    originalPrice: 2999,
    discount: 33,
    rating: 4.4,
    reviews: 54,
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=800&q=85",
    badge: "",
    stock: 24,
  },
  {
    id: 16,
    name: "Nordic Desk Organizer",
    category: "Home",
    price: 999,
    originalPrice: 1499,
    discount: 33,
    rating: 4.5,
    reviews: 71,
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=800&q=85",
    badge: "",
    stock: 40,
  },
  {
    id: 17,
    name: "Essential Denim Jacket",
    category: "Fashion",
    price: 3299,
    originalPrice: 4699,
    discount: 30,
    rating: 4.8,
    reviews: 132,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=85",
    badge: "Popular",
    stock: 13,
  },
  {
    id: 18,
    name: "Pure Scent Candle Set",
    category: "Beauty",
    price: 1299,
    originalPrice: 1899,
    discount: 32,
    rating: 4.6,
    reviews: 93,
    image:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=85",
    badge: "",
    stock: 35,
  },
  {
    id: 19,
    name: "Everyday Running Shoes",
    category: "Footwear",
    price: 3899,
    originalPrice: 5999,
    discount: 35,
    rating: 4.8,
    reviews: 221,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=85",
    badge: "Best Seller",
    stock: 16,
  },
  {
    id: 20,
    name: "Minimal Desk Speaker",
    category: "Electronics",
    price: 2599,
    originalPrice: 3699,
    discount: 30,
    rating: 4.5,
    reviews: 67,
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=85",
    badge: "New",
    stock: 20,
  },
];

let cart = JSON.parse(localStorage.getItem("novacart_cart") || "[]");
let wishlist = JSON.parse(localStorage.getItem("novacart_wishlist") || "[]");
let activeFilter = "All",
  visibleCount = 12,
  couponApplied = false;
let saleEnd = Date.now() + 1000 * 60 * 60 * 8 + 1000 * 60 * 32;

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const money = (n) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);

function save() {
  localStorage.setItem("novacart_cart", JSON.stringify(cart));
  localStorage.setItem("novacart_wishlist", JSON.stringify(wishlist));
}
function toast(message, type = "success") {
  const box = document.createElement("div");
  box.className = "toast-custom";
  box.innerHTML = `<i class="fa-solid ${type === "error" ? "fa-circle-exclamation" : "fa-circle-check"}"></i><span>${message}</span>`;
  $("#toastContainer").appendChild(box);
  setTimeout(() => box.remove(), 2600);
}
function stars(r) {
  return "★★★★★"
    .split("")
    .map((s, i) => (i < Math.round(r) ? s : "☆"))
    .join("");
}
function productCard(p) {
  const wished = wishlist.includes(p.id);
  return `<article class="product-card">
  <div class="product-media">
   ${p.discount ? `<span class="badge-sale">${p.discount}% OFF</span>` : ""}
   ${p.badge === "New" ? `<span class="badge-new">NEW</span>` : ""}
   <div class="product-actions">
    <button class="product-action ${wished ? "active" : ""}" data-wish="${p.id}" aria-label="Wishlist"><i class="${wished ? "fa-solid" : "fa-regular"} fa-heart"></i></button>
   </div>
   <img loading="lazy" src="${p.image}" alt="${p.name}">
   <button class="quick-view" data-quick="${p.id}">Quick view</button>
  </div>
  <div class="product-info">
   <div class="product-category">${p.category}</div>
   <div class="product-name" title="${p.name}">${p.name}</div>
   <div class="rating">${stars(p.rating)} <span>${p.rating} (${p.reviews})</span></div>
   <div class="price-row"><span class="price">${money(p.price)}</span><span class="old-price">${money(p.originalPrice)}</span><span class="discount">${p.discount}% off</span></div>
   <button class="add-cart" data-add="${p.id}"><i class="fa-solid fa-plus"></i> Add to cart</button>
  </div>
 </article>`;
}
function filteredProducts() {
  let arr = products.filter(
    (p) => activeFilter === "All" || p.category === activeFilter,
  );
  const search = window.shopSearch || "";
  if (search)
    arr = arr.filter((p) =>
      (p.name + " " + p.category).toLowerCase().includes(search.toLowerCase()),
    );
  const sort = $("#sortSelect")?.value || "featured";
  if (sort === "low") arr.sort((a, b) => a.price - b.price);
  if (sort === "high") arr.sort((a, b) => b.price - a.price);
  if (sort === "rating") arr.sort((a, b) => b.rating - a.rating);
  if (sort === "newest") arr.sort((a, b) => b.id - a.id);
  return arr;
}
function renderProducts() {
  const arr = filteredProducts(),
    visible = arr.slice(0, visibleCount);
  $("#productGrid").innerHTML = visible.length
    ? visible.map(productCard).join("")
    : `<div class="empty-state" style="grid-column:1/-1"><i class="fa-solid fa-box-open"></i><p>No products found.</p></div>`;
  $("#loadMore").style.display =
    visible.length < arr.length ? "inline-flex" : "none";
}
function renderSale() {
  $("#saleProducts").innerHTML = products.slice(0, 4).map(productCard).join("");
}
function renderCart() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  $("#cartCount").textContent = count;
  $("#wishlistCount").textContent = wishlist.length;
  const box = $("#cartItems");
  if (!cart.length) {
    box.innerHTML = `<div class="empty-state"><i class="fa-solid fa-bag-shopping"></i><p>Your bag is empty.<br>Add something you love.</p><a href="#shop" class="btn-secondary-custom">Start shopping</a></div>`;
  } else
    box.innerHTML = cart
      .map((item) => {
        const p = products.find((x) => x.id === item.id);
        return `<div class="drawer-item">
 <img src="${p.image}" alt="${p.name}"><div><h4>${p.name}</h4><p>${money(p.price)}</p><div class="qty-control"><button data-qty="${p.id}" data-dir="-1">−</button><span>${item.qty}</span><button data-qty="${p.id}" data-dir="1">+</button></div></div>
 <button class="remove-item" data-remove="${p.id}"><i class="fa-solid fa-trash-can"></i></button></div>`;
      })
      .join("");
  const subtotal = cart.reduce((s, i) => {
    const p = products.find((x) => x.id === i.id);
    return s + p.price * i.qty;
  }, 0);
  const shipping = subtotal === 0 ? 0 : subtotal >= 999 ? 0 : 99,
    discount = couponApplied ? Math.round(subtotal * 0.1) : 0,
    total = Math.max(0, subtotal + shipping - discount);
  $("#drawerSubtotal").textContent = money(subtotal);
  $("#drawerShipping").textContent = shipping ? money(shipping) : "FREE";
  $("#drawerTotal").textContent = money(total);
}
function renderWishlist() {
  const box = $("#wishlistItems");
  if (!wishlist.length) {
    box.innerHTML = `<div class="empty-state"><i class="fa-regular fa-heart"></i><p>Your wishlist is empty.</p><a href="#shop" class="btn-secondary-custom">Discover products</a></div>`;
    return;
  }
  box.innerHTML = wishlist
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean)
    .map(
      (p) =>
        `<div class="drawer-item"><img src="${p.image}" alt="${p.name}"><div><h4>${p.name}</h4><p>${money(p.price)}</p><button class="add-cart" style="margin-top:6px" data-add="${p.id}">Add to cart</button></div><button class="remove-item" data-wish="${p.id}"><i class="fa-solid fa-xmark"></i></button></div>`,
    )
    .join("");
}
function addCart(id) {
  const item = cart.find((x) => x.id === id);
  item ? item.qty++ : cart.push({ id, qty: 1 });
  save();
  renderCart();
  toast("Product added to cart");
}
function toggleWish(id) {
  wishlist.includes(id)
    ? (wishlist = wishlist.filter((x) => x !== id))
    : (wishlist.push(id), toast("Added to wishlist"));
  if (!wishlist.includes(id)) toast("Removed from wishlist", "error");
  save();
  renderProducts();
  renderSale();
  renderCart();
  renderWishlist();
}
function openDrawer(id) {
  $("#" + id).classList.add("open");
  document.body.classList.add("drawer-open");
}
function closeDrawers() {
  $$(".side-drawer").forEach((x) => x.classList.remove("open"));
  document.body.classList.remove("drawer-open");
}
function openProduct(id) {
  const p = products.find((x) => x.id === id);
  if (!p) return;
  $("#modalProduct").innerHTML =
    `<div class="modal-product"><div class="modal-gallery"><img src="${p.image}" alt="${p.name}"></div><div class="modal-info"><span class="eyebrow">${p.category}</span><h2>${p.name}</h2><div class="rating">${stars(p.rating)} <span>${p.rating} · ${p.reviews} reviews</span></div><p>Designed for everyday performance with premium materials, thoughtful details and a clean modern finish.</p><div class="modal-price">${money(p.price)} <del style="font-size:13px;color:#999;font-weight:500">${money(p.originalPrice)}</del></div><div class="variant-title">COLOR</div><div class="variant-row"><button class="variant active">Black</button><button class="variant">Silver</button><button class="variant">White</button></div><div class="variant-title">QUANTITY</div><div class="qty-control"><button id="modalMinus">−</button><span id="modalQty">1</span><button id="modalPlus">+</button></div><button class="btn-primary-custom full-btn" id="modalAdd">Add to cart <i class="fa-solid fa-bag-shopping"></i></button></div></div>`;
  let q = 1;
  $("#modalMinus").onclick = () => {
    q = Math.max(1, q - 1);
    $("#modalQty").textContent = q;
  };
  $("#modalPlus").onclick = () => {
    $("#modalQty").textContent = ++q;
  };
  $("#modalAdd").onclick = () => {
    for (let i = 0; i < q; i++) addCart(id);
    bootstrap.Modal.getOrCreateInstance($("#productModal")).hide();
  };
  bootstrap.Modal.getOrCreateInstance($("#productModal")).show();
}
function renderSearch(q = "") {
  const results = products
    .filter((p) =>
      (p.name + " " + p.category).toLowerCase().includes(q.toLowerCase()),
    )
    .slice(0, 9);
  $("#searchResults").innerHTML = q
    ? results
        .map(
          (p) =>
            `<div class="search-result" data-quick="${p.id}"><img src="${p.image}" alt=""><div><strong>${p.name}</strong><small>${p.category}</small><span>${money(p.price)}</span></div></div>`,
        )
        .join("")
    : `<div class="empty-state" style="grid-column:1/-1;padding:35px"><p>Start typing to search products.</p></div>`;
}
function startCountdown() {
  const tick = () => {
    let diff = Math.max(0, saleEnd - Date.now());
    const d = Math.floor(diff / 86400000);
    diff %= 86400000;
    const h = Math.floor(diff / 3600000);
    diff %= 3600000;
    const m = Math.floor(diff / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    $("#days").textContent = String(d).padStart(2, "0");
    $("#hours").textContent = String(h).padStart(2, "0");
    $("#minutes").textContent = String(m).padStart(2, "0");
    $("#seconds").textContent = String(s).padStart(2, "0");
  };
  tick();
  setInterval(tick, 1000);
}
document.addEventListener("click", (e) => {
  const add = e.target.closest("[data-add]");
  if (add) {
    addCart(+add.dataset.add);
    return;
  }
  const wish = e.target.closest("[data-wish]");
  if (wish) {
    toggleWish(+wish.dataset.wish);
    return;
  }
  const quick = e.target.closest("[data-quick]");
  if (quick) {
    openProduct(+quick.dataset.quick);
    return;
  }
  const rem = e.target.closest("[data-remove]");
  if (rem) {
    cart = cart.filter((x) => x.id !== +rem.dataset.remove);
    save();
    renderCart();
    toast("Removed from cart", "error");
    return;
  }
  const qty = e.target.closest("[data-qty]");
  if (qty) {
    const id = +qty.dataset.qty,
      item = cart.find((x) => x.id === id);
    if (item) {
      item.qty += +qty.dataset.dir;
      if (item.qty <= 0) cart = cart.filter((x) => x.id !== id);
      save();
      renderCart();
    }
    return;
  }
  const cat = e.target.closest(".category-card");
  if (cat) {
    activeFilter = cat.dataset.category;
    $$(".filter-chip").forEach((x) =>
      x.classList.toggle("active", x.dataset.filter === activeFilter),
    );
    visibleCount = 12;
    renderProducts();
    document.querySelector("#shop").scrollIntoView({ behavior: "smooth" });
    return;
  }
  const chip = e.target.closest(".filter-chip");
  if (chip) {
    activeFilter = chip.dataset.filter;
    $$(".filter-chip").forEach((x) => x.classList.toggle("active", x === chip));
    visibleCount = 12;
    renderProducts();
    return;
  }
  const close = e.target.closest("[data-close-drawer]");
  if (close) closeDrawers();
});
$("#cartNavBtn").onclick = () => {
  renderCart();
  openDrawer("cartDrawer");
};
$("#wishlistNavBtn").onclick = () => {
  renderWishlist();
  openDrawer("wishlistDrawer");
};
$("#mobileCartBottom").onclick = () => {
  renderCart();
  openDrawer("cartDrawer");
};
$("#mobileWishlistBottom").onclick = () => {
  renderWishlist();
  openDrawer("wishlistDrawer");
};
$("#searchBtn").onclick = () => {
  $("#searchOverlay").classList.add("open");
  $("#searchInput").focus();
  renderSearch();
};
$("#mobileSearchBottom").onclick = () => {
  $("#searchOverlay").classList.add("open");
  $("#searchInput").focus();
  renderSearch();
};
$("#closeSearch").onclick = () => $("#searchOverlay").classList.remove("open");
$("#searchInput").addEventListener("input", (e) =>
  renderSearch(e.target.value),
);
$$(".search-suggestions button").forEach(
  (b) =>
    (b.onclick = () => {
      $("#searchInput").value = b.dataset.search;
      renderSearch(b.dataset.search);
    }),
);
$("#mobileMenuBtn").onclick = () => $("#mobileMenu").classList.toggle("open");
$("#themeBtn").onclick = () => toggleTheme();
$("#mobileThemeBtn").onclick = () => toggleTheme();
function toggleTheme() {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "novacart_theme",
    document.body.classList.contains("dark") ? "dark" : "light",
  );
  const icon = document.querySelector("#themeBtn i");
  if (icon)
    icon.className = document.body.classList.contains("dark")
      ? "fa-regular fa-sun"
      : "fa-regular fa-moon";
}
$("#accountBtn").onclick = () =>
  bootstrap.Modal.getOrCreateInstance($("#accountModal")).show();
$("#loginForm").onsubmit = (e) => {
  e.preventDefault();
  bootstrap.Modal.getOrCreateInstance($("#accountModal")).hide();
  toast("Demo sign in successful");
};
$("#sortSelect").onchange = () => renderProducts();
$("#clearFilters").onclick = (e) => {
  e.preventDefault();
  activeFilter = "All";
  window.shopSearch = "";
  $("#sortSelect").value = "featured";
  $$(".filter-chip").forEach((x, i) => x.classList.toggle("active", i === 0));
  visibleCount = 12;
  renderProducts();
};
$("#loadMore").onclick = () => {
  visibleCount += 4;
  renderProducts();
};
$("#couponBtn").onclick = () => {
  const code = $("#couponInput").value.trim().toUpperCase();
  if (code === "NOVA10") {
    couponApplied = true;
    renderCart();
    toast("10% coupon applied");
  } else toast("Use coupon NOVA10", "error");
};
$("#checkoutBtn").onclick = () => {
  if (!cart.length) {
    toast("Your cart is empty", "error");
    return;
  }
  toast("Checkout is ready for backend integration");
};
$("#newsletterForm").onsubmit = (e) => {
  e.preventDefault();
  const email = $("#newsletterEmail").value.trim();
  if (!email) return;
  toast("You're successfully subscribed!");
  e.target.reset();
};
window.addEventListener("scroll", () => {
  $("#siteHeader").classList.toggle("scrolled", scrollY > 20);
  $("#backTop").classList.toggle("show", scrollY > 500);
});
$("#backTop").onclick = () => scrollTo({ top: 0, behavior: "smooth" });
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    $("#searchOverlay").classList.remove("open");
    closeDrawers();
  }
});
if (localStorage.getItem("novacart_theme") === "dark") {
  document.body.classList.add("dark");
  const icon = $("#themeBtn i");
  if (icon) icon.className = "fa-regular fa-sun";
}
renderProducts();
renderSale();
renderCart();
renderWishlist();
renderSearch();
startCountdown();

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initial Page Load Entrance
  document.body.classList.add("nc-page-ready");

  // 2. Add reveal classes to sections and cards
  const revealTargets = [
    ".section-head",
    ".sale-header",
    ".promo-card",
    ".newsletter-card",
    ".category-card",
    ".benefit-card",
    ".review-card",
    ".footer-top",
    ".hero-card",
  ];

  revealTargets.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.classList.add("nc-reveal");
    });
  });

  // 3. Smooth Intersection Observer for Scroll Animations
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("nc-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -30px 0px" },
  );

  document
    .querySelectorAll(".nc-reveal, .nc-reveal-left, .nc-reveal-right")
    .forEach((el) => {
      observer.observe(el);
    });

  // 4. Stagger Animation for Dynamic Product Grids
  const refreshGridAnimations = () => {
    ["#productGrid", "#saleProducts"].forEach((id) => {
      const grid = document.querySelector(id);
      if (grid) {
        grid.classList.remove("nc-stagger");
        void grid.offsetWidth; // Force Reflow
        grid.classList.add("nc-stagger");
      }
    });
  };

  // Re-run stagger on filter or initial render
  refreshGridAnimations();

  const gridObserver = new MutationObserver(() => refreshGridAnimations());
  ["#productGrid", "#saleProducts"].forEach((id) => {
    const el = document.querySelector(id);
    if (el) gridObserver.observe(el, { childList: true });
  });
});
