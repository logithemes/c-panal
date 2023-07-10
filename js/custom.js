$(document).ready(function() {
    "use strict";

    //PRE LOADING
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({
        'overflow': 'visible'
    });

    $(".tab-head ul li span").click(function() {
        $(".tab-head ul li span").removeClass("tact");
        $(this).addClass("tact");
    });
    $(".tic1").click(function() {
        $(".tab-body ul li").hide();
        $(".tshow-1").show();
    });
    $(".tic2").click(function() {
        $(".tab-body ul li").hide();
        $(".tshow-2").show();
    });
    $(".tic3").click(function() {
        $(".tab-body ul li").hide();
        $(".tshow-3").show();
    });
    $(".tic4").click(function() {
        $(".tab-body ul li").hide();
        $(".tshow-4").show();
    });
    $(".tic5").click(function() {
        $(".tab-body ul li").hide();
        $(".tshow-5").show();
    });

    //USER OPEN AND CLOSE
    $(".user-com span").click(function() {
        $(".user-tool").removeClass("usershow");
        $(this).siblings("div").addClass("usershow");
    });

    //USER CLOSE BUTTON
    $(".close").click(function() {
        $(".user-tool").removeClass("usershow");
    });

    //GOOGLE MAP - SCROLL REMOVE
    $('.land-3-agen-right')
        .on('click', function() {
            $(this).find('iframe').addClass('clicked')
        })
        .on('mouseleave', function() {
            $(this).find('iframe').removeClass('clicked')
        });


    $(window).scroll(function() {
        if ($(document).scrollTop() > 100) {
            $('.header').addClass('header1');
        } else {
            $('.header').removeClass('header1');
        }
    });
    $(window).scroll(function() {
        if ($(document).scrollTop() > 400) {
            $('.header').addClass('header2');
        } else {
            $('.header').removeClass('header2');
        }
    });

    $(document).on('click', 'a[href^="#"]', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable li").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $('.pri-chan input[type="checkbox"]').click(function() {
        if ($(this).prop("checked") == true) {
            $(".v1").text("99");
            $(".v2").text("499");
            $(".v3").text("799");
            //alert("Checkbox is checked.");
        } else if ($(this).prop("checked") == false) {
            $(".v1").text("9");
            $(".v2").text("40");
            $(".v3").text("70");
            //alert("Checkbox is unchecked.");
        }
    });

    $(".land-3-top-contact ul li a").click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset(150).top
        }, 1800);
    });

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var sec = $(".ball").offset().top - 0;
        if (scroll >= sec) {
            $(".b22").addClass('b2');
            $(".b33").addClass('b3');
            $(".b44").addClass('b4');
            $(".b55").addClass('b5');
            $(".b66").addClass('b6');
            $(".b77").addClass('b7');
            $(".b88").addClass('b8');
            $(".b99").addClass('b9');
            $(".b100").addClass('b10');
        }
    });

});