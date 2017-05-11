import Ember from 'ember';

export function booksRating(params/*, hash*/) {

  var reviews = params[0];
  var total = 0;
  var counter = 0;
  reviews.forEach(function(review){
      total += parseInt(review.get('rating'));
      counter++;
  });

  var bookRating =  total/counter;
  var star = '<i class="material-icons">star</i>';
  var empty = '<i class="material-icons">star_border</i>';
  var half = '<i class="material-icons">star_half</i>';

  if (counter === 0) {
    return Ember.String.htmlSafe(' ');
  } else {
    return Ember.String.htmlSafe(star.repeat(bookRating|0) + half.repeat(Math.round(bookRating%1)) + empty.repeat((5-bookRating)|0));
  }
}

export default Ember.Helper.helper(booksRating);
