import Ember from 'ember';

export default Ember.Component.extend({

  bookRating: Ember.computed('book.reviews',function() {
    var reviews = this.get('book.reviews');
    var total = 0;
    var counter = 0;
    debugger;
    reviews.forEach(function(review){
        total += parseInt(review.get('rating'));
        counter++;
    })
      return total/counter;
  }),
});
