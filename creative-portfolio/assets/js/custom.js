$(document).ready(function() {
    //TOP SEARCH
    $(".search-top").on("click", function() {
      $(".top-cl-fun").addClass("act");
    })
    //TOP SEARCH BOX REMOVE
    $(".top-cl-fun span").on("click", function() {
      $(".top-cl-fun").removeClass("act");
    })
    //SIDE BAR ACT
    $(".sidebat-act").on("click", function() {
      $(".side-bar").addClass("act");
    })
    //SIDE BAR REMOVE
    $(".side-bar-im i").on("click", function() {
      $(".side-bar").removeClass("act");
    })
    //RESPONSIVE MENU BUTTON
    $(".menu-bar i").on("click", function() {
      $(".menu").addClass("menuact");
    });
    //RESPONSIVE MENU BUTTON REMOVE
    $(".menu span").on("click", function() {
      $(".menu").removeClass("menuact");
    })
    //scrool top
    $(window).on("scroll", function() {
      var _top = $(window).scrollTop();
      if (_top >= 100) {
        $(".nav").addClass("act")
      } else {
        $(".nav").removeClass("act");
      }
    })
    //banner addclass
    $(".banner-content").addClass("a1");
    $(".banner-img").addClass("a2");

    //BANNER MOUSE MOVE IMG
    $(".banner-img").mousemove(function(event){
    var _lf = "-"  + event.pageX / 30 + "px";
    var _tp = "-" + event.pageY / 20 + "px";
        $(".banner-img img").css({"left": _lf, "top": _tp})
    });

         //BANNER MOUSE MOVE IMG REMOVE
    $(".banner-img").mouseleave(function(){
        $(".banner-img img").css({"left": 0, "top" : 0})
    })

    //PRICING PLAN
    $(".pricing-plan-iner").mousemove(function(){
        $(".pricing-plan-iner").removeClass("act");
        $(this).addClass("act");
    })

  });