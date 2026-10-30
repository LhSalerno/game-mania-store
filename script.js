// ================================================
// GAME MANIA - SCRIPT PRINCIPAL E ARQUITETURA SPA
// ================================================

// BANCO DE DADOS CENTRALIZADO DE PRODUTOS (EXPANDIDO - ETAPA 1)
const PRODUCTS_DB = [
  // --- JOGOS & LANÇAMENTOS ---
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
  {
    id: 101,
    title: "DOOM Eternal Deluxe Edition",
    price: 199.9,
    priceFormatted: "R$ 199,90",
    image: "Img.resu/doon.jpg",
    category: "jogo lancamentos ps4 ps5 xbox pc acao tiro",
    desc: "Os exércitos do inferno invadiram a Terra. Torne-se o Slayer em uma campanha épica para conquistar demônios entre dimensões e impedir a destruição final da humanidade.",
    specs:
      "Desenvolvedora: id Software | Plataforma: PC / Consoles | Idioma: PT-BR",
  },
  {
    id: 102,
    title: "The Last of Us Part I",
    price: 249.9,
    priceFormatted: "R$ 249,90",
    image: "Img.resu/thelast.jpg",
    category: "jogo lancamentos ps5 pc aventura survival",
    desc: "Experimente a narrativa emocionante e os personagens inesquecíveis de The Last of Us, vencedor de mais de 200 prêmios de Jogo do Ano.",
    specs: "Desenvolvedora: Naughty Dog | Plataforma: PS5 / PC | Idioma: PT-BR",
  },
  {
    id: 103,
    title: "Matrix Awakens Experience Game",
    price: 99.9,
    priceFormatted: "R$ 99,90",
    image: "Img.resu/matrix.jpg",
    category: "jogo lancamentos ps5 xbox pc acao",
    desc: "Mergulhe em uma realidade simulada impressionante com gráficos de última geração que desafiam a linha entre o cinema e os jogos interativos.",
    specs:
      "Desenvolvedora: Epic Games | Plataforma: Next-Gen | Idioma: Legendado",
  },

  // --- SMARTPHONES & TABLETS ---
  {
    id: 6,
    title: "iPhone 15 Pro Max 256GB",
    price: 7499.9,
    priceFormatted: "R$ 7.499,90",
    image: "Img.resu/iphone.jpg",
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
    image: "Img.resu/S21.JPG",
    category: "celular celular-gamer smartphone android samsung ofertas",
    desc: "O ápice da tecnologia móvel com inteligência artificial Galaxy AI, S Pen embutida, câmera de 200MP e estrutura resistente em titânio.",
    specs:
      'Tela: Dynamic AMOLED 2X 6.8" | RAM: 12GB | Câmera: 200MP | Bateria: 5000mAh',
  },
  {
    id: 104,
    title: "Smartphone Gamer RedMagic 9 Pro",
    price: 4899.0,
    priceFormatted: "R$ 4.899,00",
    image: "Img.resu/cel1.jpg",
    category: "celular celular-gamer smartphone android ofertas",
    desc: "Desempenho absoluto para jogos mobile com resfriamento ativo a ventoinha, gatilhos magnéticos e tela totalmente limpa sem entalhes.",
    specs: "Processador: Snapdragon 8 Gen 3 | RAM: 16GB | Tela: AMOLED 120Hz",
  },
  {
    id: 105,
    title: "Smartphone Samsung Galaxy S23 FE",
    price: 3199.0,
    priceFormatted: "R$ 3.199,00",
    image: "Img.resu/cel2.jpg",
    category: "celular smartphone android samsung ofertas",
    desc: "Recursos premium acessíveis: câmera profissional noturna, processador de alto desempenho e design icônico resistente à água.",
    specs: "Câmera Tripla 50MP | Tela Dynamic AMOLED 2X | 256GB",
  },
  {
    id: 106,
    title: "Smartphone Motorola Edge 50 Pro",
    price: 3499.0,
    priceFormatted: "R$ 3.499,00",
    image: "Img.resu/cel3.jpg",
    category: "celular smartphone android ofertas",
    desc: "Acabamento em material vegano, carregamento ultrarrápido de 125W e tela curva pOLED com cores validadas pela Pantone.",
    specs: "Carregador 125W na caixa | 512GB de Armazenamento | 12GB RAM",
  },

  // --- NOTEBOOKS & HARDWARE / PC GAMER ---
  {
    id: 8,
    title: "Notebook Gamer Asus ROG Strix i7",
    price: 6499.9,
    priceFormatted: "R$ 6.499,90",
    image: "Img.resu/notebook.jpg",
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
    image: "Img.resu/pc.jpg",
    category: "pc pc-gamer hardware ofertas gabinete",
    desc: "Computador Gamer montado e testado, pronto para rodar todos os jogos competitivos e lançamentos no ultra em alta taxa de quadros.",
    specs:
      "Processador: AMD Ryzen 7 5700X | Placa de Vídeo: RTX 3060 12GB | RAM: 32GB RGB | SSD: 1TB",
  },
  {
    id: 107,
    title: "Kit Upgrade Gamer Completo RGB",
    price: 2199.0,
    priceFormatted: "R$ 2.199,00",
    image: "Img.resu/kitgamer.jpg",
    category: "hardware pc pc-gamer acessorio ofertas",
    desc: "Kit contendo placa-mãe de alta performance, processador otimizado para multitarefas e memória RAM com dissipador RGB.",
    specs: "Ideal para montagem de gabinetes de alta performance.",
  },
  {
    id: 108,
    title: "Notebook Ultrabook Lenovo Slim 5",
    price: 4199.0,
    priceFormatted: "R$ 4.199,00",
    image: "Img.resu/not1.jpg",
    category: "notebook hardware ofertas",
    desc: "Leve, potente e elegante. Desenvolvido para produtividade exigente, estudos avançados e mobilidade diária.",
    specs: "Tela 15.6 polegadas Full HD IPS | Ryzen 7 | 16GB RAM",
  },
  {
    id: 109,
    title: "Roteador Wi-Fi 6 Gamer Gigabit",
    price: 549.0,
    priceFormatted: "R$ 549,00",
    image: "Img.resu/roteador.jpg",
    category: "acessorio hardware ofertas",
    desc: "Baixíssima latência para jogos online, priorização de pacotes de rede e cobertura de sinal estendida para toda a casa.",
    specs: "Tecnologia Wi-Fi 6 (802.11ax) | Portas Gigabit",
  },

  // --- CONSOLES ---
  {
    id: 10,
    title: "Console PlayStation 5 Edição Digital",
    price: 3799.0,
    priceFormatted: "R$ 3.799,00",
    image: "Img.resu/ps5.jpg",
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
    image: "Img.resu/xbox.jpg",
    category: "console consoles microsoft xbox ofertas",
    desc: "O Xbox mais rápido e poderoso de todos os tempos. Jogue milhares de títulos de quatro gerações de consoles com desempenho inédito.",
    specs:
      "Mídia: Física / Digital | Armazenamento: SSD NVMe 1TB Customizado | Desempenho: 12 TFLOPS",
  },
  {
    id: 110,
    title: "Console Nintendo Switch OLED",
    price: 2499.0,
    priceFormatted: "R$ 2.499,00",
    image: "Img.resu/cons1.jpg",
    category: "console consoles nintendo ofertas",
    desc: "Desfrute de jogos onde quer que esteja com a tela OLED de 7 polegadas com cores vivas e suporte ajustável amplo.",
    specs: 'Tela OLED 7" | 64GB Armazenamento interno expansível',
  },
  {
    id: 111,
    title: "Console PlayStation 4 Slim 1TB",
    price: 2199.0,
    priceFormatted: "R$ 2.199,00",
    image: "Img.resu/cons2.jpg",
    category: "console consoles sony ps4 ofertas",
    desc: "Acesso à maior biblioteca de jogos exclusivos da geração passada com gráficos incríveis e desempenho estável.",
    specs: "1TB HDD | 1 Controle DualShock 4 incluso",
  },

  // --- ACESSÓRIOS & PERIFÉRICOS ---
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
    image: "Img.resu/ac1.jpg",
    category: "acessorio acessorios fone headset perifericos ofertas",
    desc: "Headset com áudio espacial 7.1 surround, microfone com cancelamento de ruído ativo e earpads em espuma de memória para máximo conforto.",
    specs:
      "Conexão: USB / P3 | Drivers: 50mm Neodímio | Iluminação: RGB Lateral",
  },
  {
    id: 112,
    title: "Teclado Mecânico Gamer Switch Red RGB",
    price: 329.0,
    priceFormatted: "R$ 329,00",
    image: "Img.resu/ac2.jpg",
    category: "acessorio acessorios perifericos hardware",
    desc: "Teclado mecânico compacto formato TKL com switches mecânicos lineares silenciosos e iluminação LED RGB por tecla.",
    specs: "Anti-ghosting completo | Conexão USB Type-C removível",
  },

  // --- EDIÇÕES DE COLECIONADOR (Carrossel / Destaques) ---
  {
    id: 15,
    title: "Box Colecionador Batman Arkham",
    price: 890.0,
    priceFormatted: "R$ 890,00",
    image: "Img.resu/boxbatman.jpg",
    category: "colecionador box jogo lancamentos ofertas",
    desc: "Edição limitada contendo estátua exclusiva de alta qualidade, livro de arte oficial capa dura e itens comemorativos da trilogia.",
    specs: "Edição Limitada e Numerada | Itens exclusivos de colecionador",
  },
  {
    id: 16,
    title: "Box Colecionador Assassin's Creed Valhalla",
    price: 700.0,
    priceFormatted: "R$ 700,00",
    image: "Img.resu/BoxAss.JPG",
    category: "colecionador box jogo lancamentos ofertas",
    desc: "Incluso steelbook oficial, trilha sonora em CD, estátua detalhada do personagem principal e litografias exclusivas.",
    specs: "Conteúdo físico de colecionador premium",
  },
  {
    id: 17,
    title: "Box Colecionador The Last of Us Part II",
    price: 500.0,
    priceFormatted: "R$ 500,00",
    image: "Img.resu/boxthelast.jpg",
    category: "colecionador box jogo lancamentos ofertas",
    desc: "Garanta já a edição definitiva para fãs da franquia com réplica do bracelete, mini artbook e caixa temática de colecionador.",
    specs: "Item oficial licenciado para fãs e colecionadores",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  // Garante que a página sempre comece estritamente no topo ao carregar ou atualizar
  window.scrollTo(0, 0);

  const CART_STORAGE_KEY = "gamemania_cart";
  const CURRENT_PRODUCT_KEY = "gamemania_selected_product";

  let cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];

  const cartIconBtn = document.querySelector('a[title="Carrinho"]');
  const searchInput = document.querySelector(".search-box input");
  const searchForm = document.querySelector(".search-box");
  const gridContainer = document.getElementById("productGrid");

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
  // 5. BUSCA INTELIGENTE E AÇÃO DA LUPA / ENTER
  // ------------------------------------------------
  if (searchInput) {
    function executeSearchOnly() {
      const termo = searchInput.value.toLowerCase().trim();

      if (!termo) {
        renderProducts(PRODUCTS_DB);
        return;
      }

      const filtered = PRODUCTS_DB.filter((p) => {
        const titleMatch = p.title.toLowerCase().includes(termo);
        const descMatch = p.desc.toLowerCase().includes(termo);
        const categoriesArray = p.category.toLowerCase().split(/\s+/);
        let categoryMatch = false;

        if (termo === "pc") {
          categoryMatch =
            categoriesArray.includes("pc") && !categoriesArray.includes("jogo");
        } else {
          categoryMatch = categoriesArray.some((cat) => cat.includes(termo));
        }

        return titleMatch || categoryMatch || descMatch;
      });

      renderProducts(filtered);
    }

    searchInput.addEventListener("input", () => {
      executeSearchOnly();
    });

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

      const filtered = PRODUCTS_DB.filter((p) => {
        const categoriesArray = p.category.toLowerCase().split(/\s+/);
        return categoriesArray.some((cat) => cat.includes(filtro));
      });

      renderProducts(filtered);
      scrollToCatalog();
    });
  });

  // ------------------------------------------------
  // 7. CARROSSEL DE COLECIONADORES (INTEGRAÇÃO SPA)
  // ------------------------------------------------
  const carouselItems = document.querySelectorAll(
    "#carouselColecionadores .carousel-item",
  );
  const colecionadoresIds = [15, 16, 17];

  if (carouselItems.length > 0) {
    carouselItems.forEach((item, index) => {
      item.style.cursor = "pointer";
      item.addEventListener("click", (e) => {
        if (
          e.target.closest(".carousel-control-prev") ||
          e.target.closest(".carousel-control-next") ||
          e.target.closest(".carousel-indicators")
        ) {
          return;
        }

        const productId = colecionadoresIds[index];
        const product = PRODUCTS_DB.find((p) => p.id === productId);

        if (product) {
          localStorage.setItem(CURRENT_PRODUCT_KEY, JSON.stringify(product));
          window.location.href = "produto.html";
        }
      });
    });
  }

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
