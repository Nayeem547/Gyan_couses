
/* Sticky Nav Js Start */
$(window).on('scroll', function () {
    var scrollSize = $(this).scrollTop()
    if (scrollSize > 150) {
      $('#main_nav').addClass('nav_scroll_animate')
    } else {
      $('#main_nav').removeClass('nav_scroll_animate')
    }
  })
  /* Sticky Nav Js End */

  /*banner slider start*/
$(".banner_slider").slick({
    arrows: true,
    speed: 1500,
    prevArrow: '<i class="fa-solid fa-chevron-left banner_slider_icon_left"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right banner_slider_icon_right"></i>',
    fade:true,
  });
/*banner slider end*/


/* Course SliderStart */
$(".course_slider_container").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    prevArrow: '<i class="fas fa-chevron-left course_slide_btn_left"></i>',
    nextArrow: '<i class="fas fa-chevron-right course_slide_btn_right"></i>',
  });
  /* Course Slider End */


  /* Footer Slider Activation Start */
$('.footer_slider_container').slick({
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  
  })
  /* Footer Slider Activation End */