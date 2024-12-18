// challenges/sumOfDivisors.js

/**
 * Calculates and returns the sum of divisors for a positive integer number.
 * @param {number} num - A positive integer number.
 * @returns {number} - The sum of all divisors of num.
 */
function sumOfDivisors(num) {
  // Complete the function
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        sum += i;
    }
  }
  return sum;
}

export default sumOfDivisors;
