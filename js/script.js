$(window).on('load',function(){
 $('#status').delay(2000).fadeOut();
 $('#preloader').delay(2500).fadeOut();
});

$(document).ready(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots:false,
        navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>']
    });
}); 

$('#services-tabs').responsiveTabs({
    startCollapsed: 'accordion'
});