"use strict";
let positiveNumbers = [];
// Add number into Array positiveNumbers
document.getElementById("addNumber").addEventListener("click", function () {
  const number = +document.getElementById("positiveNumber").value;
  positiveNumbers.push(number);
  const showAddNumber = document.querySelector(".showAddNumber");
  showAddNumber.style.color = "#fff";
  showAddNumber.textContent = `
    ${positiveNumbers}
    `;
});

// Add number by pressing "Enter"
// document
//   .getElementById("addNumber")
//   .addEventListener("keydown", function (enter) {
//     console.log("A key was pressed ");
//     if (enter.key === "Enter") {
//       const number = +document.getElementById("positiveNumber").value;
//       positiveNumbers.push(number);
//       const showAddNumber = document.querySelector(".showAddNumber");
//       showAddNumber.style.color = "#fff";
//       showAddNumber.textContent = `
//     ${positiveNumbers}
//     `;
//     }
//   });
document.addEventListener("keydown", function (e) {
  console.log(e.key);
  const number = +document.getElementById("positiveNumber").value;
  if (e.key === "Enter") {
    positiveNumbers.push(number);
    const showAddNumber = document.querySelector(".showAddNumber");
    showAddNumber.style.color = "#fff";
    showAddNumber.textContent = `
     ${positiveNumbers}
      `;
  }
});
// Remove Number

document.getElementById("removeNumber").addEventListener("click", function () {
  const number = +document.getElementById("positiveNumber").value;
  positiveNumbers.pop(number);
  const showAddNumber = document.querySelector(".showAddNumber");
  showAddNumber.style.color = "#fff";
  showAddNumber.textContent = `
    ${positiveNumbers}
    `;
});

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  const number = +document.getElementById("positiveNumber").value;
  if (e.key === "Delete") {
    positiveNumbers.pop(number);
    const showAddNumber = document.querySelector(".showAddNumber");
    showAddNumber.style.color = "#fff";
    showAddNumber.textContent = `
     ${positiveNumbers}
      `;
  }
});
const addNumber = function () {
  const number = +document.getElementById("positiveNumber").value;
  positiveNumbers.push(number);
};
// Exercise 1 + 2 Calculate sum of positive Numebrs , Quantity of an array
// ================================================================================================================================
const calcSum = document
  .getElementById("calcPositiveNumbers")
  .addEventListener("click", function () {
    // const positiveNumber = +document.getElementById("positiveNumber").value;
    // positiveNumbers.push(positiveNumber);
    let sum = 0;
    let count = 0;
    for (let i = 0; i < positiveNumbers.length; i++) {
      if (positiveNumbers[i] > 0) {
        sum += positiveNumbers[i];
        count++;
      }
    }
    console.log(sum, count);
    const showSum = document.querySelector(".showSum");
    showSum.style.color = "#fff";
    showSum.innerHTML = `
    <p> Sum of positive Numbers : ${sum}</p>
    <p> Quantity of positive Numbers : ${count} </p>
    `;
  });

//Exercise 3 + 4 Min Number and Min Positive Number in an array
// ================================================================================================================================
document.getElementById("minNumber").addEventListener("click", function () {
  let min = positiveNumbers[0];
  let minPos = positiveNumbers[0];
  for (let i = 1; i < positiveNumbers.length; i++) {
    if (positiveNumbers[i] < min) {
      min = positiveNumbers[i];
    }
    if (positiveNumbers[i] > 0 && positiveNumbers[i] < minPos) {
      minPos = positiveNumbers[i];
    }

    const showMin = document.querySelector(".showMin");
    showMin.style.color = "#fff";
    showMin.innerHTML = `
    <p> The Min Number is ${min}</p>
    <p> The Min Positive Number is ${minPos} </p>

  `;
  }
});
// ============================================================================================
let lastEvenNumber = 0;
document
  .getElementById("lastEvenNumber")
  .addEventListener("click", function () {
    // C??ch 1 d??ng h??m for duy???t m???ng t??? index 0 -> cu???i, g??n cho c??i cu???i c??ng

    // for (let i = 0 ; i < positiveNumbers.length; i++) {
    //   if (positiveNumbers[i] % 2 === 0) {
    //    lastEvenNumber = positiveNumbers[i];
    //   }
    // }
    // C??ch 2 t???o 1 h??m duy???t m???ng t??? cu???i , khi ph???n t??? ch???n th?? l???p t???c d???ng h??m return v??? gi?? tr???

    lastEvenNumber = lastEvenNumber2(positiveNumbers);
    const showLastEvenNumber = document.querySelector(".showLastEvenNumber");
    showLastEvenNumber.style.color = "#fff";
    showLastEvenNumber.textContent = `
  The last Even Number is ${lastEvenNumber}
  `;
  });

function lastEvenNumber2(even) {
  for (let i = positiveNumbers.length - 1; i >= 0; i--) {
    if (positiveNumbers[i] % 2 === 0 && positiveNumbers[i] >= 0) {
      return (even = positiveNumbers[i]);
    }
  }
}
// let lastEvenNumber = lastEvenNumber2 (numbers)
// console.log (lastEvenNumber2(numbers))
// console.log (lastEvenNumber)
// ========================================================================================================

// h??m sort kh??ng s???p x???p s??? ( ch??? s???p x???p chu???i) n??n ph???i vi???t h??m compare ????? truy???n v??o
function sortNumber() {
  // ??n l???i arrow function : const t??n function = (parameter) => th???c thi
  const compare = (x, y) => x - y;
  const sortnumbers = positiveNumbers.sort(compare);
  const showNumberOrder = document.querySelector(".showNumberOrder");
  showNumberOrder.style.color = "#fff";
  showNumberOrder.textContent = `
Number order : ${sortnumbers}`;
}
// ========================================================================================================
function isInteger() {
  let count = 0;
  let check = 0;
  for (let i = 0; i < positiveNumbers.length; i++) {
    check = checkInteger(positiveNumbers[i]);
    if (check) {
      count++;
    }
  }
  const showInteger = document.querySelector(".showInteger");
  showInteger.style.color = "#fff";
  showInteger.textContent = `
Number of Integer : ${count}`;
}

// let array = [1, 2, 3, 4.4, 5.5, 9.9, 10, 9.999, 20, 23];
// let count = 0,
//   check = 0;
// for (let i = 0; i < array.length; i++) {
//   check = checkInteger(array[i]);
//   if (check) {
//     count++;
//   }
//   console.log(count);
// }
function checkInteger(x) {
  if (Number.isInteger(x)) {
    return x;
  }
}
// ========================================================================================================
// let array = [1,2,3,4,5,6,7,8,9,10]
// for (let i = 0 ; i < array.length ; i++  ) {
//  console.log(checkPrime(array[i])) ;
// }
function checkPrime() {
  const showPrime = document.querySelector(".showPrime");
  for (let i = 0; i < positiveNumbers.length; i++) {
    if (isPrime(positiveNumbers[i])) {
      showPrime.style.color = "#fff";
      showPrime.textContent = `
       The first Prime Number is  ${positiveNumbers[i]}
       `;
      break;
    } else {
      showPrime.style.color = "#fff";
      showPrime.textContent = `
       There is no Prime  Number 
       `;
    }
  }
}
function isPrime(num) {
  let prime = num != 1;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}
console.log(isPrime(7));
// checkPrime()
// ========================================================================================================
const comparePosNeg = function () {
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < positiveNumbers.length; i++) {
    if (positiveNumbers[i] > 0) count1++;
    else count2++;
    // c?? th??? l?????c gi???n {} cho h??m if ho???c for n???u th???c thi ????n gi???n
  }
  const showPosNeg = document.querySelector(".showPosNeg");
  if (count1 > count2) {
    showPosNeg.style.color = "#fff";
    showPosNeg.textContent = `
    Positive Numbers > Negative Numbers`;
  } else if (count2 > count1) {
    showPosNeg.style.color = "#fff";
    showPosNeg.textContent = `
    Positive Numbers < Negative Numbers`;
  } else {
    showPosNeg.style.color = "#fff";
    showPosNeg.textContent = `
    Positive Numbers = Negative Numbers`;
  }
};
// ========================================================================================================
function indexSwap() {
  const pos1 = document.getElementById("index1").value;
  const pos2 = document.getElementById("index2").value;
  const swap = ([positiveNumbers[pos1], positiveNumbers[pos2]] = [
    positiveNumbers[pos2],
    positiveNumbers[pos1],
  ]);
  // ES6 Destructuring Assignment
  const showSwap = document.querySelector(".showSwap");
  showSwap.style.color = "#fff";
  showSwap.textContent = ` ${swap}
  `;
}
