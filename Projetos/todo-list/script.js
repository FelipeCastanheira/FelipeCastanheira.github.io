// 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo
const btn = document.querySelector('#criar-tarefa');
const ol = document.querySelector('ol');
const input = document.querySelector('input');
btn.addEventListener('click', (e) => {
  const newLi = document.createElement('li');
  newLi.innerText = input.value;
  ol.appendChild(newLi);
  input.value = '';
  // 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128)
  newLi.addEventListener('click', (ev) => {
    const olArr = ol.children;
    for (const key of olArr) {
      key.style.backgroundColor = '';
    }
    newLi.style.backgroundColor = 'grey';
  });
  let done = false;
  newLi.addEventListener('dblclick', (ev) => {
    if (done) {
      newLi.className = '';
      done = false;
    } else {
      newLi.className = 'completed';
      done = true;
    }
  });
});

const reset = document.querySelector('#apaga-tudo');
reset.addEventListener('click', () => {
  ol.innerHTML = '';
  // let olArr = ol.children;
  // for (let key of olArr) {
  //   key.remove()
  // }
});

const xDone = document.querySelector('#remover-finalizados');
xDone.addEventListener('click', () => {
  const doneArr = document.querySelectorAll('.completed');
  for (const key of doneArr) {
    key.remove();
  }
});

function salvarTarefas() {
  const tarefasEl = document.querySelectorAll('li');

  const tarefas = [];

  tarefasEl.forEach((tarefaEl) => {
    tarefas.push({
      text: tarefaEl.innerText,
      feito: tarefaEl.classList.contains('completed'),
    });
  });

  localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

const salve = document.querySelector('#salvar-tarefas');
salve.addEventListener('click', salvarTarefas);
const tarefas = false;
window.onload = function () {
  const tarefas = JSON.parse(localStorage.getItem('tarefas'));
  if (tarefas) {
    for (const tarefa of tarefas) {
      addTarefa(tarefa);
    }
  }
};

function addTarefa(tarefa) {
  let textoTarefa = input.value;
  if (tarefa) {
    textoTarefa = tarefa.text;
  }
  if (textoTarefa) {
    const tarefaEl = document.createElement('li');
    if (tarefa && tarefa.feito) {
      tarefaEl.classList.add('completed');
    }

    tarefaEl.innerText = textoTarefa;
    ol.appendChild(tarefaEl);

    let done = false;
    tarefaEl.addEventListener('dblclick', () => {
      if (done) {
        tarefaEl.className = '';
        done = false;
      } else {
        tarefaEl.className = 'completed';
        done = true;
      }
    });

    tarefaEl.addEventListener('click', () => {
      const olArr = ol.children;
      for (const key of olArr) {
        key.style.backgroundColor = '';
      }
      tarefaEl.style.backgroundColor = 'grey';
    });

    input.value = '';
  }
}

// 13 - Adicione dois botões, um com id="mover-cima" e outro com id="mover-baixo", que permitam mover o item selecionado para cima ou para baixo na lista de tarefas
const upBtn = document.querySelector('#mover-cima');
const downBtn = document.querySelector('#mover-baixo');
const xxBtn = document.querySelector('#remover-selecionado');
upBtn.addEventListener('click', () => {
  const listEl = ol.children;
  for (const key of listEl) {
    if (key.style.backgroundColor == 'grey') {
      if (key.previousElementSibling) {
        key.parentNode.insertBefore(key, key.previousElementSibling);
      }
      break;
    }
  }
});

downBtn.addEventListener('click', () => {
  const listEl = ol.children;
  for (const key of listEl) {
    if (key.style.backgroundColor == 'grey') {
      if (key.nextElementSibling) {
        key.parentNode.insertBefore(key.nextElementSibling, key);
      }
      break;
    }
  }
});

xxBtn.addEventListener('click', () => {
  const listEl = ol.children;
  for (const key of listEl) {
    if (key.style.backgroundColor == 'grey') {
      key.remove();
      break;
    }
  }
});
