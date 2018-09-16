$(document).ready(function () {

    $('.content .container').find('.prev').click(function () {
        const current = $(this).siblings('.pic').find('.active');
        if (!$('*').is(':animated')) {
            if (current.prev().length > 0) {
                current.prev().css({
                    'position': 'absolute',
                    'right': '290px'
                }).addClass('active').stop(false).animate({right: '0px'}, 300).removeAttr('style');
            } else {
                current.siblings('.item:last').css({
                    'position': 'absolute',
                    'right': '290px'
                }).addClass('active').stop(false).animate({right: '0px'}, 300).removeAttr('style');
            }

            current.css({'position': 'absolute'}).stop(true).animate({right: '-290px'}, 300, function () {
                current.removeClass('active').removeAttr('style');
            })
        }
    });

    $('.content .container').find('.next').click(function () {
        const current = $(this).siblings('.pic').find('.active');
        if (!$('*').is(':animated')) {
            if (current.next().length > 0) {
                current.next().css({
                    'position': 'absolute',
                    'left': '290px'
                }).addClass('active').stop(true).animate({left: '0px'}, 300).removeAttr('style');
            } else {
                current.siblings('.item:first').css({
                    'position': 'absolute',
                    'left': '290px'
                }).addClass('active').stop(false).animate({left: '0px'}, 300).removeAttr('style');
            }

            current.css({'position': 'absolute'}).stop(true).animate({left: '-290px'}, 300, function () {
                current.removeClass('active').removeAttr('style');
            })
        }
    })
});
