function getSpinner(){
	var counter =0;
	var spinner = {
	  up : function(){
	     return ++counter;
	  },
	  down : function(){
	     return --counter;
	  }
	}
	return spinner;
} 




