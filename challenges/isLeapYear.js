"use strict";

/**
 * Determines whether a given year is a leap year.
 * @param {number} year - The year to check.
 * @returns {boolean} - Returns true if the year is a leap year, false otherwise.
 */
function isLeapYear(year) {
  if (year % 4!== 0) {
    return false;
  }
  if (year % 100 === 0) {
    return year % 400 === 0;
  }
  // for any other year, it's a leap year if it's divisible by 400
  return true;
}

export default isLeapYear;
