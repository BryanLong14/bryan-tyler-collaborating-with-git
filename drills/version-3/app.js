function getProduct(number1, number2) {
  var product = number1 * number2;
  return product;
}

function multiply(a, b) {
  var mult = a * b;
  return mult;
}

var array = [
  {
    name: Bryan,
    age: 34
  },
  {
    name: Tyler,
    age: 33
  }
];

var arrayOfNumber = [2, 4, 5];

function getSum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

getSum(arrayOfNumber);
