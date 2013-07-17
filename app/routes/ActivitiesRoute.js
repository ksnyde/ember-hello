/*jslint browser: true, jquery: true */ 
/*global App: false, require: false, Ember: false*/
App=require("app");

console.log("ActivitiesRoute file loaded");
module.exports = App.ActivitiesRoute = Ember.Route.extend({

	init: function() {
		console.log("ActivitesRoute instantiated!");
	},

	model: function() {
		return App.Activity.find();
	}

});
