var Backbone = require('backbone');


var Person = Backbone.Model.extend({
  defaults: {
    'gender': 'female',
    'hair': true,
    'birthday': new Date('1/1/1970')
  },
  initialize: function(){
    console.log('New person born');
  },
  makeSandwhich: function(){
    console.log('Made you a ' + this.get('type'));
  },
  sayName: function(){
    console.log('My name is ' + this.get('name'));
  }
});


module.exports = {
  'Person': Person
};
