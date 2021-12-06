let savedArr = [];
let totalPrice = 0;
const cartCleaner = document.querySelector('.empty-cart');
const tagPrice = document.querySelector('.total-price');
const items = document.querySelector('.items');

// função que atualiza o preço do Subtotal do Carrinho
const updatePrice = () => {
  const subtotal = totalPrice.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  tagPrice.innerText = `Subtotal: ${subtotal}`;
};

// função que limpa o carrinho
cartCleaner.addEventListener('click', () => {
  saveCartItems();
  lis = document.querySelectorAll('li');
  lis.forEach((li) => li.remove());
  savedArr = [];
  totalPrice = 0;
  updatePrice();
});

// função que cria um elemento de imagem
function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

async function cartItemClickListener(event, sku, price) {
  const li = event.target;
  li.remove();
  savedArr = savedArr.filter((item) => item.id !== sku);
  totalPrice -= price;
  updatePrice();
  saveCartItems(JSON.stringify(savedArr));
}

function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', (e) => cartItemClickListener(e, sku, salePrice));
  return li;
}

// troquei os nomes para sku, name e image, conforme requisito. Os nomes recebidos pela API são id, title e thumbnail.
function createProductItemElement({ id: sku, title: name, thumbnail: image }) {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const btn = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  btn.addEventListener('click', async () => {
    const cartItems = document.querySelector('.cart__items');
    const dataItem = await fetchItem(sku);
    savedArr = [...savedArr, dataItem];
    totalPrice += dataItem.price;
    saveCartItems(JSON.stringify(savedArr));
    updatePrice();
    cartItems.appendChild(createCartItemElement(dataItem));
  });
  section.appendChild(btn);
  return section;
}

const addLoading = () => {
  const tagLoad = createCustomElement('span', 'loading', 'carregando...');
  items.appendChild(tagLoad);
};

const delLoading = () => {
  const tagLoad = document.querySelector('.loading');
  tagLoad.className = '';
  tagLoad.remove();
};

window.onload = async () => {
  addLoading();
  const data = await fetchProducts('computador');
  const cartItems = document.querySelector('.cart__items');
  data.results.forEach((el) => {
    items.appendChild(createProductItemElement(el));
  });
  delLoading();
  if (localStorage.getItem('cartItems') && localStorage.getItem('cartItems') !== 'undefined') {
    savedArr = JSON.parse(getSavedCartItems());
    savedArr.forEach((item) => {
      cartItems.appendChild(createCartItemElement(item));
      totalPrice = totalPrice + item.price;
    });
  }
  updatePrice();
};
