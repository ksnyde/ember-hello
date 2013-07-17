// Namespace
App = require('app');

// ===== Router =====
App.Router.map(function() {

	this.resource('index', { path: '/' }, function() {});
    this.resource('activities', { path: '/activities' }, function() {});
    this.resource('hi', { path: '/hi' }, function() {});

});

// ===== Routes =====
require('routes/ActivitiesRoute');

// ===== Store =====
require('stores/Fixture');
// ===== Models =====
// require('models/Activity');
require('models/Activity');

// ===== Views =====
// require('views/ActivitiesView');

// ===== Controllers ===== 
require ('controllers/ActivitiesController');

// ===== Template Helpers =====
require('helpers/time');

// ===== Templates =====
require ('templates/application');
require ('templates/hi');
require ('templates/activities');