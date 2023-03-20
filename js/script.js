$(function(){
    $('.count-one').counterUp({
        delay: 10,
        time: 1000,
    })
    $('.count-two').counterUp({
        delay: 10,
        time: 1000,
    })
    $('.count-three').counterUp({
        delay: 10,
        time: 1000,
    })
    $('.eng-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        arrows: true,
        prevArrow: '.sld-btn-two',
        nextArrow: '.sld-btn-one',
      });
    $('.banner-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        pauseOnHover: false,
        arrows: false,
        dots: false
      });
})

$('.scroll-top').on("click", function(){
    $("html,body").animate({scrollTop: 0}, 1000)
})

$(window).on("scroll", function(){
    var scroll = $(this).scrollTop();
    if(scroll > 500){
        $('.scroll-top').fadeIn(500)
    }else{
        $('.scroll-top').fadeOut(500)
    }
})
