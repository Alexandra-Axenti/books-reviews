import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(item) {
    if ((this.get('items').includes(item)) == false) {
      this.get('items').pushObject(item);
    }
  },

  has(item) {
    return this.get('items').includes(item);
  }
});
