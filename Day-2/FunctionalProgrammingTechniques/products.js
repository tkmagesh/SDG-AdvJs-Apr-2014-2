var products = [
	{id:7, name:"pen", cost:90, units:10, category:1},
	{id:3, name:"ten", cost:30, units:20, category:2},
	{id:6, name:"len", cost:60, units:30, category:1},
	{id:2, name:"den", cost:20, units:40, category:2},
	{id:1, name:"zen", cost:10, units:50, category:1},
	{id:9, name:"ken", cost:40, units:60, category:2}
]

function sort(list){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++){
			if (list[i].id > list[j].id){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
		}
}

//rewrite the above function to generaize the sort so that the function can be used for sorting based on ANY attribute

function sort(list,attr){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++){
			if (list[i][attr] > list[j][attr]){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
		}
}

function sort(list,selectorFn){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++){
			if (selectorFn(list[i]) > selectorFn(list[j])){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
		}
}

/*
Comparator return the following
	0 => left == right
	-1 => left < right
	1 => left > right
*/
function sort(list,comparatorFn){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++){
			if (comparatorFn(list[i],list[j]) > 0){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
		}
}

function getInvComparator(comparator){
  return function(p1,p2){
      return comparator(p1,p2) * -1;
  }
}

function costComparator(p1,p2){
  return p1.cost === p2.cost ? 0 : (p1.cost > p2.cost ? 1 : -1);
}

sort(products,getInvComparator(costComparator))

function filter(list,predicateFn){
	var result = [];
	for(var i=0;i<list.length;i++)
		if (predicateFn(list[i]))
			result.push(list[i])
	return result;
}

//min, max, sum, avg, countBy, groupBy, join

function min(list,selectorFn){
	var result = selectorFn(list[0]);
	for(var i=1;i<list.length;i++){
		var value = selectorFn(list[i]);
		if (value < result)
			result = value;
	}
	return result;
}

function max(list,selectorFn){
	var result = selectorFn(list[0]);
	for(var i=1;i<list.length;i++){
		var value = selectorFn(list[i]);
		if (value > result)
			result = value;
	}
	return result;
}

function groupBy(list,keySelector){
	var result = {};
	for(var i=0;i<list.length;i++){
		var key = keySelector(list[i]);
		result[key] = result[key] || [];
		result[key].push(list[i]);
	}
	return result;
}

//implement sum,avg,countBy,join
//for "join" use the following array as well

var categories = [
	{id : 1, name : "stationary"},
	{id : 2, name : "grocery"}
]

function sum(list, iterator){
	var result = 0;
	for(var i=0;i<list.length;i++)
		result += iterator(list[i]);
	return result;
}

var sumOfProductCost = sum(products,function(p){ return p.cost})

function countBy(list,predicate){
	var result = 0;
	for(var i=0;i<list.length;i++)
		if (predicate(list[i])) result++;
	return result;
}

function join(leftList, rightList, leftKeySelector, rightKeySelector, combinator){
	var result = [];
	for(var i=0;i<leftList.length;i++){
		var leftItem = leftList[i], leftKey = leftKeySelector(leftItem);
		for(var j=0;j<rightList.length;j++){
			var rightItem = rightList[j], rightKey = rightKeySelector(rightItem);
			if (leftKey === rightKey)
				result.push(combinator(leftItem,rightItem));
		}
	}
	return result;
}

var productsWithCategoryNames = join(products,categories,function(p){ return p.category;}, function(c){ return c.id}, function(p,c){ 
  return { id : p.id, name : p.name, cost : p.cost, units : p.units, category : c.name};
});

console.table(productsWithCategoryNames)