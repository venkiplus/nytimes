
// This will late-load an image on window load as long as the
// attribute data-mw-lateload=true is on an element
x$(document).on("DOMContentLoaded", function() {
  x$('img[data-mw-lateload="true"]').each(function() {
    this.setAttribute('src', this.getAttribute('data-src'));
  });
});
// x$(window).load(function() {
//   x$('img[data-mw-lateload="true"]').each(function() {
//     this.setAttribute('src', this.getAttribute('data-src'));
//   });
// });
