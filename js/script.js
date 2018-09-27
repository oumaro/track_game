$(document).ready(function(){
    function randomColor(){
        return '#' + Math.random().toString(16).slice(2, 8);
    }

    $(".box").on('mouseenter', function(){
        $(this).css("background", randomColor());
        $(this).css('box-shadow', '0px 0px 10px white');
        $(this).css("z-index", 10000);
    });
    $(".box").on('mouseleave', function(){
        $(this).css('box-shadow', 'none');

    });

});