/* eslint-env node, es6, jest */
const {
  calculateRectangleArea,
  calculateTriangleArea,
  calculateCircleArea
} = require('./geometry.js');

it('should calculate the area of a rectangle', () => {
  expect(calculateRectangleArea(2, 2)).toBe(4);
  expect(calculateRectangleArea(14, 22)).toBe(308);
  expect(calculateRectangleArea(34647, 34648)).toBe(1200449256);
});

it('should calculate the area of a triangle', () => {
  expect(calculateTriangleArea(2, 2)).toBe(2);
  expect(calculateTriangleArea(45, 222)).toBe(4995);
  expect(calculateTriangleArea(12554, 334532)).toBe(2099857364);
});

it('should calculate the area of a circle', () => {
  expect(calculateCircleArea(64)).toBe(12867.963509103793);
  expect(calculateCircleArea(512)).toBe(823549.6645826427);
  expect(calculateCircleArea(1024)).toBe(3294198.658330571);
});
