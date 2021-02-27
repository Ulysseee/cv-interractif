// MAGIC BEGINS HERE

'use strict';

$(document).ready(function () {
    var length = $('.all > *').length;
    var num;
    for (var i = 1; i <= length; i++) {
        if ($('#prod' + i).css('display') == ('flex')) {
            num = i;
        }
    }
    var endFade = true;
    $('.fa-angle-left').click(function () {
        if (endFade === true) {
            endFade = false;
            $('#prod' + num).fadeOut(500, function () {
                if (num - 1 === 0) {
                    num = length;
                } else {
                    num = num - 1;
                }
                $('#prod' + num).fadeIn(500, function () {
                    endFade = true;
                });
            });
        }
    });
    $('.fa-angle-right').click(function () {
        if (endFade === true) {
            endFade = false;
            $('#prod' + num).fadeOut(500, function () {
                if (num + 1 > length) {
                    num = 1;
                } else {
                    num = num + 1;
                }
                $('#prod' + num).fadeIn(500, function () {
                    endFade = true;
                });
            });
        }
    });

    $('.nav-link').on("click", function (event) {
        // Prevent browser default behavior
        event.preventDefault();

        // Get href value (target id <> anchor)
        var target = $(this).attr("href");

        // Get the top position of the target container
        var scrollValue = $(target).offset().top - 70;

        // Scroll to this position
        $('html, body').animate({
            scrollTop: scrollValue
        }, 500);
    });


    $('.skill-per').each(function () {
        var $this = $(this);
        var per = $this.attr('per');
        $this.css("width", per + '%');
        $({
            animatedValue: 0
        }).animate({
            animatedValue: per
        }, {
            duration: 1000,
            step: function () {
                $this.attr('per', Math.floor(this.animatedValue) + '%');
            },
            complete: function () {
                $this.attr('per', Math.floor(this.animatedValue) + '%');
            }
        });
    });

    const ratio = .14

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: ratio
    }

    const handleIntersect = function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.intersectionRatio > ratio) {
                entry.target.classList.add('reveal-visible')
                observer.unobserve(entry.target)
            }
        })
    }

    const observer = new IntersectionObserver(handleIntersect, options)
    document.querySelectorAll('[class*="reveal-"], [class*="reveal2-"]').forEach(function (r) {
        observer.observe(r)
    })


    // $(window).on("scroll", function() {
    //     var navbar = $('.navbar');
    
    //     $(".navbar").each(function() {
    
    //       var positionTop = navbar.offset().top;
    //       var positionBottom = $('.prs').offset().top;
            
    //       console.log("top: " + positionTop + " / bottom: " + positionBottom);
    
    //       if (positionTop > positionBottom) {
    //         navbar.addClass("fullSize");
    //       } else {
    //         navbar.removeClass("fullSize");
    //       }
    //     });
    //   });

    splitScroll();
});


function splitScroll() {
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
            duration: '200%',
            triggerElement: '.about-title', 
            triggerHook: 0,
        })
        .setPin('.about-title')
        // .addIndicators()
        .addTo(controller);
}


$('.rec').click(function monId() {
    var id = $(this).attr('id');
    $('#modal_content'+id).css('opacity', '1');
    $('#modal_content'+id).css('pointer-events', 'auto');
    return id;
}); 

$('.close').click(function() {
    $(this).parent().parent().css({'opacity' : '0' , 'pointer-events': 'none'});
})