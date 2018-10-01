$(window).scroll(function(){
    parallax();
})

function parallax(){
    var wscr = $(window).scrollTop();
    
    $('.section').css('top', (wscr*0.5)+ 'px')

}