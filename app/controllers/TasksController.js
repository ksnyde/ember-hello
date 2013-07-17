/*jslint browser: true, jquery: true */ 
/*global App: false, require: false, Ember: false, console: false*/
App= require('app');	

console.log("TasksController file loaded");
module.exports = App.TasksController = Ember.ArrayController.extend({
    
	init: function() {
		console.log ("TasksController instantiated!");
	},
	
	toggleDetails: function(target) {
		target = "#activity-details-" + target;
		console.log("Pressed " + target);
		if (jQuery(target).is(":hidden")) {
			jQuery( target ).slideDown( "fast" );
		} else { 
			jQuery( target ).slideUp( "fast" );
		}
	}
	
});