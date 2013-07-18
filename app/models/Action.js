App = require("app");

module.exports = App.Action = DS.Model.extend({
  type: DS.attr("string"),
  sub_type: DS.attr("string")
});

module.exports = App.Action.FIXTURES = [
  {
      "id": "went-running",
      "type": "exercise",
      "sub_type": "running",
      "name": "Went Running",
      "synonyms": [
        "jogging",
        "sprinting",
        "interval training"
      ],
      "status": "Active",
      "icon": "run",
      "word_past_tense": "ran",
      "word_present_tense": "run",
      "key_markers": [
        "caloric_burn",
        "pace_average",
        "distance"
      ],
      "other_markers": [
        "pace_max",
        "heart_rate_avg",
        "heart_rate_peak",
        "heart_rate_recovery",
        "competition_type"
      ],
      "default_values": {
        "is_full_day_event": "false",
        "competition_type": "informal"
      }
    },
    {
      "id": "went-swimming",
      "type": "exercise",
      "name": "Went swimming",
      "synonyms": [
        ""
      ],
      "status": "Active",
      "icon": "swim",
      "word_past_tense": "swam",
      "word_present_tense": "swim"
    },
    {
      "id": "ate-lunch",
      "type": "food",
      "name": "Ate lunch",
      "synonyms": [
        "eat"
      ],
      "status": "Active"
    },
    {
      "id": "watched-movie",
      "type": "entertainment",
      "name": "Watched a movie",
      "synonyms": [
        ""
      ],
      "status": "Active",
      "icon": "movie",
      "word_past_tense": "watched",
      "word_present_tense": "watch",
      "key_markers": [
        "movie_name"
      ]
    }
];