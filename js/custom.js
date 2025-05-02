$(function () {
    const main_visual_slide = new Swiper('.main_visual_slide', {
        loop: true,
        parallax: true,
        speed: 1000,
        autoplay: true,
    });

    const main_customer_slide = new Swiper('.main_customer_slide', {
        loop: true,
        slidesPerView: 2.5,
        spaceBetween: 30,
    });

    $('.main_customer .prev').on('click', function () {
        main_customer_slide.slidePrev();
    });

    $('.main_customer .next').on('click', function () {
        main_customer_slide.slideNext();
    });

    let sw = true;
    $('.main_customer .play').on('click', function () {
        if (sw) {
            main_customer_slide.autoplay.start();
            $(this).addClass('on');
        } else {
            main_customer_slide.autoplay.pause();
            $(this).removeClass('on');
        }

        sw = !sw;
    });


    $(function () {
        $(window).on('scroll', function () {
            let sct = $(window).scrollTop();

            if (sct > 0) {
                $('#header').addClass('on');
            } else {
                $('#header').removeClass('on');
            }
        });
    });

    $(function () {
        $('.to_top').on('click', function () {
            $('html,body').animate({
                scrollTop: 0
            })
        });
        $(window).on('scroll', function () {
            let sct = $(window).scrollTop(); console.log(sct)

            if (sct > 400) {
                $('.to_top').addClass('on')
            } else {
                $('.to_top').removeClass('on')
            }
        });
    });

    $(function () {
        $('.main_news .tab_menu button').on('click', function () {
            let idx = $(this).index();
            console.log(idx);
            $('.main_news .tab_menu button').removeClass('on');
            $(this).addClass('on');
            $('.main_news .tab_content .con').removeClass('on');
            $('.main_news .tab_content .con').eq(idx).addClass('on');
        })
    })




    $(function () {
        const MMS = new Swiper('.main_news_slide', {
            loop: true,
            slidesPerView: 4,
            spaceBetween: 30,
            autoplay: true,
            speed: 2000,
            pagination: {
                el: '.main_news .page',
                clickable: true,
            },
            navigation: {
                nextEl: '.main_news .next',
                prevEl: '.main_news .prev',
            },
        });
    })

    $(function () {
        const lenis = new Lenis({
            autoRaf: true,
        });
    });


    $(function () {
        AOS.init();

    });
})
