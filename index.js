// Define the function called generateFibonacci
function generateFibonacci(n) {
  // Create an array
  var fibonacci = [0, 1];

  // Use a for loop to iterate from 2 to n
  for (var i = 2; i <= n; i++) {
    var nextFibonacci = fibonacci[i - 1] + fibonacci[i - 2];

    // push this new number to the array
    fibonacci.push(nextFibonacci);
  }
  return fibonacci;
}

// Call the generateFibonacci function with an appropriate value of n
var n = 10;
var result = generateFibonacci(n);

console.log(result);
