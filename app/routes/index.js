import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var books = this.store.findAll('book')
    return Ember.RSVP.hash({
      books: books

    });
  }
});
