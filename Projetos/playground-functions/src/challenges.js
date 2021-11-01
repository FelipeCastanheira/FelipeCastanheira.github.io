// Desafio 1
function compareTrue(a, b) {
  return (a && b);
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(strX) {
  return (strX.split(" "));
}

// Desafio 4
function concatName(arrX) {
  let lastFirst = [arrX[arrX.length - 1], ", ", arrX[0]];
  return (lastFirst.join(""));
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((3 * wins) + (ties));
}

// Desafio 6
function highestCount(arrX) {
  let count = 0;
  let bestcount = 0;
  let highestN = arrX[0];
  for (let num of arrX) {
    if (num >= highestN) {
      highestN = num;
      for (let num2 of arrX) {
        if (num === num2) {
          count += 1;
        }
      }
      bestcount = count;
    }
    count = 0;
  }
  return bestcount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(cat1 - mouse);
  let dist2 = Math.abs(cat2 - mouse);
  if (dist1 > dist2) {
    return 'cat2';
  } else if (dist2 > dist1) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrX) {
  let div3 = false;
  let div5 = false;
  let ans = [];
  for (let num of arrX) {
    div3 = ((num % 3) === 0);
    div5 = ((num % 5) === 0);
    if (div3) {
      if (div5) {
        ans.push('fizzBuzz'); 
      } else {
        ans.push('fizz'); 
      }
    } else if (div5) {
      ans.push('buzz'); 
    } else {
      ans.push('bug!');
    }
  }
  return ans;
}

// Desafio 9
function encode(strX) {
  let leters = ['a', 'e', 'i', 'o', 'u'];
  for (let index = 0; index < leters.length; index += 1) {
    for (let i2 = 0; i2 < strX.length; i2 += 1) {
      if (leters[index] === strX[i2]) {
        strX = strX.replace(strX[i2], (index + 1));
      }
    }
  }
  return strX;
}

function decode(strX) {
  let leters = ['a', 'e', 'i', 'o', 'u'];
  for (let index = 0; index < leters.length; index += 1) {
    for (let i2 = 0; i2 < strX.length; i2 += 1) {
      if ((index + 1) == strX[i2]) {
        strX = strX.replace(strX[i2], leters[index]);
      }
    }
  }
  return strX;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
