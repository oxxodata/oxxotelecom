$(document).ready(function () {

    //Preloader
    $(window).on('load', function () { // makes sure the whole site is loaded 
        $('#status').fadeOut(); // will first fade out the loading animation 
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
        $('body').delay(350).css({ 'overflow': 'visible' });
    })

    //Mobile menu toggle
    if ($('.navbar-burger').length) {
        $('.navbar-burger').on("click", function () {

            var menu_id = $(this).attr('data-target');
            $(this).toggleClass('is-active');
            $("#" + menu_id).toggleClass('is-active');
            $('.navbar.is-light').toggleClass('is-dark-mobile')
        });
    }

    //Animate left hamburger icon and open sidebar
    $('.menu-icon-trigger').click(function (e) {
        e.preventDefault();
        $('.menu-icon-wrapper').toggleClass('open');
        $('.sidebar').toggleClass('is-active');
    });

    //Close sidebar
    $('.sidebar-close').click(function () {
        $('.sidebar').removeClass('is-active');
        $('.menu-icon-wrapper').removeClass('open');
    })

    //Sidebar menu
    if ($('.sidebar').length) {
        $(".sidebar-menu > li.have-children > a").on("click", function (i) {
            i.preventDefault();
            if (!$(this).parent().hasClass("active")) {
                $(".sidebar-menu li ul").slideUp();
                $(this).next().slideToggle();
                $(".sidebar-menu li").removeClass("active");
                $(this).parent().addClass("active");
            }
            else {
                $(this).next().slideToggle();
                $(".sidebar-menu li").removeClass("active");
            }
        });
    }

    //Navbar Clone
    if ($('#navbar-clone').length) {
        $(window).scroll(function () {    // this will work when your window scrolled.
            var height = $(window).scrollTop();  //getting the scrolling height of window
            if (height > 50) {
                $("#navbar-clone").addClass('is-active');
            } else {
                $("#navbar-clone").removeClass('is-active');
            }
        });
    }

    //Init feather icons
    feather.replace();

    //reveal elements on scroll so animations trigger the right way
    var $window = $(window),
        win_height_padded = $window.height() * 1.1,
        isTouch = Modernizr.touch;

    $window.on('scroll', revealOnScroll);

    function revealOnScroll() {
        var scrolled = $window.scrollTop();
        $(".revealOnScroll:not(.animated)").each(function () {
            var $this = $(this),
                offsetTop = $this.offset().top;

            if (scrolled + win_height_padded > offsetTop) {
                if ($this.data('timeout')) {
                    window.setTimeout(function () {
                        $this.addClass('animated ' + $this.data('animation'));
                    }, parseInt($this.data('timeout'), 10));
                } else {
                    $this.addClass('animated ' + $this.data('animation'));
                }
            }
        });
    }

    // Back to Top button behaviour
    var pxShow = 600;
    var scrollSpeed = 500;
    $(window).scroll(function () {
        if ($(window).scrollTop() >= pxShow) {
            $("#backtotop").addClass('visible');
        } else {
            $("#backtotop").removeClass('visible');
        }
    });
    $('#backtotop a').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, scrollSpeed);
        return false;
    });

    $("#install-modal").click(function () {

        $("#install").addClass("is-active");

    });

    $("#security-modal").click(function () {

        $("#sucurity").addClass("is-active");

    });

    $("#price-modal").click(function () {

        $("#price").addClass("is-active");

    });

    $("#application-modal").click(function () {

        $("#application").addClass("is-active");

    });

    $("#visio-modal").click(function () {

        $("#visio").addClass("is-active");

    });

    $("#call-modal").click(function () {

        $("#call").addClass("is-active");

    });

    $(".close-modal").click(function () {

        $(".modal").removeClass("is-active");

    });

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 550, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
})

function f() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } }

f()

var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5ff346c0c31c9117cb6b5d9c/1er74oo5h';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();