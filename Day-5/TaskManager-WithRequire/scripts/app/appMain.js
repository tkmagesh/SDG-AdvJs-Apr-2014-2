require.config({
	baseUrl : "/scripts/",
	paths :{
		jquery : './vendor/jquery',
		templates : '../../templates'
	}
})
require(['jquery','app/TaskCollection','app/TaskCollectionView'],function($,TaskCollection,TaskCollectionView){
	$(function(){
		window.taskCollection = new TaskCollection();
		window.taskCollectionView = new TaskCollectionView(taskCollection);
		taskCollectionView.init();
		taskCollectionView.render().$root.appendTo(document.body);
	});
});