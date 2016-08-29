$(document).ready(function () {
    var pageLength = $('.page').length,
        contentWidth = 100 * pageLength,
        slideWidth = 100 / pageLength;
    $('.content').width(contentWidth + '%'); 
    $('.page').width(slideWidth + '%');
    
    $('a.slideItem').click(function(){
        $('a.slideItem').removeClass('selected');
        $(this).addClass('selected');
        
        var slideNumber = $($(this).attr('href')).index('.page'),
            margin = slideNumber * -100 + '%';
    
        $('.content').animate({marginLeft: margin}, 200);
        return false;
    });

});