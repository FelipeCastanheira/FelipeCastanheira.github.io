const colorArr = document.querySelectorAll('.color');
for (let key of colorArr) {
  key.addEventListener('click', function(event) {
    let family = key.parentElement.children;
    for (let i of family) {
      i.className = 'color';
    }
    key.className = 'color selected';
  })
}

let canva = document.querySelector('#pixel-board');
let selected = 'black';
for( let key of canva.children) {
  key.addEventListener('click', function(event) {
    const selected = document.querySelector('.selected');
    key.style.backgroundColor = selected.id;
  })
}

let btn = document.querySelector('button');
btn.addEventListener('click', function() {
  for( let key of canva.children) {
    key.style.backgroundColor = 'white';
  }
})

let input = document.querySelector('input');
let vqv = document.querySelector('#generate-board');
vqv.addEventListener('click', () => {
  if(input.value.length == 0) {
    alert('Board inválido!');
  } else {
  let nInput = input.value;
  if (nInput < 5) {
    nInput = 5;
  } else if (nInput > 50) {
    nInput = 50;
  }
  let nxn = nInput * nInput;
  let novaDiv;
  for (let key of canva.children) {
    key.style.backgroundColor = 'white';
  }
  for (let i = 25; i < nxn; i += 1) {
    novaDiv = document.createElement('div');
    novaDiv.className = 'pixel';
    novaDiv.addEventListener('click', (e) => {
      let selected = document.querySelector('.selected');
      e.target.style.backgroundColor = selected.id;
    })
    canva.appendChild(novaDiv);
  }
  let nWidth = 43 * nInput;
  nWidth = nWidth + 'px';
  canva.style.maxWidth = nWidth;
  }
});

window.onload = function() {
  let randomNumber = Math.random() * 200;
  let random2 = Math.random() * 200;
  let random3 = Math.random() * 200;
  let cor1 = 'rgb(' + randomNumber + ', ' + random2 + ', ' + random3 + ')';
  let cor2 = 'rgb(' + random2 + ', ' + random3 + ', ' + randomNumber + ')';
  let cor3 = 'rgb(' + random3 + ', ' + randomNumber + ', ' + random2 + ')';
  colorArr[1].style.backgroundColor = cor1;
  colorArr[1].id = cor1;
  colorArr[2].style.backgroundColor = cor2;
  colorArr[2].id = cor2;
  colorArr[3].style.backgroundColor = cor3;
  colorArr[3].id = cor3;
  // if (randomNumber < 0.2) {
  //   colorArr[1].style.backgroundColor = 'green';
  //   colorArr[1].id = 'green';
  //   colorArr[2].style.backgroundColor = 'blue';
  //   colorArr[2].id = 'blue';
  //   colorArr[3].style.backgroundColor = 'yellow';
  //   colorArr[3].id = 'yellow';    
  // } else if (randomNumber > 0.8) {
  //   colorArr[1].style.backgroundColor = 'brown';
  //   colorArr[1].id = 'brown';
  //   colorArr[2].style.backgroundColor = 'magenta';
  //   colorArr[2].id = 'magenta';
  //   colorArr[3].style.backgroundColor = 'olive';
  //   colorArr[3].id = 'olive';
  // } else if (randomNumber < 0.4){
  //   colorArr[1].style.backgroundColor = 'aqua';
  //   colorArr[1].id = 'aqua';
  //   colorArr[2].style.backgroundColor = 'coral';
  //   colorArr[2].id = 'coral';
  //   colorArr[3].style.backgroundColor = 'hotpink';
  //   colorArr[3].id = 'hotpink';
  // } if (randomNumber > 0.6) {
  //   colorArr[1].style.backgroundColor = 'peru';
  //   colorArr[1].id = 'peru';
  //   colorArr[2].style.backgroundColor = 'lime';
  //   colorArr[2].id = 'lime';
  //   colorArr[3].style.backgroundColor = 'plum';
  //   colorArr[3].id = 'plum';
  // } else {
  //   colorArr[1].style.backgroundColor = 'maroon';
  //   colorArr[1].id = 'maroon';
  //   colorArr[2].style.backgroundColor = 'darkblue';
  //   colorArr[2].id = 'darkblue';
  //   colorArr[3].style.backgroundColor = 'darkred';
  //   colorArr[3].id = 'darkred';
  //}
};

// function correctInput(numb) {
//   if (numb < 5) {
//     return 5;
//   } else if (numb > 50) {
//     return 50;
//   }
//   return numb;
// }

// console.log(correctInput(55));