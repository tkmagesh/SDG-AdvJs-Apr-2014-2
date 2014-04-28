function test(testName, testFn){
		var result = testFn();
		$("<li>")
			.html(testName)
			.addClass(result ? "pass" : "fail")
			.appendTo("#ulSpecList");
	}