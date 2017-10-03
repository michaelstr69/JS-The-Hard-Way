

function calculateRectangleArea(baseLength, heightLength) {
var area;
area=baseLength * heightLength;
return area
};

function calculateTriangleArea(baseLength, heightLength) {
var area;
area=(baseLength * heightLength)/2;
return area
};

function calculateCircleArea(radiusLength) {
var area;
area=(radiusLength^2)*3.14;
return area
};

module.exports = {
 calculateRectangleArea, calculateTriangleArea, calculateCircleArea
};
