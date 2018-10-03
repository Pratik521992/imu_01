$(window).scroll(function(){
    parallax();
})

function parallax(){
    var wscr = $(window).scrollTop();
    
    $('.section2text').css({

        'transform' :  'translate( 0px, '+  wscr/90+ 'rem)'
        
    });

  
    
   
    /*
    $('.section2knife').css({

        'transform' :  'rotate(' +  - wscr/10 + 'deg)',
        
        
    });*/
    if(wscr > $('.pig3').offset().top /*-( $(window).height() /1.5 )*/){
        
        $('.pig3text').addClass('is-showing');
    }
    if(wscr > $('.section-game').offset().top /*-( $(window).height() /1.5 )*/){
        $('.game').addClass('.go');
}


}