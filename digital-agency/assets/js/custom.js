$(document).ready(function () {
    "use strict";
    //RESPONSIVE MENU BUTTON
    $(".menu-bar i").on("click", function () {
        $(".menu").addClass("menuact");
    });
    //RESPONSIVE MENU BUTTON REMOVE
    $(".menu span").on("click", function(){
        $(".menu").removeClass("menuact");
    })

  
    //BANNER ANIMATION
    $(".banner .ban-lhs").addClass("ani1");
    $(".bann-img").addClass("ani2");


    //TOP SEARCH
    $(".search-top").on("click", function(){
        $(".top-cl-fun").addClass("act");
    })


    //TOP SEARCH BOX REMOVE
    $(".top-cl-fun span").on("click", function(){
        $(".top-cl-fun").removeClass("act");
    })

    //SIDE BAR ACT
    $(".sidebat-act").on("click", function(){
        $(".side-bar").addClass("act");
    })


      //SIDE BAR REMOVE
      $(".side-bar-im i").on("click", function(){
        $(".side-bar").removeClass("act");
    })



       //GOOGLE MAP - SCROLL REMOVE
       $(".contact-map")
       .on('click', function () {
           $(this).find("iframe").addClass("clicked")
       })
       .on('mouseleave', function () {
           $(this).find("iframe").removeClass("clicked")
       });


   //TAB IMG CJANGE AND FAQ
$(".faq h3").click(function(){
    $(".faq p").slideUp(500);
    $(this).siblings().closest(".faq p").slideDown(500);
    $(this).siblings().closest(".faq p").css("color", "rgb(222 93 11)");
    $(".faq h3").removeClass("active");
    $(this).addClass("active");
    var _change = $(this).attr("id");
    $(".tab-img li").hide();
    $("#" + _change + "_view").show();
})



//WORK SHOWCASE
$(".showcase span").on("click", function(){
    $(".showcase span").removeClass("act2");
    $(this).addClass("act2");
    var _shcase = $(this).attr("id");
    $(".tab-showcase-main").hide();
    $("#" + _shcase + "_show").show();
})



//ON WINDOW SCROOL FUNCTION

$(window).on("scroll", function(){
    var _topval = $(window).scrollTop();

    if(_topval >= 150){
        $(".nav").addClass("act");
    }
    else{
        $(".nav").removeClass("act");
    }

});
  



});