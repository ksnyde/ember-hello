App = require("app");
module.exports = App.Marker = DS.Model.extend({
  property: DS.attr("string"),
  property2: DS.attr("string"),
  
  calc_prop: function() {
    return this.get('property') + " " + this.get('property2');
  }.property('property', 'property2'),
  
});



module.exports = App.Marker.FIXTURES = [
  
];

