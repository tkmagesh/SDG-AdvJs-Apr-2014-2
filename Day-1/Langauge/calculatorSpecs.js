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
})