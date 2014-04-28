function add(x,y){
	function parseArg(n){
		return !isNaN(n) ? parseInt(n,10) : 0;
	}
	return parseArg(x) + parseArg(y);
}