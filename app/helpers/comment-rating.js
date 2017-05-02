import Ember from 'ember';

export function commentRating(params/*, hash*/) {
  var review = params[0];

  if (review.get('rating') === 5) {
    return Ember.String.htmlSafe('<i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i>');
  } else if (review.get('rating') === 4) {
    return Ember.String.htmlSafe('<i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star_border</i>');
  } else if (review.get('rating') === 3) {
    return Ember.String.htmlSafe('<i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star_border</i><i class="material-icons">star_border</i>');
  } else if (review.get('rating') === 2) {
    return Ember.String.htmlSafe('<i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star_border</i><i class="material-icons">star_border</i><i class="material-icons">star_border</i>');
  } else if (review.get('rating') === 1) {
    return Ember.String.htmlSafe('<i class="material-icons">star</i><i class="material-icons">star_border</i><i class="material-icons">star_border</i><i class="material-icons">star_border</i><i class="material-icons">star_border</i>');
  }
}

export default Ember.Helper.helper(commentRating);
