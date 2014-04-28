$(function(){
	test("Should be able to add two numbers",function(){
		//arrange
		var number1 = 10,
			number2 = 20,
			expectedResult = 30;

		//act
		var result = add(number1,number2);

		//assert
		return expectedResult === result;
	});

	test("Should be able to add two numbers in string format",function(){
		//arrange
		var number1 = "10",
			number2 = "20",
			expectedResult = 30;

		//act
		var result = add(number1,number2);

		//assert
		return expectedResult === result;
	});

	test("Should be able to consider non-numeric strings as zero",function(){
		//arrange
		var number1 = "10",
			number2 = "abc",
			expectedResult = 10;

		//act
		var result = add(number1,number2);
		console.log(result);
		//assert
		return expectedResult === result;
	})

	test("Should be able to add functions returning numbers",function(){
		//arrange
		var f1 = function(){ return 10;},
			f2 = function(){ return 20;},
			expectedResult = 30;
		

		//act
		var result = add(f1,f2);
		console.log(result);
		//assert
		return expectedResult === result;
	})
	test("Should be able to add functions returning numbers in string format",function(){
		//arrange
		var f1 = function(){ return "10";},
			f2 = function(){ return "20";},
			expectedResult = 30;
		

		//act
		var result = add(f1,f2);
		console.log(result);
		//assert
		return expectedResult === result;
	})
	test("Should be able to add functions returning functions returning numbers in string format",function(){
		//arrange
		var f1 = function(){ return function(){ return "10";}},
			f2 = function(){ return function(){ return "20";}},
			expectedResult = 30;
		

		//act
		var result = add(f1,f2);
		console.log(result);
		//assert
		return expectedResult === result;
	})
	test("Should return zero when no arguments are passed",function(){
		//arrange
		var expectedResult = 0;
		

		//act
		var result = add();
		console.log(result);
		//assert
		return expectedResult === result;
	})
	test("Should be able to add more than 2 numbers",function(){
		//arrange
		var expectedResult = 100;
		

		//act
		var result = add(10,20,30,40);
		console.log(result);
		//assert
		return expectedResult === result;
	})
})