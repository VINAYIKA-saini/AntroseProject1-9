const inputNumber = document.getElementById('inputNumber');
const operationBoxes = document.querySelectorAll('.operation-box');
const consoleBox = document.getElementById('console');
const clearConsoleBtn = document.getElementById('clearConsoleBtn');

operationBoxes.forEach(box => {
  box.addEventListener('mouseover', () => {
    const operation = box.textContent.trim();

    if (!isNaN(inputNumber.value)) {
      const number = parseFloat(inputNumber.value);
      let result;

      switch (operation) {
        case '+':
          result = number + number;
          break;
        case '-':
          result = number - number;
          break;
        case '*':
          result = number * number;
          break;
        case '/':
          result = number / number;
          break;
        case '%':
          result = number % number;
          break;
        default:
          result = 'Invalid operation';
      }

      consoleBox.innerHTML += `${number} ${operation} ${number} = ${result}<br>`;
      consoleBox.scrollTop = consoleBox.scrollHeight;
    }
  });
});

clearConsoleBtn.addEventListener('click', () => {
  consoleBox.innerHTML = ''; // Clear console box
});
