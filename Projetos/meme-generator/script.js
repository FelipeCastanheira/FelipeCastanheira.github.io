const tInput = document.getElementById('text-input');
const mText = document.getElementById('meme-text');
const fInput = document.getElementById('meme-insert');
// const imgParent = document.getElementById('meme-image-container');
const imgChild = document.getElementById('meme-image');

// Requisito 1
tInput.addEventListener('keyup', () => {
  mText.innerText = tInput.value;
});

// Requisito 2
fInput.addEventListener('change', (e) => {
  imgChild.src = URL.createObjectURL(e.target.files[0]);
});
