import Ember from 'ember';

export default Ember.Component.extend({

  bookRating: Ember.computed('reviews',function() {
    var reviews = this.get('reviews');
    var total = 0;
    var counter = 0;
    if (this.get('reviews') == null) {
      return 0;
    } else {
      reviews.forEach(function(review){
          total += parseInt(review.get('rating'));
          counter++;
      });
    }
      return total/counter;
  }),
});
