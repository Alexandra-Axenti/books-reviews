import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var books = this.store.findAll('book');
    return new Ember.RSVP.Promise(function(resolve,reject){
      books.then(function(books){
        books.forEach(function(book){
          book.get('reviews').then(function(reviews){
            reviews.forEach(function(review){
            });
            resolve({
              "books":books
            });
          });
        });
      });
    });
  }
});
