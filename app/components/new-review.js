import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,

 actions: {
   addNewReview() {
     this.set('addNewReview', true);
   },

   saveReview() {
      var params = {
        email: this.get('email'),
        title: this.get('title'),
        author: this.get('author'),
        content: this.get('content'),
        rating: this.get('rating'),
        book: this.get('book')
      };
      this.set('addNewReview', false);
      this.sendAction('saveReview', params);
    }
  }
});
