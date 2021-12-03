const saveCartItems = (listItems) => {
  localStorage.setItem('cartItems', listItems);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
