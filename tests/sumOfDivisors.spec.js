// @ts-check
import { test, expect } from "@playwright/test";
import measurePerformance from "../utils/performanceChecker";
import sumOfDivisors from "../challenges/sumOfDivisors";

test.describe("Accuracy Tests", () => {
  test("should return 0 for 0", async () => {
    expect.soft(sumOfDivisors(0)).toBe(0);
  });

  test("should return 1 for 1", async () => {
    expect.soft(sumOfDivisors(1)).toBe(1);
  });

  test("should return 3 for 2", async () => {
    expect.soft(sumOfDivisors(2)).toBe(3);
  });

  test("should return 14 for 13", async () => {
    expect.soft(sumOfDivisors(13)).toBe(14);
  });
});

test.describe("Time Efficiency Tests", () => {
  const largeNumbers = [999983, 9999991, 1000037, 1000039, 100000007];

  for (const num of largeNumbers) {
    test(`Testing sumOfDivisors(${num})`, async () => {
      const { executionTime, memoryUsed, result } = measurePerformance(sumOfDivisors, num);
      expect.soft(executionTime).toBeLessThan(100); // Less than 100ms
      expect.soft(memoryUsed.rss).toBeLessThan(100 * 1024); // Less than 100MB
    });
  }
});
