import Ember from 'ember';

export function booksRating(params/*, hash*/) {
  var bookRating = params[0];

  if (bookRating === 5) {
    return Ember.String.htmlSafe('<i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i>');
  } else if ((bookRating >= 4.5) && (bookRating < 5)) {
    return Ember.String.htmlSafe('<i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star_half</i>');
  } else if ((bookRating >= 4) && (bookRating < 4.5)) {
    return Ember.String.htmlSafe('<i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star_border</i>');
  } else if ((bookRating >= 3.5) && (bookRating < 4)) {
    return Ember.String.htmlSafe('<i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star_half</i><i class="material-icons">star_border</i>');
  } else if ((bookRating >= 3) && (bookRating < 3.5)) {
    return Ember.String.htmlSafe('<i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star_border</i><i class="material-icons">star_border</i>');
  } else if ((bookRating >= 2.5) && (bookRating < 3)) {
    return Ember.String.htmlSafe('<i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star_half</i><i class="material-icons">star_border</i><i class="material-icons">star_border</i>');
  } else if ((bookRating >= 2) && (bookRating < 2.5)) {
    return Ember.String.htmlSafe('<i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star_border</i><i class="material-icons">star_border</i><i class="material-icons">star_border</i>');
  } else if ((bookRating >= 1.5) && (bookRating < 2)) {
    return Ember.String.htmlSafe('<i class="material-icons">star</i><i class="material-icons">star_half</i><i class="material-icons">star_border</i><i class="material-icons">star_border</i><i class="material-icons">star_border</i>');
  } else if ((bookRating >= 1)) {
    return Ember.String.htmlSafe('<i class="material-icons">star</i><i class="material-icons">star_border</i><i class="material-icons">star_border</i><i class="material-icons">star_border</i><i class="material-icons">star_border</i>');
  }
}

export default Ember.Helper.helper(booksRating);
