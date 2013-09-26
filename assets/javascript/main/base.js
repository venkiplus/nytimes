// if (typeof $ === 'undefined')
//   $ = jQuery;
jQuery(document).ready(function ($) {
  $(".mw-pers-nav-toggler").on('click', function() {
    $("#mw-pers-nav, #mw-pers-nav-mask, #mw-body-content").toggleClass("mw-pers-nav-active");
  });
  // increase or decrease font size
  $.changeFontSize = function(number) {
    var currentSize = parseInt($("p").css('font-size'), 10);
    currentSize += number;
    var nextSize = currentSize.toString().concat("px");
    $("p").css('font-size', nextSize);
  }
  $(".mw-article").each(function() {
    $(".mw-increase-size").click(function() {
      $.changeFontSize(1);
    });
    $(".mw-decrease-size").click(function() {
      $.changeFontSize(-1);
    });
  });
});