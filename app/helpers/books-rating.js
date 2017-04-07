import Ember from 'ember';

export function booksRating(params/*, hash*/) {
  var bookRating = params[0];

  if (bookRating === 5) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon"><image src="./public/resources/images/half.png"></image></span><span class="glyphicon"><image src="./public/resources/images/half.png"></image></span>');
  } else if ((bookRating >= 4.5) && (bookRating < 5)) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span><image class="glyph" src="/assets/half.png"></image></span>');
  } else if ((bookRating >= 4) && (bookRating < 4.5)) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star-empty"></span>');
  } else if ((bookRating >= 3.5) && (bookRating < 4)) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"><span><image class="glyph" src="/assets/half.png"></image></span></span><span class="glyphicon glyphicon-star-empty"></span>');
  } else if ((bookRating >= 3) && (bookRating < 3.5)) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span>');
  } else if ((bookRating >= 2.5) && (bookRating < 3)) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span><image class="glyph" src="/assets/half.png"></image></span></span><span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span>');
  } else if ((bookRating >= 2) && (bookRating < 2.5)) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span>');
  } else if ((bookRating >= 1.5) && (bookRating < 2)) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span><image class="glyph" src="/assets/half.png"></image></span><span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span>');
  } else if ((bookRating >= 1)) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span>');
  }
}

export default Ember.Helper.helper(booksRating);
