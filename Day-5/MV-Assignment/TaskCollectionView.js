function TaskCollectionView(collection){
		this.collection = collection;
		this.$root = $("<div>");

		this.init = function(){
			/*UI Events*/
			
			this.$root.on("click","#btnAddTask",(function(){
				var taskName = this.$txtTask.val();
				var newTask = this.collection.addTask(taskName);
			}).bind(this));

			this.$root.on("click","#btnRemoveCompleted",(function(){
				this.collection.removeCompleted();
			}).bind(this));

			/*Model Events*/
			this.collection.addChangeSubscriber("add",(function(newTask){
				var newTaskView = new TaskView(newTask);
				newTaskView.init();
				newTaskView.render().$root.appendTo($("#ulTaskList",this.$root));
			}).bind(this));
		};

		this.render = function(){
			this.$root.append($("#appTemplate").html());
			this.$txtTask = $("#txtTask",this.$root);
			return this;
		}
	}
