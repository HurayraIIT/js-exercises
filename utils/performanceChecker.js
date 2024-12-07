import { performance } from "perf_hooks";

/**
 * Measures the execution time and memory usage of a function.
 * @param {Function} func - The function to test.
 * @param {...any} args - Arguments to pass to the function.
 * @returns {Object} - Object containing execution time and memory usage details.
 */
function measurePerformance(func, ...args) {
  const memoryBefore = process.memoryUsage();
  const startTime = performance.now();

  // Call the function with the provided arguments
  const result = func(...args);

  const endTime = performance.now();
  const memoryAfter = process.memoryUsage();

  const executionTime = endTime - startTime; // Time in milliseconds
  const memoryUsed = {
    rss: memoryAfter.rss - memoryBefore.rss, // Resident Set Size
    heapUsed: memoryAfter.heapUsed - memoryBefore.heapUsed, // Actual heap usage
  };

  console.log(`Execution Time: ${executionTime.toFixed(2)} ms`);
  console.log(`Memory Used (rss): ${(memoryUsed.rss / 1024).toFixed(2)} KB`);
  console.log(`Memory Used (heapUsed): ${(memoryUsed.heapUsed / 1024).toFixed(2)} KB`);

  return { executionTime, memoryUsed, result };
}

export default measurePerformance;
