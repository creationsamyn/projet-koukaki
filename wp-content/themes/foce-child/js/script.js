
// ---------- Burger Menu ----------
console.log("test du script !");
document.addEventListener("DOMContentLoaded", function () {
  script();
});

function script() {
  (function($) {
    console.log("script");
    $(".burger-open").click(function() {
      if ($(".burger-menu").hasClass("active")) {
        $(".burger-menu").animate({ height: "toggle", opacity: "toggle" }, 1000);
        $(".burger-menu").removeClass("active");
        $(".burger-close-modal").removeClass("close active");
        $(".line").removeClass("open");
        $(".closeCross").removeClass("open");  
      }
      else {
        $(".line").addClass("open");
        $(".closeCross").addClass("open");
        console.log("burger-open-click click");
        $(".burger-menu").animate({ height: "toggle", opacity: "toggle" }, 1000);
        $(".burger-menu").toggleClass("active");
        $(".burger-close-modal").toggleClass("close active");  
      }
    });
  })(jQuery);
}

