function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function isStrong(number) {
 
  let sum = 0;
  let tempNum = number;

  while (tempNum > 0) {
    let digit = tempNum % 10;
    let factorial = 1;

    // Calculate factorial of the digit
    for (let i = 1; i <= digit; i++) {
      factorial *= i;
    }

    sum += factorial;
    tempNum = Math.floor(tempNum / 10);
  }

  return sum === number;
}




function isArmstrong(number) {
  
  let sum = 0;
  let tempNum = number;
  const numDigits = number.toString().length;

  while (tempNum > 0) {
    let digit = tempNum % 10;
    sum += Math.pow(digit, numDigits);
    tempNum = Math.floor(tempNum / 10);
  }

  return sum === number;
}



function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  }
  let fact = 1;
  for (let i = 2; i <= number; i++) {
    fact *= i;
  }
  return fact;
}


 function fibonacci(n) {
  let fibSeries = [];
  let num1 = 0, num2 = 1, nextNum;

  for (let i = 0; i < n; i++) {
    fibSeries.push(num1);
    nextNum = num1 + num2;
    num1 = num2;
    num2 = nextNum;
  }

  return fibSeries.join(', '); // Return the Fibonacci series as a string
}



function convertFahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}

function performOperations() {
  const inputNumber = document.getElementById('inputNumber').value;
  const resultDiv = document.getElementById('result');
  const number = parseInt(inputNumber);

  if (!isNaN(number)) {
    let result = `Prime: ${isPrime(number)}<br>`;
    result += `Strong: ${isStrong(number)}<br>`;
    result += `Armstrong: ${isArmstrong(number)}<br>`;
    result += `Factorial: ${factorial(number)}<br>`;
    result += `Fibonacci Series: ${fibonacci(number)}<br>`;
    result += `Fahrenheit to Celsius: ${convertFahrenheitToCelsius(number)}<br>`;

    resultDiv.innerHTML = result;
  } else {
    resultDiv.innerHTML = 'Please enter a valid number.';
  }
}
