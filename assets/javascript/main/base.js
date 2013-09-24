$(document).on("DOMContentLoaded", function() {
  $("#mw-pers-nav-menu, #mw-pers-nav-mask").click(function() {
    $("#mw-pers-nav, #mw-pers-nav-mask, #mw-body-content").toggleClass("mw-pers-nav-active");
  })
});