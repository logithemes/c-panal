$(document).ready(function () {
    "use strict";
    //RESPONSIVE MENU BUTTON
    $(".menu-book i").on("click", function () {
        $(".menu").toggleClass("menuact");
    });

    //HOME HEAD  ANIMATION
    $(".home-banner .ban-content h1").addClass("ban2-ani");

    //HOME INDEX 2 ANIMATION SEARCH BOX
    $(".search-bookin ul li:nth-child(1)").addClass("se-ani1");
    $(".search-bookin ul li:nth-child(2)").addClass("se-ani2");
    $(".search-bookin ul li:nth-child(3)").addClass("se-ani3");
    $(".search-bookin ul li:nth-child(4)").addClass("se-ani4");

    //ON WINDOW SCROOL FUNCTION
    $(window).on("scroll", function () {

        //COMMON VARIABLE FOR WINDOW SCROLL
        var _topval = $(window).scrollTop();

        //MENU FIXED ACTIVE

        if (_topval >= 150) {
            $(".menu-head").addClass("fix-menu");
        } else {
            $(".menu-head").removeClass("fix-menu");
        }

        //GO TO TOP BUTTON
        if (_topval >= 400) {
            $(".go-to-top").addClass("act");
        } else {
            $(".go-to-top").removeClass("act");
        }

        $('#scrolltop').click(function () {
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });



        //ALL SECTION COMM-ANIMATION
        if ($(".ani-eql").length > 0) {
            $(".ani-eql").each(function () {
                var _seccom = $(this).offset().top + $(this).outerHeight() - 350;
                var _window = $(window).scrollTop() + $(window).height();
                if (_window >= _seccom) {
                    $(this).addClass("ani-strt");
                }

            })

            //ABOUT US  NUMBER COUNTER
            $('.count').each(function () {
                $(this).prop('Counter', 1090).animate({
                    Counter: $(this).text()
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });


            //ALL SECTION TITLE COMM-ANIMATION
            $(".comm-tit-ani").each(function () {
                var _tit1 = $(this).offset().top + $(this).outerHeight() - 50;
                var _titcom = $(window).scrollTop() + $(window).height();
                if (_titcom >= _tit1) {
                    $(this).addClass("ani-tit");
                }
            })
        }
    });



    //SIDE BAR
    $(".click-sid-bar i").on("click", function () {
        $(".side-bar").addClass("act");
    })

    //SIDE BAR REMOVE
    $(".side-bar-im i").on("click", function () {
        $(".side-bar").removeClass("act");
    })

    // TOP SEARCH BOX ADD
    $(".cl-func span").on("click", function () {
        $(".top-cl-fun").addClass("act");
    })

    // TOP SEARCH BOX REMOVE
    $(".top-cl-fun span").on("click", function () {
        $(".top-cl-fun").removeClass("act");
    })

    //TOP SEARCH BAR
    $(".top-click-1 h3").on("click", function () {
        $(".all-cate").addClass("act");
    })

    //TOP SEARCH BAR REMOVE
    $(".top-click-1").mouseleave(function () {
        $(".all-cate.act").removeClass("act");
    })


    //ADD SUB MENU & REMOVE
    $(".add-menu .arrow1").on("click", function () {
        $(".sub-menu.typ-menu").toggleClass("menuact");
    })


    // Gallery image hover
    $(".img-wrapper").hover(
        function () {
            $(this).find(".img-overlay").animate({
                opacity: 1
            }, 600);
        },
        function () {
            $(this).find(".img-overlay").animate({
                opacity: 0
            }, 600);
        }
    );

    // Lightbox
    var $overlay = $('<div id="overlay"></div>');
    var $image = $("<img>");
    var $prevButton = $('<div id="prevButton"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></div>');
    var $nextButton = $('<div id="nextButton"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></div>');
    var $exitButton = $('<div id="exitButton"> <i class="fa fa-times" aria-hidden="true"></i></div>');

    // Add overlay
    $overlay.append($image).prepend($prevButton).append($nextButton).append($exitButton);
    $("#gallery").append($overlay);

    // Hide overlay on default
    $overlay.hide();

    // When an image is clicked
    $(".img-overlay").click(function (event) {
        event.preventDefault();
        var imageLocation = $(this).prev().attr("href");
        $image.attr("src", imageLocation);
        $overlay.fadeIn("slow");
    });

    // When the overlay is clicked
    $overlay.click(function () {
        $(this).fadeOut("slow");
    });

    // When next button is clicked
    $nextButton.click(function (event) {
        $("#overlay img").hide();
        var $currentImgSrc = $("#overlay img").attr("src");
        var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
        var $nextImg = $($currentImg.closest(".plac-gal-imag").next().find("img"));
        var $images = $("#image-gallery img");
        if ($nextImg.length > 0) {
            $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
        } else {
            $("#overlay img").attr("src", $($images[0]).attr("src")).fadeIn(800);
        }
        event.stopPropagation();
    });

    // When previous button is clicked
    $prevButton.click(function (event) {
        $("#overlay img").hide();
        var $currentImgSrc = $("#overlay img").attr("src");
        var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
        var $nextImg = $($currentImg.closest(".plac-gal-imag").prev().find("img"));
        $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
        event.stopPropagation();
    });

    $exitButton.click(function () {
        $("#overlay").fadeOut("slow");
    });


});