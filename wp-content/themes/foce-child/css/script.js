
// ---------- Burger Menu ----------
console.log("test du script !");
document.addEventListener("DOMContentLoaded", function () {
  script();
});
function script() {
(function($) {
  console.log("script");
  $(".burger-open").click(function() {
    console.log("burger-open-click click");
    $(".burger-menu").animate({ height: "toggle", opacity: "toggle" }, 1000);
    $(".burger-menu").toggleClass("open active");
    $(".burger-close-modal").toggleClass("close active");
  });
  $("a").click(function() {
    if ($(".burger-menu").hasClass("burger active")) {
      $(".burger-menu").animate({ height: "toggle", opacity: "toggle" }, 1000);
      $(".burger-menu").removeClass("burger open active");
      $(".burger-close-modal").removeClass("close active");
    }
  });
})(jQuery);
}
