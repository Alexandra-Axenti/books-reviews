import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr(),
  title: DS.attr(),
  author: DS.attr(),
  genre: DS.attr(),
  summary: DS.attr(),
  publisher: DS.attr(),
  year: DS.attr(),
  reviews: DS.hasMany('review', { async: true })
});
