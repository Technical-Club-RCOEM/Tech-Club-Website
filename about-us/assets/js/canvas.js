$(window).on("load resize scroll", function() {
  $(".bg-static").each(function() {
    var windowTop = $(window).scrollTop();
    var elementTop = $(this).offset().top;
    var leftPosition = windowTop - elementTop;
      $(this)
        .find(".bg-move")
        .css({ left: leftPosition });
  });
});