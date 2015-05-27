'use strict';

$(document).ready(function () {
    if($('#' + currentPage).parent().hasClass('gw-submenu')){
        $('#' + currentPage).parent().find('li').find('ul:visible').slideUp();
        $('#' + currentPage).parent().parent().removeClass('init-arrow-down');
        $('#' + currentPage).parent().parent().removeClass('arrow-down');
        $('#' + currentPage).parent().parent().addClass('arrow-up');
        $('#' + currentPage).parent().css('display','block');
        $('#' + currentPage).parent().parent().find('ul').slideDown(300);
    }
    $('.gw-nav > li > a').click(function () {
        var gw_nav = $('.gw-nav');
        gw_nav.find('li').removeClass('active');
        $('.gw-nav > li > ul > li').removeClass('active');
        var checkElement = $(this).parent();
        var ulDom = checkElement.find('.gw-submenu')[0];

        if (ulDom == undefined) {
            checkElement.addClass('active');
            $('.gw-nav').find('li').find('ul:visible').slideUp();
            return;
        }
        if (ulDom.style.display != 'block') {
            gw_nav.find('li').find('ul:visible').slideUp();
            gw_nav.find('li.init-arrow-up').removeClass('init-arrow-up').addClass('arrow-down');
            gw_nav.find('li.arrow-up').removeClass('arrow-up').addClass('arrow-down');
            checkElement.removeClass('init-arrow-down');
            checkElement.removeClass('arrow-down');
            checkElement.addClass('arrow-up');
            checkElement.addClass('active');
            checkElement.find('ul').slideDown(300);
        } else {
            checkElement.removeClass('init-arrow-up');
            checkElement.removeClass('arrow-up');
            checkElement.removeClass('active');
            checkElement.addClass('arrow-down');
            checkElement.find('ul').slideUp(300);

        }
    });
    $('.gw-nav > li > ul > li > a').click(function () {
        $(this).parent().parent().parent().removeClass('active');
        $('.gw-nav > li > ul > li').removeClass('active');
        $(this).parent().addClass('active')
    });
});
