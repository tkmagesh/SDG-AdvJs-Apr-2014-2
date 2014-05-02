function Task(name){
		var _name = name;
		this.name = function(val){
			if (typeof val === "undefined") return _name;
			_name = val;
			triggerChangeSubscribers("name");
		};

		var _isCompleted = false;
		this.isCompleted = function(){
			return _isCompleted;
		}
		this.toggleCompletion = function(){
			_isCompleted = !_isCompleted;
			triggerChangeSubscribers("isCompleted");
		};

		this.remove = function(){
			triggerChangeSubscribers("remove");
		}

		var _changeSubscribers = {};
		this.addChangeSubscriber = function(attrName, callback){
			_changeSubscribers[attrName] = _changeSubscribers[attrName] || [];
			_changeSubscribers[attrName].push(callback);
		};
		function triggerChangeSubscribers(attrName){
			var subscribers = _changeSubscribers[attrName] || [];
			for(var i=0;i<subscribers.length;i++){
				setTimeout( (function(index){
						return function(){
							subscribers[index]();
						}
					})(i)
				);
			}
		}
	}