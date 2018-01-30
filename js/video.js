/* ==================Video BG=================== */
fullscreen();
$(window).resize(fullscreen);
$(window).scroll(headerParallax);

function fullscreen() {
    var bgvideo = $('.bgvideo');
    var windowH = $(window).height();
    var windowW = $(window).width();

    bgvideo.width(windowW);
    bgvideo.height(windowH);
}

function headerParallax() {
    var st = $(window).scrollTop();
    var headerScroll = $('.bgvideo h1');

    if (st < 500) {
        headerScroll.css('opacity', 0.4 - st / 1000);
        $('.bgvideo-arrow ').css('opacity', 0.4 - st / 250);
        headerScroll.css({
            '-webkit-transform': 'translateY(' + st / 7 + '%)',
            '-ms-transform': 'translateY(' + st / 7 + '%)',
            transform: 'translateY(' + st / 7 + '%)'
        });
    }
}