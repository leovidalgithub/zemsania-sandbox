




//------------------------------------------------------
// self-invokers functions
var accumulator = (function() {
	var sum = 0;
	return function(x){
		sum = sum + x;
		return sum;
	}
})();
