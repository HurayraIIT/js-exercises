// @ts-check
import { test, expect } from "@playwright/test";
import measurePerformance from "../utils/performanceChecker";
import isLeapYear from "../challenges/isLeapYear";

test.describe("isLeapYear", () => {
  test("should return true for 1600", async () => {
    const { executionTime, memoryUsed, result } = measurePerformance(isLeapYear, 1600);
    expect(result).toBe(true);
    // Check performance thresholds
    expect(executionTime).toBeLessThan(100); // Less than 100ms
    expect(memoryUsed.rss).toBeLessThan(100 * 1024); // Less than 100MB
  });

  test("should return true for 2000", async () => {
    const { executionTime, memoryUsed, result } = measurePerformance(isLeapYear, 2000);
    expect(result).toBe(true);
    // Check performance thresholds
    expect(executionTime).toBeLessThan(100); // Less than 100ms
    expect(memoryUsed.rss).toBeLessThan(100 * 1024); // Less than 100MB
  });

  test("should return true for 2020", async () => {
    expect(isLeapYear(2020)).toBe(true);
  });

  test("should return true for 2400", async () => {
    expect(isLeapYear(2400)).toBe(true);
  });

  test("should return true for 1984", async () => {
    expect(isLeapYear(1984)).toBe(true);
  });

  test("should return false for 1700", async () => {
    expect(isLeapYear(1700)).toBe(false);
  });

  test("should return false for 1800", async () => {
    expect(isLeapYear(1800)).toBe(false);
  });

  test("should return false for 1900", async () => {
    expect(isLeapYear(1900)).toBe(false);
  });

  test("should return false for 2021", async () => {
    expect(isLeapYear(2021)).toBe(false);
  });

  test("should return false for 2019", async () => {
    expect(isLeapYear(2019)).toBe(false);
  });
});
