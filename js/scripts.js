// Detect if menu is 50px from the top
// If yes add the scroll-affix-header class and vice versa
$(window).on("scroll", function(e){
  if($(window).scrollTop() > 50) {
    $("body").addClass("scroll-affix-header");
  } else {
    $("body").removeClass("scroll-affix-header");
  }
}).trigger("scroll");