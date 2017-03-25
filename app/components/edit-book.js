import Ember from 'ember';

export default Ember.Component.extend({
  editBookForm: false,

  model() {
    return this.store.findAll('book');
  },

  actions: {
    editBookForm() {
      this.set('editBookForm', true);
    },

    edit(book) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        genre: this.get('genre'),
        image: this.get('image'),
        summary: this.get('summary'),
        publisher: this.get('pusblisher'),
        year: this.get('year')
      };
      this.set('editBookForm', false);
      this.sendAction('edit', book, params);
    }
  }
});
