// ================================================
// GAME MANIA - SCRIPT PRINCIPAL E ARQUITETURA SPA
// ================================================

// BANCO DE DADOS CENTRALIZADO DE PRODUTOS
const PRODUCTS_DB = [
  // JOGOS
  {
    id: 1,
    title: "Need for Speed Heat",
    price: 199.9,
    priceFormatted: "R$ 199,90",
    image: "Img.resu/Need.JPG",
    category: "jogo lancamentos ofertas ps4 ps5 plataforma-pc corridas",
    desc: "Need for Speed Heat te coloca na corrida urbana onde a lei desaparece quando o sol se põe. Dispute corridas diurnas e arrisque tudo nas noites de corrida clandestina.",
    specs:
      "Desenvolvedora: EA Games | Plataforma: PS4 / PS5 / PC | Idioma: Português BR",
  },
  {
    id: 2,
    title: "Resident Evil 3 Remake",
    price: 249.9,
    priceFormatted: "R$ 249,90",
    image: "Img.resu/resident.jpg",
    category: "jogo lancamentos ps5 xbox plataforma-pc terror survival",
    desc: "Enfrente os horrores de Raccoon City neste clássico do survival horror totalmente reimaginado para a nova geração com gráficos fidedignos e áudio 3D imersivo.",
    specs:
      "Desenvolvedora: Capcom | Plataforma: PS5 / Xbox Series X / PC | Idioma: Português BR",
  },
  {
    id: 3,
    title: "Far Cry 6",
    price: 179.9,
    priceFormatted: "R$ 179,90",
    image: "Img.resu/farcry.jpg",
    category: "jogo ofertas ps4 ps5 xbox acao tiro",
    desc: "Explore um mundo aberto paradisíaco, porém cruel. Lidere uma revolução para libertar uma ilha tropical das garras de um ditador impiedoso.",
    specs:
      "Desenvolvedora: Ubisoft | Plataforma: PS4 / PS5 / Xbox | Idioma: Português BR",
  },
  {
    id: 4,
    title: "Marvel's Vingadores",
    price: 149.9,
    priceFormatted: "R$ 149,90",
    image: "Img.resu/vingadores.jpg",
    category: "jogo ofertas ps4 ps5 plataforma-pc herois",
    desc: "Reúna a equipe dos heróis mais poderosos da Terra, domine habilidades extraordinárias e defenda o mundo contra ameaças crescentes.",
    specs:
      "Desenvolvedora: Crystal Dynamics | Plataforma: PS4 / PS5 / PC | Idioma: Português BR",
  },
  {
    id: 5,
    title: "God of War Ragnarök",
    price: 299.9,
    priceFormatted: "R$ 299,90",
    image: "https://m.media-amazon.com/images/I/81I3Rk9x91L._AC_SX385_.jpg",
    category: "jogo lancamentos ps5 ps4 acao aventura kratos",
    desc: "Embarque numa jornada épica e emocionante com Kratos e Atreus enquanto lutam entre o apego e a libertação nos Nove Reinos.",
    specs:
      "Desenvolvedora: Santa Monica Studio | Plataforma: PS4 / PS5 | Idioma: Português BR",
  },

  // CELULARES & TABLETS
  {
    id: 6,
    title: "iPhone 15 Pro Max 256GB",
    price: 7499.9,
    priceFormatted: "R$ 7.499,90",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80",
    category:
      "celular celular-gamer smartphone apple iphone ofertas lancamentos",
    desc: "Design em titânio de nível aeroespacial, chip A17 Pro revolucionário, botão de Ação personalizável e o sistema de câmera mais poderoso em um iPhone.",
    specs:
      'Tela: Super Retina XDR 6.7" 120Hz | Armazenamento: 256GB | Chip: A17 Pro',
  },
  {
    id: 7,
    title: "Samsung Galaxy S24 Ultra 512GB",
    price: 6899.0,
    priceFormatted: "R$ 6.899,00",
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=300&q=80",
    category: "celular celular-gamer smartphone android samsung ofertas",
    desc: "O ápice da tecnologia móvel com inteligência artificial Galaxy AI, S Pen embutida, câmera de 200MP e estrutura resistente em titânio.",
    specs:
      'Tela: Dynamic AMOLED 2X 6.8" | RAM: 12GB | Câmera: 200MP | Bateria: 5000mAh',
  },

  // NOTEBOOKS & PC GAMER
  {
    id: 8,
    title: "Notebook Gamer Asus ROG Strix i7",
    price: 6499.9,
    priceFormatted: "R$ 6.499,90",
    image:
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=300&q=80",
    category: "notebook notebook-gamer pc pc-gamer hardware lancamentos",
    desc: "Notebook Gamer de altíssima performance com placa gráfica dedicada Nvidia RTX, teclado retroiluminado RGB e refrigeração líquida avançada.",
    specs:
      "Processador: Intel Core i7 13ª Geração | Placa de Vídeo: RTX 4060 8GB | RAM: 16GB DDR5 | SSD: 1TB NVMe",
  },
  {
    id: 9,
    title: "PC Gamer Arena Monster Ryzen 7",
    price: 5299.0,
    priceFormatted: "R$ 5.299,00",
    image:
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=300&q=80",
    category: "pc pc-gamer hardware ofertas gabinete",
    desc: "Computador Gamer montado e testado, pronto para rodar todos os jogos competitivos e lançamentos no ultra em alta taxa de quadros.",
    specs:
      "Processador: AMD Ryzen 7 5700X | Placa de Vídeo: RTX 3060 12GB | RAM: 32GB RGB | SSD: 1TB",
  },

  // CONSOLES
  {
    id: 10,
    title: "Console PlayStation 5 Edição Digital",
    price: 3799.0,
    priceFormatted: "R$ 3.799,00",
    image:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=300&q=80",
    category: "console consoles sony ps5 lancamentos ofertas",
    desc: "Experimente o carregamento extremamente rápido com o SSD de altíssima velocidade e imersão mais profunda com suporte a feedback tátil no controle DualSense.",
    specs:
      "Mídia: Digital | Armazenamento: SSD 825GB | Resolução: Até 4K 120Hz | Incluso: 1 Controle DualSense",
  },
  {
    id: 11,
    title: "Console Xbox Series X 1TB",
    price: 4299.9,
    priceFormatted: "R$ 4.299,90",
    image:
      "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=300&q=80",
    category: "console consoles microsoft xbox ofertas",
    desc: "O Xbox mais rápido e poderoso de todos os tempos. Jogue milhares de títulos de quatro gerações de consoles com desempenho inédito.",
    specs:
      "Mídia: Física / Digital | Armazenamento: SSD NVMe 1TB Customizado | Desempenho: 12 TFLOPS",
  },

  // ACESSÓRIOS & HARDWARE
  {
    id: 12,
    title: "Mouse Gamer RGB Chroma 12000 DPI",
    price: 129.0,
    priceFormatted: "R$ 129,00",
    image: "Img.resu/mouse.jpg",
    category: "acessorio acessorios hardware ofertas perifericos",
    desc: "Mouse Gamer de alta precisão com até 12.000 DPI ajustáveis, iluminação RGB Chroma personalizável e 6 botões programáveis para alta performance.",
    specs: "Sensor: Óptico PixArt | Conexão: USB Trançado 1.8m | Peso: 85g",
  },
  {
    id: 13,
    title: "Cadeira Gamer Ergonômica Pro",
    price: 899.0,
    priceFormatted: "R$ 899,00",
    image: "Img.resu/cadeira.jpg",
    category: "acessorio acessorios hardware cadeira",
    desc: "Cadeira Gamer com design ergonômico, almofadas para lombar e pescoço, ajuste de altura a gás e reclinação até 180° para longas sessões de gameplay.",
    specs:
      "Material: Couro Sintético PU | Suporte: Até 130kg | Base: Estrela de Aço",
  },
  {
    id: 14,
    title: "Headset Gamer 7.1 Surround RGB",
    price: 289.9,
    priceFormatted: "R$ 289,90",
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=300&q=80",
    category: "acessorio acessorios fone headset perifericos ofertas",
    desc: "Headset com áudio espacial 7.1 surround, microfone com cancelamento de ruído ativo e earpads em espuma de memória para máximo conforto.",
    specs:
      "Conexão: USB / P3 | Drivers: 50mm Neodímio | Iluminação: RGB Lateral",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const CART_STORAGE_KEY = "gamemania_cart";
  const CURRENT_PRODUCT_KEY = "gamemania_selected_product";

  let cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];

  const cartIconBtn = document.querySelector('a[title="Carrinho"]');
  const searchInput = document.querySelector(".search-box input");
  const searchForm = document.querySelector(".search-box");
  const gridContainer = document.getElementById("productGrid");

  // Rola suavemente até o catálogo de produtos
  function scrollToCatalog() {
    if (gridContainer) {
      gridContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  // ------------------------------------------------
  // 1. RENDERIZAR PRODUTOS NA HOME
  // ------------------------------------------------
  function renderProducts(productsToRender) {
    if (!gridContainer) return;

    if (productsToRender.length === 0) {
      gridContainer.innerHTML = `
        <div class="col-12 text-center py-5">
          <i class="fa-solid fa-box-open fa-3x mb-3 text-info"></i>
          <h5 class="text-white">Nenhum produto encontrado</h5>
          <p class="small text-custom-muted">Tente pesquisar por outro termo como "iPhone", "Gamer", "Mouse" ou "Console".</p>
        </div>
      `;
      return;
    }

    let html = "";
    productsToRender.forEach((product) => {
      html += `
        <div class="col-6 col-md-4 col-lg-3 produto-item">
          <div class="product-card" data-id="${product.id}">
            <div class="product-img-wrapper item-click" style="cursor: pointer;" data-id="${product.id}">
              <img src="${product.image}" alt="${product.title}" onerror="this.src='https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=300&q=80'">
            </div>
            <div>
              <h6 class="product-title item-click" style="cursor: pointer;" data-id="${product.id}">${product.title}</h6>
              <div class="product-price">${product.priceFormatted}</div>
            </div>
            <button class="btn-buy" data-id="${product.id}">
              <i class="fa-solid fa-cart-plus me-1"></i> Comprar
            </button>
          </div>
        </div>
      `;
    });

    gridContainer.innerHTML = html;
    setupDynamicEvents();
  }

  // ------------------------------------------------
  // 2. EVENTOS DINÂMICOS (DETALHES E COMPRA)
  // ------------------------------------------------
  function setupDynamicEvents() {
    document.querySelectorAll(".item-click").forEach((el) => {
      el.addEventListener("click", (e) => {
        const productId = parseInt(e.currentTarget.getAttribute("data-id"));
        const product = PRODUCTS_DB.find((p) => p.id === productId);

        if (product) {
          localStorage.setItem(CURRENT_PRODUCT_KEY, JSON.stringify(product));
          window.location.href = "produto.html";
        }
      });
    });

    document.querySelectorAll(".btn-buy").forEach((button) => {
      button.addEventListener("click", (e) => {
        const productId = parseInt(e.currentTarget.getAttribute("data-id"));
        const product = PRODUCTS_DB.find((p) => p.id === productId);

        if (product) {
          addItemToCart(product.title, product.price, product.image);

          const originalText = button.innerHTML;
          button.innerHTML =
            '<i class="fa-solid fa-check me-1"></i> Adicionado!';
          button.classList.replace("btn-buy", "btn-success");

          setTimeout(() => {
            button.innerHTML = originalText;
            button.classList.replace("btn-success", "btn-buy");
          }, 1200);
        }
      });
    });
  }

  // ------------------------------------------------
  // 3. CARRINHO DE COMPRAS E MODAL
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
            <div class="modal-body" id="cartModalBody"></div>
            <div class="modal-footer border-top border-secondary d-flex justify-content-between">
              <h5 class="mb-0">Total: <span id="cartTotalValue" class="text-info">R$ 0,00</span></h5>
              <div>
                <button type="button" class="btn btn-outline-light me-2" data-bs-dismiss="modal">Continuar Comprando</button>
                <button type="button" class="btn btn-info fw-bold text-dark" id="checkoutBtn"><i class="fa-solid fa-credit-card me-1"></i> Finalizar Compra</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", modalHTML);

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

  function renderCartItems() {
    const modalBody = document.getElementById("cartModalBody");
    const totalElement = document.getElementById("cartTotalValue");
    if (!modalBody) return;

    if (cart.length === 0) {
      modalBody.innerHTML = `
        <div class="text-center py-4 text-muted">
          <i class="fa-solid fa-basket-shopping fa-3x mb-3"></i>
          <p class="fs-5 mb-0 text-light">Seu carrinho está vazio no momento.</p>
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

      // Formatação padrão PT-BR para moeda (R$ X.XXX,XX)
      const unitPriceFormatted = item.price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      const itemTotalFormatted = itemTotal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });

      itemsHTML += `
        <div class="list-group-item bg-transparent text-white d-flex align-items-center justify-content-between border-secondary py-3">
          <div class="d-flex align-items-center" style="max-width: 50%;">
            <img src="${item.image}" alt="${item.title}" style="width: 50px; height: 50px; object-fit: contain;" class="me-3 rounded bg-dark p-1">
            <div>
              <h6 class="mb-0 text-truncate text-white">${item.title}</h6>
              <small class="text-light">${unitPriceFormatted} un.</small>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <button class="btn btn-sm btn-outline-secondary text-white decrease-qty me-2" data-index="${index}">-</button>
            <span class="fw-bold px-2 text-white">${item.quantity}</span>
            <button class="btn btn-sm btn-outline-secondary text-white increase-qty ms-2 me-3" data-index="${index}">+</button>
            <span class="fw-bold text-info me-3" style="min-width: 110px; text-align: right;">${itemTotalFormatted}</span>
            <button class="btn btn-sm btn-outline-danger remove-item" data-index="${index}" title="Remover"><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>
      `;
    });

    itemsHTML += "</div>";
    modalBody.innerHTML = itemsHTML;

    if (totalElement) {
      totalElement.textContent = grandTotal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    }

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

  function addItemToCart(title, price, image) {
    const existingItem = cart.find((item) => item.title === title);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ title, price, image, quantity: 1 });
    }
    saveCart();
  }

  // ------------------------------------------------
  // 4. PÁGINA DE DETALHES (`produto.html`)
  // ------------------------------------------------
  function renderProductDetailPage() {
    const detailTitle = document.getElementById("detailTitle");
    if (!detailTitle) return;

    const savedProduct = JSON.parse(localStorage.getItem(CURRENT_PRODUCT_KEY));

    if (!savedProduct) {
      window.location.href = "index.html";
      return;
    }

    document.getElementById("detailTitle").textContent = savedProduct.title;
    document.getElementById("detailPrice").textContent =
      savedProduct.priceFormatted ||
      `R$ ${savedProduct.price.toFixed(2).replace(".", ",")}`;
    document.getElementById("detailImg").src = savedProduct.image;
    document.getElementById("detailImg").alt = savedProduct.title;
    document.getElementById("detailDesc").textContent = savedProduct.desc;
    document.getElementById("detailSpecs").textContent = savedProduct.specs;

    const buyBtn = document.getElementById("detailBuyBtn");
    if (buyBtn) {
      buyBtn.addEventListener("click", () => {
        addItemToCart(
          savedProduct.title,
          savedProduct.price,
          savedProduct.image,
        );

        const origHTML = buyBtn.innerHTML;
        buyBtn.innerHTML =
          '<i class="fa-solid fa-check me-2"></i> ADICIONADO COM SUCESSO!';
        buyBtn.classList.replace("btn-info", "btn-success");

        setTimeout(() => {
          buyBtn.innerHTML = origHTML;
          buyBtn.classList.replace("btn-success", "btn-info");
        }, 1500);
      });
    }
  }

  // ------------------------------------------------
  // ------------------------------------------------
  // 5. BUSCA INTELIGENTE E AÇÃO DA LUPA / ENTER
  // ------------------------------------------------
  if (searchInput) {
    // Função que apenas filtra os produtos na tela (sem rolar)
    function executeSearchOnly() {
      const termo = searchInput.value.toLowerCase().trim();

      const filtered = PRODUCTS_DB.filter((p) => {
        const titleMatch = p.title.toLowerCase().includes(termo);
        const categoryMatch = p.category.toLowerCase().includes(termo);
        const descMatch = p.desc.toLowerCase().includes(termo);
        return titleMatch || categoryMatch || descMatch;
      });

      renderProducts(filtered);
    }

    // Ao digitar: Filtra instantaneamente SEM rolar a página
    searchInput.addEventListener("input", () => {
      executeSearchOnly();
    });

    // Ao submeter (clicar na Lupa ou apertar Enter): Filtra E rola suavemente até os produtos
    if (searchForm) {
      searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        executeSearchOnly();
        scrollToCatalog();
      });
    }
  }

  // ------------------------------------------------
  // 6. FILTRO POR CATEGORIAS (MENU DO TOPO E BANNERS)
  // ------------------------------------------------
  const categoryLinks = document.querySelectorAll(".cat-filter-btn");
  categoryLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const filtro = link.getAttribute("data-filter").toLowerCase().trim();

      const filtered = PRODUCTS_DB.filter((p) =>
        p.category.toLowerCase().includes(filtro),
      );

      renderProducts(filtered);
      scrollToCatalog();
    });
  });

  // ------------------------------------------------
  // INICIALIZAÇÃO GERAL
  // ------------------------------------------------
  createCartModal();
  updateCartCounter();
  renderProducts(PRODUCTS_DB);
  renderProductDetailPage();

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
