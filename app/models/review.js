import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  email: DS.attr(),
  content: DS.attr(),
  rating: DS.attr('number'),
  book: DS.belongsTo('book', { async: true })
});
