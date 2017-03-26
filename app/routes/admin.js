import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      books: this.store.findAll('book'),
      reviews: this.store.findAll('review')
    });
  },

  actions: {
    edit(book, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          book.set(key,params[key]);
        }
      });
      book.save();
    },

    saveBook(params) {
          var newBook = this.store.createRecord('book', params);
          newBook.save();
     }
   }
});
