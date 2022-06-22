$(document).ready(function(){
    $('.menu').slicknav({
        "prependTo": '.menu',
		"closeOnClick": '.menu',
    });
    $("html").smoothScroll(1000);
    $('.menu_img').owlCarousel({
        items: 4,
        autoplay: true,
        aytoplayTimeout: 2000,
        loop: true,
        autoplayHoverPause: false,
        smartSpeed: 500,
        nav:false,
        navText:['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:4,
            }
        }
    });
    $('.story_cont').owlCarousel({
        autoplay: true,
        aytoplayTimeout: 2000,
        loop: true,
        autoplayHoverPause: false,
        smartSpeed: 500,
        nav:false,
        navText:['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }
    });
});
$(document).ready(function(){
    $('body').materialScrollTop();
    $("html").smoothScroll(1000);
});