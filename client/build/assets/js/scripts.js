$(document).ready(function() {

    'use strict';

    $('#header img.active').hide();

    var navImg = $('#header .nav-item');
    $(navImg).hover(function() {
        $(this).find('img.inactive').hide();
        $(this).find('img.active').show();
    }, function() {
        $(this).find('img.inactive').show();
        $(this).find('img.active').hide();
    });

    // Display search bar
    $('.site-search').click(function() {
        $('#search-box').slideToggle();
        $('#siteSearch').focus();
    });

});
