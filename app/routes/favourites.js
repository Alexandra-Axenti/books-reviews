import Ember from 'ember';

export default Ember.Route.extend({
  favouriteBooks: Ember.inject.service(),

  model() {
    return this.store.findAll('book');
  },

  actions: {
    addToFavourites(item) {
      this.get('favouriteBooks').add(item);
    }
  }
});
