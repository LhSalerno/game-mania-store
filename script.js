// ================================================
// GAME MANIA - SCRIPT PRINCIPAL E INTERATIVIDADE
// ================================================

document.addEventListener("DOMContentLoaded", () => {
  // Chave do localStorage para salvar o carrinho
  const CART_STORAGE_KEY = "gamemania_cart";
  let cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];

  // Elementos Globais da Interface
  const cartIconBtn = document.querySelector('a[title="Carrinho"]');
  const searchInput = document.querySelector(".search-box input");
  const searchForm = document.querySelector(".search-box");

  // ------------------------------------------------
  // 1. CRIAR E RENDERIZAR A MODAL DO CARRINHO
  // ------------------------------------------------
  function createCartModal() {
    if (document.getElementById("cartModal")) return;

    const modalHTML = `
      <div class="modal fade" id="cartModal" tabindex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content text-white" style="background-color: #1a1d2e; border: 1px solid #00f0ff;">
            <div class="modal-header border-bottom border-secondary">
              <h5 class="modal-title" id="cartModalLabel"><i class="fa-solid fa-cart-shopping text-info me-2"></i>Seu Carrinho de Compras</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Fechar"></button>
            </div>
            <div class="modal-body" id="cartModalBody">
              <!-- Conteúdo renderizado via JS -->
            </div>
            <div class="modal-footer border-top border-secondary d-flex justify-content-between">
              <h5 class="mb-0">Total: <span id="cartTotalValue" class="text-info">R$ 0,00</span></h5>
              <div>
                <button type="button" class="btn btn-outline-light me-2" data-bs-dismiss="modal">Continuar Comprando</button>
                <button type="button" class="btn btn-info fw-bold" id="checkoutBtn"><i class="fa-solid fa-credit-card me-1"></i> Finalizar Compra</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML("beforeend", modalHTML);

    // Evento do botão "Finalizar Compra"
    document.getElementById("checkoutBtn")?.addEventListener("click", () => {
      if (cart.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
      }
      alert("Parabéns! Sua compra foi realizada com sucesso no Game Mania.");
      cart = [];
      saveCart();
      renderCartItems();

      const modalElement = document.getElementById("cartModal");
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      modalInstance?.hide();
    });
  }

  // ------------------------------------------------
  // 2. RENDERIZAR OS ITENS DENTRO DA MODAL
  // ------------------------------------------------
  function renderCartItems() {
    const modalBody = document.getElementById("cartModalBody");
    const totalElement = document.getElementById("cartTotalValue");

    if (!modalBody) return;

    if (cart.length === 0) {
      modalBody.innerHTML = `
        <div class="text-center py-4 text-muted">
          <i class="fa-solid fa-basket-shopping fa-3x mb-3"></i>
          <p class="fs-5 mb-0">Seu carrinho está vazio no momento.</p>
        </div>
      `;
      if (totalElement) totalElement.textContent = "R$ 0,00";
      return;
    }

    let itemsHTML = '<div class="list-group list-group-flush bg-transparent">';
    let grandTotal = 0;

    cart.forEach((item, index) => {
      const itemTotal = item.price * item.quantity;
      grandTotal += itemTotal;

      itemsHTML += `
        <div class="list-group-item bg-transparent text-white d-flex align-items-center justify-content-between border-secondary py-3">
          <div class="d-flex align-items-center" style="max-width: 50%;">
            <img src="${item.image}" alt="${item.title}" style="width: 50px; height: 50px; object-fit: contain;" class="me-3 rounded bg-dark p-1">
            <div>
              <h6 class="mb-0 text-truncate">${item.title}</h6>
              <small class="text-muted">R$ ${item.price.toFixed(2).replace(".", ",")} un.</small>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <button class="btn btn-sm btn-outline-secondary text-white decrease-qty me-2" data-index="${index}">-</button>
            <span class="fw-bold px-2">${item.quantity}</span>
            <button class="btn btn-sm btn-outline-secondary text-white increase-qty ms-2 me-3" data-index="${index}">+</button>
            <span class="fw-bold text-info me-3" style="min-width: 90px; text-align: right;">R$ ${itemTotal.toFixed(2).replace(".", ",")}</span>
            <button class="btn btn-sm btn-outline-danger remove-item" data-index="${index}" title="Remover"><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>
      `;
    });

    itemsHTML += "</div>";
    modalBody.innerHTML = itemsHTML;

    if (totalElement) {
      totalElement.textContent = `R$ ${grandTotal.toFixed(2).replace(".", ",")}`;
    }

    // Ações dos botões (+, - e Lixeira)
    modalBody.querySelectorAll(".increase-qty").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const idx = e.target.closest("button").dataset.index;
        cart[idx].quantity += 1;
        saveCart();
        renderCartItems();
      });
    });

    modalBody.querySelectorAll(".decrease-qty").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const idx = e.target.closest("button").dataset.index;
        if (cart[idx].quantity > 1) {
          cart[idx].quantity -= 1;
        } else {
          cart.splice(idx, 1);
        }
        saveCart();
        renderCartItems();
      });
    });

    modalBody.querySelectorAll(".remove-item").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const idx = e.target.closest("button").dataset.index;
        cart.splice(idx, 1);
        saveCart();
        renderCartItems();
      });
    });
  }

  // ------------------------------------------------
  // 3. ATUALIZAR NÚMERO/BADGE DO ÍCONE DO CARRINHO
  // ------------------------------------------------
  function updateCartCounter() {
    if (!cartIconBtn) return;

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    let badge = cartIconBtn.querySelector(".cart-badge");
    if (!badge) {
      badge = document.createElement("span");
      badge.className =
        "cart-badge badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle";
      cartIconBtn.classList.add("position-relative");
      cartIconBtn.appendChild(badge);
    }

    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? "inline-block" : "none";
  }

  function saveCart() {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    updateCartCounter();
  }

  // ------------------------------------------------
  // 4. CONFIGURAR OS BOTÕES "COMPRAR" (COM PROTEÇÃO)
  // ------------------------------------------------
  function setupBuyButtons() {
    const buyButtons = document.querySelectorAll(".btn-buy");

    buyButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const productCard = e.target.closest(".product-card");
        if (!productCard) return;

        const title =
          productCard.querySelector(".product-title")?.textContent.trim() ||
          "Produto";
        const priceText =
          productCard.querySelector(".product-price")?.textContent.trim() ||
          "R$ 0,00";
        const imgSrc =
          productCard.querySelector("img")?.getAttribute("src") || "";

        // Converte o texto do preço para um número seguro
        let rawPrice = priceText
          .replace("R$", "")
          .replace(/\./g, "")
          .replace(",", ".")
          .trim();
        let price = parseFloat(rawPrice);

        // Se o preço não for um número válido, usa 0 como valor padrão
        if (isNaN(price)) {
          price = 0;
        }

        const existingItem = cart.find((item) => item.title === title);

        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          cart.push({
            title: title,
            price: price,
            image: imgSrc,
            quantity: 1,
          });
        }

        saveCart();

        // Animação/Feedback visual no botão
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fa-solid fa-check me-1"></i> Adicionado!';
        button.classList.replace("btn-buy", "btn-success");

        setTimeout(() => {
          button.innerHTML = originalText;
          button.classList.replace("btn-success", "btn-buy");
        }, 1200);
      });
    });
  }

  // ------------------------------------------------
  // 5. CONFIGURAR FILTRO DOS CARDS DE DESTAQUE (HOME)
  // ------------------------------------------------
  function setupPromoFilters() {
    const promoCards = document.querySelectorAll(".promo-card-btn");
    const produtos = document.querySelectorAll(".produto-item");

    if (promoCards.length === 0 || produtos.length === 0) return;

    promoCards.forEach((card) => {
      card.addEventListener("click", () => {
        const filtro = card.getAttribute("data-filter");

        // Alterna o destaque visual dos cards de filtro
        const isActive = card.classList.contains("active-filter");

        promoCards.forEach((c) => {
          c.classList.remove("active-filter");
          c.style.borderColor = "#2a2d42";
        });

        if (isActive) {
          // Se já estava ativo, des clica e mostra TUDO de novo
          produtos.forEach((produto) => (produto.style.display = "block"));
          return;
        }

        card.classList.add("active-filter");
        card.style.borderColor = "#00f0ff"; // Cor de destaque (ciano)

        // Filtra os produtos na tela
        produtos.forEach((produto) => {
          const categorias = produto.getAttribute("data-categoria") || "";

          if (categorias.includes(filtro)) {
            produto.style.display = "block";
          } else {
            produto.style.display = "none";
          }
        });
      });
    });
  }

  // ------------------------------------------------
  // 6. BUSCA EM TEMPO REAL
  // ------------------------------------------------
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase().trim();
      const productCards = document.querySelectorAll(".product-card");

      productCards.forEach((card) => {
        const title =
          card.querySelector(".product-title")?.textContent.toLowerCase() || "";
        const colContainer = card.closest(
          ".col-6, .col-md-4, .col-lg-3, .produto-item",
        );

        if (title.includes(query)) {
          if (colContainer) colContainer.style.display = "block";
        } else {
          if (colContainer) colContainer.style.display = "none";
        }
      });
    });

    if (searchForm) {
      searchForm.addEventListener("submit", (e) => e.preventDefault());
    }
  }

  // ------------------------------------------------
  // 7. INICIALIZAÇÃO E ABERTURA DA MODAL DO CARRINHO
  // ------------------------------------------------
  createCartModal();
  updateCartCounter();
  setupBuyButtons();
  setupPromoFilters();

  if (cartIconBtn) {
    cartIconBtn.addEventListener("click", (e) => {
      e.preventDefault();
      renderCartItems();

      const modalElement = document.getElementById("cartModal");
      if (modalElement && typeof bootstrap !== "undefined") {
        const cartModal = bootstrap.Modal.getOrCreateInstance(modalElement);
        cartModal.show();
      }
    });
  }
});
