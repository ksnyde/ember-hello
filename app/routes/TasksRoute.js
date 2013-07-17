/*jslint browser: true, jquery: true */ 
/*global App: false, require: false, Ember: false*/
App = require("app");

console.log("TasksRoute file loaded");
module.exports = App.TasksRoute = Ember.Route.extend({
	
	init: function() {
		console.log("TasksRoute instantiated!");
	},
	
	model: function() {
		return App.Task.find();
	}
  	
});
