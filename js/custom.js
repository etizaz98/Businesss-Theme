/* ==================Carousel slider=================== */
$(document).ready(function () {
    $('.carousel,.carousel-2,.carousel-3').carousel({
        pause: true,
        interval: false
    });
});
/* ==================Smooth Scroll=================== */
$(document).ready(function () {
    $('.navbar-nav li a[href^="#"],#footer-section a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var target = this.hash,
                $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});
/* ==================Portfolio=================== */
$(".btn-add").click(function () {
    var light = $(this).parent().find(".effect");

    if (light.hasClass("newclass")) {
        light.removeClass("newclass").addClass("off");
    } else {
        light.removeClass("off").addClass("newclass");
    }
});
$(".btn-add").click(function () {
    var light = $(this).parent().find(".fa-plus");

    if (light.hasClass("fa-minus")) {
        light.removeClass("fa-minus").addClass("off");
    } else {
        light.removeClass("off").addClass("fa-minus");
    }
});
/* ==================Animate=================== */


$(window).scroll(function () {
    $('#team-section .col-md-6').each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 400) {
            $(this).addClass("hatch");
        }
    });
    $('#portfolio-section .col-lg-3').each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 400) {
            $(this).addClass("slideUp");
        }
    });
    $('#about-section .about-detail,.section-2').each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 400) {
            $(this).addClass("stretchRight");
        }
    });
    $('.section-1').each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 400) {
            $(this).addClass("stretchLeft");
        }
    });
    $('#contact-section .col-md-6').each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 400) {
            $(this).addClass("fadeIn");
        }
    });
    $('#quote-section .col-md-8').each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 400) {
            $(this).addClass("slideDown");
        }
    });
});


/* ==================Nice Scroller=================== */
    $(function() {
        $("html").niceScroll({horizrailenabled:false});
    });


/* ==================Hover Dropdown=================== */
$(document).ready(function () {
    $('.js-activated').dropdownHover().dropdown();
});
/* ==================Color Switcher=================== */
$(function () {
    Options.init();
});

/* 
 Options
 */
Options = {
    init: function () {
        $('.options .more').click(function () {
            var more = $(this);
            var options = more.parent();

            if (more.hasClass('closed')) {
                more.find('.fa').removeClass('fa-cog');
                more.find('.fa').addClass('fa-times');
                options.animate(
                        {left: "+=250"}, 300, function () {
                    more.removeClass('closed');
                });
            } else {
                more.find('.fa').removeClass('fa-times');
                more.find('.fa').addClass('fa-cog');
                options.animate(
                        {left: "-=250"}, 300, function () {
                    more.addClass('closed');
                });
            }
        });
        // Switch colors
        $('.options .colors a').click(function (e) {
            e.preventDefault();
            var color = $(this).attr('class');
            mainColor = color;
            if ($('link[title="colors"]').length) {
                $('link[title="colors"]').remove();
            }
            $('head').append('<link rel="stylesheet" title="colors" type="text/css" href="css/' + color + '.css">');
        });
    }
};




/* ==================Google Map=================== */
var map;
function initialize() {
    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(37.78313383212, -122.4039494991302)
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
    var bounds = {
        17: [[20969, 20970], [50657, 50658]],
        18: [[41939, 41940], [101315, 101317]],
        19: [[83878, 83881], [202631, 202634]],
        20: [[167757, 167763], [405263, 405269]]
    };
    var imageMapType = new google.maps.ImageMapType({
        getTileUrl: function (coord, zoom) {
            if (zoom < 17 || zoom > 20 ||
                    bounds[zoom][0][0] > coord.x || coord.x > bounds[zoom][0][1] ||
                    bounds[zoom][1][0] > coord.y || coord.y > bounds[zoom][1][1]) {
                return null;
            }
            return ['http://www.gstatic.com/io2010maps/tiles/5/L2_',
                zoom, '_', coord.x, '_', coord.y, '.png'].join('');
        },
        tileSize: new google.maps.Size(256, 256)
    });
    map.overlayMapTypes.push(imageMapType);
}
google.maps.event.addDomListener(window, 'load', initialize);
