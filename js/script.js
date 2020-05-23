/*global $ , document , window  */

$(document).ready(function(){
    
    $('.content').height($('.item').height() / 2 - 10);
    
    //$(window).height($('.images1').height());
    
    $('li a').click(function(){
        
        $(this).parent().addClass('active').siblings().removeClass('active');
        
    })
    $(window).scroll(function(){
        
        if($(this).scrollTop() > 500 ){
            $('.but').fadeIn(1000);
        }
        else{
            
            $('.but').fadeOut(500);
        }
    })
    
    $('.but').click(function(){
        
        $('html , body').animate({
            
            scrollTop : 0
        },1000)
    })
    
    $('.ss1').mouseenter(function(){
        
        $(this).css({
            
            "margin" : 10
        })
         
    })    
     $('.ss1').mouseleave(function(){
        
        $(this).css({
            
            "margin" : 0
        })
         
    }) 
    
     $('.thing').slick({
         
         dots: true,
         arrows:true,
         autoplay : true,
         autoplaySpeed : 3000,
         fade:true,
     })
   
    $(window).scroll(function(){
        
        if($(this).scrollTop() >= $('.stat').offset().top - 80){
            
            // count to
    
            $('.timer').countTo();
            
        }
    });
    // smooth scroll
    $('li a').click(function(){
        
        $('html,body').animate({
            
            scrollTop : $('.' + $(this).data('scroll')).offset().top + 1
        },1500)
        
    })

});
