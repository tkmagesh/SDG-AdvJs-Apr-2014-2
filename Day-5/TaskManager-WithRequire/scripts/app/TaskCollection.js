define(['app/Task'], function(Task){
	return function TaskCollection(){
		var list = [];
		this.addTask = function(taskName){
			var newTask = new Task(taskName);
			list.push(newTask);
			triggerChangeSubscribers("add",newTask);
		};

		this.removeCompleted = function(){
			for(var i=list.length-1;i>=0;i--){
				console.log(list[i].isCompleted())
				if (list[i].isCompleted()){
					list[i].remove();
					list.splice(i,1);
				}
			}
		};

		var _changeSubscribers = {};
		this.addChangeSubscriber = function(attrName, callback){
			_changeSubscribers[attrName] = _changeSubscribers[attrName] || [];
			_changeSubscribers[attrName].push(callback);
		};
		function triggerChangeSubscribers(attrName){
			var subscribers = _changeSubscribers[attrName] || [];
			//console.log(arguments);
			var args = Array.prototype.slice.call(arguments,1);
			for(var i=0;i<subscribers.length;i++){
				setTimeout( (function(index,args){
						return function(){
							subscribers[index].apply(this,args);
						}
					})(i,args)
				);
			}
		}
	}
});