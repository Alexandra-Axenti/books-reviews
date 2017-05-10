import Ember from 'ember';

export default Ember.Component.extend({
  favouriteBooks: Ember.inject.service(),

  isFavourite: Ember.computed('favouriteBooks',function() {
    return this.get('favouriteBooks').has(this.get('book'));
  }),

  actions: {
    addToFavourites(item) {
      this.get('favouriteBooks').add(item);
    }
  }
});
