function isPrime(num){
	var result = isPrime.result || {0 : true, 1 : true, 2 : true, 3 : true};
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