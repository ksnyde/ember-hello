/*jslint browser: true, jquery: true */ 
/*global App: false, require: false, DS: false, moment: false */
App = require("app");

module.exports = App.Activity = DS.Model.extend({
	
    action: DS.attr("string"),
    name: DS.attr("string"),
    description: DS.attr("string"),
    user_comment: DS.attr("string"),
    is_private: DS.attr("boolean"),
    start_time: DS.attr("date"),
    start_time_utc: DS.attr("date"),
    end_time: DS.attr("date"),
    icon: DS.attr("string"),
    distance: DS.attr("number"),
    caloric_burn: DS.attr("number"),
    caloric_intake: DS.attr("number"),
    qual_healthiness: DS.attr("number"),
  
    duration: function() {
      if (!this.get('start_time') || !this.get('end_time')) { return false; }
      return moment(
      this.get('end_time'),"YYYY-MM-DD HH:mm:ss")
          .diff(moment(this.get('start_time'),"YYYY-MM-DD HH:mm:ss"),"minutes");
    }.property('start_time', 'end_time'),
  
    pace: function() {
    if (!this.get('distance') || !this.get('duration')) { return false; }
      return Math.ceil(this.get('duration') / this.get('distance') * 100)/100;
    }.property('distance','duration')
  
});

// ===== Fixtures =====
module.exports = App.Activity.FIXTURES = [
    {
      "id" : "1",
      "action" : "went-running",
      
      "name": "Went Running",
      "description" : "Went for a 7 mile run.",
      "is_private" : false,
      "start_time" : "2013-07-09 08:00:06",
      "start_time_utc" : "0000-00-00 00:00:00",
      "end_time" : "2013-07-09 09:05:00",
      "icon": "run",
      
      "distance" : 7,
      "caloric_burn" : "950"
    },
    {
      "id" : "2",
      "action" : "ate-lunch",
      
      "name": "Ate Lunch",
      "description": "Ate lunch at McDonalds.",
      "is_private" : false,
      "start_time" : "2013-07-09 12:15:08",
      "start_time_utc" : "0000-00-00 00:00:00",
      "end_time" : "2013-07-09 13:05:00",
      "icon": "food",
      
      "caloric_intake" : "825",
      "qual_healthiness" : "5",
      "qual_enjoyment" : "9",
      
      "user_comment" : "that was one unhealthy meal but I do love the special sauce!"
    },
  {
    "id" : "3",
    "action" : "went-swimming",
    
    "name": "Went Swimming",
    "description": "Went swimming for 3 miles. Avg Heart rate 120.",
    "is_private" : false,
    "start_time" : "2013-07-09 15:32:50",
    "start_time_utc" : "0000-00-00 00:00:00",
    "end_time" : "2013-07-09 16:37:00",
    "icon": "swim",
    
    "distance" : 3,
    "caloric_burn" : "1200",
    "heart_rate_avg" : "120"
  },
  {
    "id" : "4",
    "action" : "watched-movie",
    
    "name": "Watched a Movie",
    "description": "Watched Fletch at the Odeon Cinema",
    "is_private" : true,
    "start_time" : "2013-07-09 20:30:08",
    "start_time_utc" : "0000-00-00 00:00:00",
    "icon": "movie",
    
    "movie_name" : "Ghost Busters"
  }
];
