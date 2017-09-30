/* eslint-env node, es6, jest */
const {
  calculateArithmeticNthTerm,
  calculateArithmeticProgressionSum,
  calculateGeometricNthTerm,
  calculateGeometricProgresionSum
} = require('./progressions.js');

it('should calculate the nth term of an arithmetic progression', () => {
  expect(calculateArithmeticNthTerm(3, 2, 5)).toBe(14);
  expect(calculateArithmeticNthTerm(14, 4, 55)).toBe(760);
});

it('should calculate the arithmetic progression sum', () => {
  expect(calculateArithmeticProgressionSum(3, 2, 5)).toBe(40);
  expect(calculateArithmeticProgressionSum(22, 11, 1024)).toBe(11534336);
});

it('should calculate the nth term of a geometric progression', () => {
  expect(calculateGeometricNthTerm(3, 3, 3)).toBe(27);
  expect(calculateArithmeticNthTerm(16, 121, 10)).toBe(265);
});

it('should calculate the geometric progression sum', () => {
  expect(calculateGeometricProgresionSum(5, 2, 4)).toBe(312);
  expect(calculateGeometricProgresionSum(7, 49, 10)).toBe(2306881192);
});
