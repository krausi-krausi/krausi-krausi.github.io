//გაიხსნას subscribe ფანჯარა
$(document).ready(function(){
    $(".image-button").click(function(){
        $(".open-window").fadeToggle(500);
    });
});

$(document).ready(function(){
    $(".open-window h4").click(function(){
        $(".open-window").fadeOut(500);
    });
});

//ჩამოშალოს კომენტარები
$(document).ready(function(){
    $(".three .replies").click (function(){
        $("#hidden3").slideToggle()
        $('html, body').animate({scrollTop: "+=340"}, 500);
        
    });
});


$(document).ready(function(){
    $(".two .replies").click (function(){
        $("#hidden2").slideToggle()
        $('html, body').animate({scrollTop: "+=280"}, 500);
        
    });
});


$(document).ready(function(){
    $(".one .replies").click(function(){
        $("#hidden1").slideToggle()
        $('html, body').animate({scrollTop: "+=200"}, 500);
    });
});


$(document).ready(function(){
    $(".subscribe button").click(function(){
            $(".open-window").fadeToggle(500);
        });
    });


   
     var btn = $('#button');

     btn.on('click', function() { 
        $('html, body').animate({scrollTop:0}, 1000);
      });

    
$(document).ready(function(){
    $(".like").click(function(){
        $(this).html("<b>Liked !<b>").css({"color": "green"});
    });
});