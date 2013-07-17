	App = require("app");

	console.log("Store file loaded");
	module.exports = App.Store = DS.Store.extend({
		revision: 13,
		adapter: DS.FixtureAdapter.create()
	});
