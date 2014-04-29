function isPrime(num){
	//var result = isPrime.result || {0 : true, 1 : true, 2 : true, 3 : true};
	var result;
	if (typeof isPrime.result === "undefined"){
		result = isPrime.result;
	} else {
		result = {0 : true, 1 : true, 2 : true, 3 : true}
	}
	return function isPrime(num){
		
		if (typeof result[num] !== "undefined") {
			console.log("from cache...");
			return result[num];
		}
		console.log("freshly brewed...");
		result[num] = true;
		for(var i=2;i<= num/2;i++){
			if (num % i === 0){
				result[num] = false;
				break;
			}
		}
		isPrime.result = result;
		return result[num];
	}
}


function getPrimer(){
	var result = {0 : true, 1 : true, 2 : true, 3 : true};
	return function isPrime(num){
		
		if (typeof result[num] !== "undefined") {
			console.log("from cache...");
			return result[num];
		}
		console.log("freshly brewed...");
		result[num] = true;
		for(var i=2;i<= num/2;i++){
			if (num % i === 0){
				result[num] = false;
				break;
			}
		}
		return result[num];
	} 
}

function isPrime(num){
	var result = {0 : true, 1 : true, 2 : true, 3 : true};
	isPrime = function(num){
		
		if (typeof result[num] !== "undefined") {
			console.log("from cache...");
			return result[num];
		}
		console.log("freshly brewed...");
		result[num] = true;
		for(var i=2;i<= num/2;i++){
			if (num % i === 0){
				result[num] = false;
				break;
			}
		}
		return result[num];
	} 
	return isPrime(num);
}