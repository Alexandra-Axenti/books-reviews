import Ember from 'ember';

export default Ember.Component.extend({
  favouriteBooks: Ember.inject.service(),

  actions: {
    addToFavourites(item) {
      if ((items.includes(item)) === false) {
      this.get('favouriteBooks').add(item);
      }
    }
  }
});
