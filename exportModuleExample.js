var rect = require('./rectangle-1');

function solveRect(l,b) {
	console.log("Solving rectangle problem");
	
	if(l < 0 || b < 0) {
		console.log("Invalid l or b");
	}
	else {
		console.log("Area of the rectangle is: " + rect.area(l,b));
		console.log("Perimeter of the rectangle is: " + rect.perimeter(l,b));
	}
}

solveRect(3,4);
solveRect(-2,6);
solveRect(5,-9);