import Ember from 'ember';

export function commentRating(params/*, hash*/) {
  var review = params[0];


  var star = '<i class="material-icons">star</i>';
  var empty = '<i class="material-icons">star_border</i>';


  return Ember.String.htmlSafe(star.repeat(review.get('rating')|0) + empty.repeat((5-review.get('rating'))|0));
  
}

export default Ember.Helper.helper(commentRating);
