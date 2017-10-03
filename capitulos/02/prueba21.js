

var lib=require('readline'); 
var num;
function calculateRectangleArea(baseLength) {
var calculo;
calculo=baseLength * 3.14;
return calculo};

var interface1=lib.createInterface({
input:process.stdin,
output:process.stdout
});

interface1.question('Numero ',function(num){
console.log(calculateRectangleArea(num));
interface1.close();
});

