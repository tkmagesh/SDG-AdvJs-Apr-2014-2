//Constructor Functions
1. a CF is invoked with the "new" keyword
2. "this" in a CF will refer to a new object
3. the default return value will be the object "this"

4. every object maintains the relationship with the CF using which the object is created through the "constructor" property

//Create a SalaryCalculator class
	-basic
	-hra
	-da
	-tax

function SalaryCalculator(basic,hra,da,tax){
	this.basic = basic;
	this.hra = hra;
	this.da = da;
	this.tax = tax;
	this.calculate = function(){
		var gross = this.basic + this.hra + this.da;
		this.salar = gross * ((100-this.tax)/100);
	}
}
//usage
var calc = new SalaryCalculator(10000,2000,3000,10)
calc.calculate();
console.log(calc.salary) => 13500;

calc.basic => 10000
calc.hra => 2000
calc.da => 3000
calc.tax => 10


Create an "Employee" CF (id,name,salary)

id => readonly
name => cannot be set an empty string
salary => assign a value less than the current salary

function Employee(id,name,salary){
	if (!(this instanceof Employee))
		return new Employee(id,name,salary);
	
	var _id = id,
		_name = name,
		_salary = salary;

	this.id = function(){
		return _id;
	};
	this.name = function(val){
		if (typeof val === "undefined") return _name;
		if (val !== "") _name = val;
	};

	this.salary = function(val){
		if (typeof val === "undefined") return _salary;
		if (val > _salary) _salary = val;
	}
}

