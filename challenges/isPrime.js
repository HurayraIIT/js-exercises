// challenges/isPrime.js

/**
 * Determines if a given number is a prime number.
 * @param {number} num - The number to check.
 * @returns {boolean} - Should return true if the number is prime, false otherwise.
 */
function isPrime(num) {
  if (num <= 1) return false; // Numbers <= 1 are not prime.
  if (num === 2 || num === 3) return true; // Handle small edge cases
  if (num % 2 === 0 || num % 3 === 0) return false; // Exclude multiples of 2 and 3.

  // Efficient prime check using numbers up to the square root of num.
  for (let i = 5; i < num; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
}

export default isPrime;
