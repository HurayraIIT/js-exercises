// @ts-check
import { test, expect } from "@playwright/test";
import measurePerformance from "../utils/performanceChecker";
import isPrime from "../challenges/isPrime";

test.describe("isPrime", () => {
  test("should return true for prime numbers", async () => {
    expect.soft(isPrime(2)).toBe(true);
    expect.soft(isPrime(3)).toBe(true);
    expect.soft(isPrime(5)).toBe(true);
    expect.soft(isPrime(7)).toBe(true);
    expect.soft(isPrime(29)).toBe(true);
  });

  test("should return false for non-prime numbers", async () => {
    expect.soft(isPrime(0)).toBe(false);
    expect.soft(isPrime(1)).toBe(false);
    expect.soft(isPrime(4)).toBe(false);
    expect.soft(isPrime(6)).toBe(false);
    expect.soft(isPrime(9)).toBe(false);
  });
});

test.describe("Multiple Prime Time Efficiency Tests", () => {
  const largeNumbers = [999983, 9999991, 1000037, 1000039, 100000007];

  for (const num of largeNumbers) {
    test(`Testing isPrime(${num})`, async () => {
      const { executionTime, memoryUsed, result } = measurePerformance(isPrime, num);
    //   expect(result).toBe(true);
      // Check performance thresholds
      expect.soft(executionTime).toBeLessThan(100); // Less than 100ms
      expect.soft(memoryUsed.rss).toBeLessThan(100 * 1024); // Less than 100MB
    });
  }
});
