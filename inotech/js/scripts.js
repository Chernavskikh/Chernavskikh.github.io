$(function() {
    var fullPageCreated = false;
        createFullpage();

    function createFullpage() {
        if (fullPageCreated === false) {
            fullPageCreated = true;

            $('#fullpage').fullpage({
                verticalCentered: true,
                anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6'],
                menu: '#menu',
                navigation: false
            });
        }
    }

    if (document.documentElement.clientWidth < 1024) {
        $.fn.fullpage.destroy('all');
    }

    $(window).resize(function() {
        if ($(window).width() > 1024) {
            createFullpage();

        } 
        else {
            if(fullPageCreated == true) {
                fullPageCreated = false;
                $.fn.fullpage.destroy('all');
            }
        }
    });

});

//hamburger menu toggle functions
    $('.btn-toggle-menu').click(function() {
        $(this).addClass('toggled');
        $('.menu').addClass('open');
        $('html, body').addClass('menu-open');
        $.fn.fullpage.setAllowScrolling(false);
    });

    $('.menu-nav__item, .btn-close-menu').click(function() {
        $('.menu').removeClass('open');
        $('.btn-toggle-menu').removeClass('toggled');
        $('html, body').removeClass('menu-open');
        $.fn.fullpage.setAllowScrolling(true);
    });


    $(window).on('load resize', function () {
        if ($(window).width() <= 767) {
            $('a[href*=\\#]').on('click', function(event){     
                event.preventDefault();
                $('html,body').animate({scrollTop:$(this.hash).offset().top - 50}, 500); 
            });
        }
        else if ($(window).width() <= 1023) { 
            $('a[href*=\\#]').on('click', function(event){     
                event.preventDefault();
                $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500); 
            });
        }
    });


    //agreements toggle functions
    $('.toggle-agreements, .btn-close-agreements').click(function(e) {
        event.preventDefault();
        $('.agreement-page').addClass('open');
        $('body, html').addClass('menu-open');
        $.fn.fullpage.setAllowScrolling(false);
    });

    $('.btn-close-agreements').click(function(e) {
        event.preventDefault();
        $('.agreement-page').removeClass('open');
        $('body, html').removeClass('menu-open');
        $.fn.fullpage.setAllowScrolling(true);
    });

    //calculate height of dashed line for animation
    $(window).on("load resize",function(e){

        setTimeout(function(){ 
             var mark = $('.line').closest('.section').innerHeight();
            // console.log(mark);
            $('.line-draw').css('height', '+=' + mark);
         }, 500);
       
    });