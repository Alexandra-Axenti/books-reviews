import Ember from 'ember';

export default Ember.Component.extend({
  addNewBook: false,
 actions: {
   addNewBook() {
     this.set('addNewBook', true);
   },

   saveBook() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        genre: this.get('genre'),
        image: this.get('image'),
        summary: this.get('summary'),
        publisher: this.get('publisher'),
        year: this.get('year')
      };
      this.set('addNewBook', false);
      this.sendAction('saveBook', params);
    }
  }
});
