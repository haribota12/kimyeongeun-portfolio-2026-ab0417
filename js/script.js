$(function(){


    $("nav>ul>li:last-child").click(function(){
        $(".contactbox").slideDown(200);
    })

    $(".button>button").click(function(){
        $(".contactbox").slideUp(200);
    })


    $(".scrollnav").click(function(event){
        event.preventDefault();

        var target = $(this).attr("href");
        var targetPosition = $(target).offset().top;

        $("html, body").animate({scrollTop: targetPosition}, 500);


    })





    $(".tabmenu>li>h1>a").click(function(e){
        e.preventDefault();

        var $li = $(this).closest('li');

        $(".tabmenu>li").removeClass("on");
        $li.addClass("on");

        var i = $li.index();

        $(".tabcon").hide();
        $(".tabcon").eq(i).show();

    })





    $(".upbutton").click(function(){
        $("html, body").animate({scrollTop: 0}, 500);
        
        return false;
    })



    $(".header_hamberger").click(function(){
        $(this).hide();
        $(".header_hamberger_close").show();
        $(".header_mobile_menu").slideDown();
    })

    $(".header_hamberger_close").click(function(){
        $(this).hide();
        $(".header_hamberger").show();
        $(".header_mobile_menu").slideUp();
    })

    $(".header_mobile_menu>ul>li:last-child").click(function(){
        $(".header_hamberger_close").hide();
        $(".header_hamberger").show();
        $(".header_mobile_menu").hide();
        $(".contactbox").show();
        
        return false;
    })






    var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      spaceBetween: 200,
      coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
    });






    let observer = new IntersectionObserver((e)=>{
        e.forEach((box)=>{
            if (box.isIntersecting){
                box.target.style.opacity = 1;
            }
            else {
                box.target.style.opacity = 0;
            }
        })
    })
    
    let Fade = document.querySelectorAll('.fade')
    observer.observe(Fade[0])
    observer.observe(Fade[1])
    observer.observe(Fade[2])
    observer.observe(Fade[3])
    observer.observe(Fade[4])
    observer.observe(Fade[5])

})