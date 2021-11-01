// Desafio 10
function techList(arrX, name) {
  let myName = name;
  let ans = [];
  arrX = arrX.sort();
  for (let nomeT of arrX) {
    let obj = {
      tech: nomeT,
      name: myName,
    }
    ans.push(obj);
  }
  if (ans.length === 0) {
    return 'Vazio!';
  }
  return ans;
}

// Desafio 11
function generatePhoneNumber(arrX) {
  if (arrX.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else {
    let count = 0;
    for (let num of arrX) {
      if (num < 0 || num > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
      for (let num2 of arrX) {
        if (num2 === num) {
          count += 1;
        }
      }
      if (count >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
      count = 0;
    }
  }
  let ans = '(' + arrX[0] + arrX[1] + ')' + ' ' + arrX[2] + arrX[3] + arrX[4] + arrX[5] + arrX[6] + '-' + arrX[7] + arrX[8] + arrX[9] + arrX[10];
  return ans;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return ((lineA < (lineB + lineC)) && (lineB < (lineA + lineC)) && (lineC < (lineB + lineA)));
}

// Desafio 13
function hydrate(strX) {
  //solução do replace encontrada em: https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript
  strX = strX.replace(/[^0-9]/g, "");
  let sum = 0;
  for (let num = 0; num < strX.length; num += 1) {
    sum = sum + Number(strX[num]);
  }
  if (sum === 1) {
    return '1 copo de água';
  }
  return (sum + ' copos de água');
  }

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
