var Backbone = require('backbone');
var Person = require('./person').Person;

var PersonCollection = Backbone.Collection.extend({
  initialize: function(){
    console.log('collection was created');
  },
  model: Person
});

module.exports = {
  'PersonCollection': PersonCollection
}
