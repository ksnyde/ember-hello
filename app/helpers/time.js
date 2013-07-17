Ember.Handlebars.registerBoundHelper('time', function(value,options) {
	var aMomentInTime = new moment(value,["YYYY-MM-DD", "YYYY-MM-DD HH:mm:ss"]);
	return aMomentInTime.format("h:mm A");
});