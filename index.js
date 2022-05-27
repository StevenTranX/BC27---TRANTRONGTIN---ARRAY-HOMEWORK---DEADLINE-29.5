"use strict";
let positiveNumbers = [];
// Add number into Array positiveNumbers
const addNumber = document
  .getElementById("addNumber")
  .addEventListener("click", function () {
    const number = +document.getElementById("positiveNumber").value;
    positiveNumbers.push(number);
    const showAddNumber = document.querySelector(".showAddNumber");
    showAddNumber.style.color = "#fff";
    showAddNumber.textContent = `
    ${positiveNumbers}
    `;
  });
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
    
    // Cách 1 dùng hàm for duyệt mảng từ index 0 -> cuối, gán cho cái cuối cùng

    // for (let i = 0 ; i < positiveNumbers.length; i++) {
    //   if (positiveNumbers[i] % 2 === 0) {
    //    lastEvenNumber = positiveNumbers[i];
    //   } 
    // }
    // Cách 2 tạo 1 hàm duyệt mảng từ cuối , khi phần tử chẵn thì lập tức dừng hàm return về giá trị 

    lastEvenNumber = lastEvenNumber2 (positiveNumbers)
    const showLastEvenNumber = document.querySelector(".showlastEvenNumber");
    showLastEvenNumber.style.color = "#fff";
    showLastEvenNumber.textContent = `
  The last Even Number is ${lastEvenNumber}
  `;
  });

  function lastEvenNumber2 (even) {
    for (let  i = positiveNumbers.length - 1; i >= 0 ;  i--) {
      if (positiveNumbers[i] % 2 === 0) {
        return  even = positiveNumbers[i];
      }
    }
  }
// let lastEvenNumber = lastEvenNumber2 (numbers)
// console.log (lastEvenNumber2(numbers))
// console.log (lastEvenNumber)
// ========================================================================================================

// hàm sort không sắp xếp số ( chỉ sắp xếp chuỗi) nên phải viết hàm compare để truyền vào 
function sortNumber () {
  const compare = (x , y) => x - y
  const sortnumbers = positiveNumbers.sort(compare)
  const showNumberOrder = document.querySelector(".showNumberOrder");
  showNumberOrder.style.color = "#fff";
  showNumberOrder.textContent = `
Number order : ${sortnumbers}`
}

