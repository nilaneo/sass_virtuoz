// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

$(function(){
    $("select").selectify();

    $( "#datepicker" ).datepicker();

    $('.jcarousel').jcarousel();

    $('.jcarousel-control-prev').jcarouselControl({target: "-=1"});

    $('.jcarousel-control-next').jcarouselControl({target: "+=1"});

    $('.jcarousel-control-prev-small').jcarouselControl({target: "-=1"});

    $('.jcarousel-control-next-small').jcarouselControl({target: "+=1"});

    $('.jcarousel-control-small').on('jcarouselcontrol:inactive', function() {
        $(this).addClass("inactive");
    });

    $('.jcarousel-control-small').on('jcarouselcontrol:active', function() {
        $(this).removeClass("inactive");
    });

});
