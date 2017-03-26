import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      book: this.store.findRecord('book', params.book_id),
      reviews: this.store.findAll('review')
    });
  },

  actions: {

    saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      var book = params.book;
      book.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return book.save();
      });
      this.transitionTo('book', book_id);
    }
  }
});
