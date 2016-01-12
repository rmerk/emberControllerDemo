import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
      sayHello: function(){
        alert('Hello')
      },
      toggleBody: function(){
        this.toggleProperty('isShowingBody');
      },
      submitAction: function(){
        console.log(this.get('name'));
        console.log(this.get('comment'));
      }
    },
  title: 'My Blog Post',
  body: 'This is the body of my blog!',
  authors: ['Ryan','Dave','Steve'],
  created: new Date(),
  comments: [
    {
      name: 'Mike',
      comment: 'Thanks for the great post'
    },
    {
      name: 'Joe',
      comment: 'Thanks man'
    },
    {
      name: 'Carl',
      comment: 'Thanks'
    }
  ]
});
