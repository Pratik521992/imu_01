$(window).scroll(function(){
    parallax();
})

function parallax(){
    var wscr = $(window).scrollTop();
    
    $('.section2text').css({

        'transform' :  'translate( 0px, '+  wscr/90+ 'rem)'
        
    });

    $('.sea').css({

        'transform' :  'translate( 0px, '+  wscr/20+ 'rem)'
        
    });
    $('.sea2').css({

        'transform' :  'translate( 0px, '+  wscr/20+ '%)'
        
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

if(wscr > $('.game').offset().top /*-( $(window).height() /1.5 )*/){
        

    $('.mariooff').addClass('mario');
    if(wscr > $('.mario').offset().top /*-( $(window).height() /1.5 )*/){
        
        
    
        $('.nfsoff').addClass('nfs');
        /*if(wscr > ($('.section-game').offset().top -( $(window).height()*1.2 ))){
            console.log('hi')
            $('.section-game').addClass('section-game-off'); 
        }*/
    }
}

if(wscr > $('.zara').offset().top /*-( $(window).height() /1.5 )*/){

    
    $('.zara').css({

        'transform' :  'translate(-' +  Math.abs( wscr/300)+  'rem, 0rem)'
        
    });


    }   

}