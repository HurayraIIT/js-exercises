// @ts-check
import { test, expect } from "@playwright/test";
import measurePerformance from "../utils/performanceChecker";
import isPrime from "../challenges/isPrime";

test.describe("Accuracy Tests For Prime Checker", () => {
  test("should return true for 2", async () => {
    expect.soft(isPrime(2)).toBe(true);
  });

  test("should return true for 3", async () => {
    expect.soft(isPrime(3)).toBe(true);
  });

  test("should return true for 5", async () => {
    expect.soft(isPrime(5)).toBe(true);
  });

  test("should return true for 7", async () => {
    expect.soft(isPrime(7)).toBe(true);
  });

  test("should return true for 29", async () => {
    expect.soft(isPrime(29)).toBe(true);
  });

  test("should return false for 0", async () => {
    expect.soft(isPrime(0)).toBe(false);
  });

  test("should return false for 1", async () => {
    expect.soft(isPrime(1)).toBe(false);
    expect.soft(isPrime(4)).toBe(false);
    expect.soft(isPrime(6)).toBe(false);
    expect.soft(isPrime(9)).toBe(false);
  });

  test("should return false for 4", async () => {
    expect.soft(isPrime(4)).toBe(false);
  });

  test("should return false for 6", async () => {
    expect.soft(isPrime(6)).toBe(false);
  });

  test("should return false for 9", async () => {
    expect.soft(isPrime(9)).toBe(false);
  });
});

test.describe("Multiple Primes - Time Efficiency Tests", () => {
  const largeNumbers = [999983, 9999991, 1000037, 1000039, 100000007];

  for (const num of largeNumbers) {
    test(`Testing isPrime(${num})`, async () => {
      const { executionTime, memoryUsed, result } = measurePerformance(isPrime, num);
      expect.soft(executionTime).toBeLessThan(100); // Less than 100ms
      expect.soft(memoryUsed.rss).toBeLessThan(100 * 1024); // Less than 100MB
    });
  }
});
