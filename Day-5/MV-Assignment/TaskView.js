function TaskView(model){
		this.model = model;
		this.$root = $("<li>");
		this.init = function(){

			this.$root.html(this.model.name());

			/*UI Events*/
			this.$root.on("click",(function(){
				this.model.toggleCompletion();
			}).bind(this));

			/*Model Events*/
			this.model.addChangeSubscriber("isCompleted",(function(){
				if (this.model.isCompleted()){
					this.$root.addClass("completed");
				} else {
					this.$root.removeClass("completed");
				}
			}).bind(this));

			this.model.addChangeSubscriber("remove",(function(){
				this.$root.remove();
			}).bind(this))
		};
		this.render = function(){
			return this;
		}
	}