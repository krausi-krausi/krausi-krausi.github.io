$( document ).ready(function() {
    var slide = setInterval(function(){
    if ($('#box1').css('display') == 'block') {
        var slide1 = setTimeout(function(){
            $('#box1').fadeOut(1500);
            $('#box2').fadeIn(1500);

            $('#page-1').fadeOut();
            $('#page-2').fadeIn();
        }, 3000);  
    }

    else if ($('#box2').css('display') == 'block') {
        var slide2 = setTimeout(function(){
            $('#box2').fadeOut(1500);
            $('#box3').fadeIn(1500);

            $('#page-2').fadeOut();
            $('#page-3').fadeIn();
        }, 3000);  
    }

    else if ($('#box3').css('display') == 'block') {
        var slide3 = setTimeout(function(){
            $('#box3').fadeOut(1500);
            $('#box4').fadeIn(1500);

            $('#page-3').fadeOut();
            $('#page-4').fadeIn();
        }, 3000);  
    }

    else if ($('#box4').css('display') == 'block') {
        var slide4 = setTimeout(function(){
            $('#box4').fadeOut(1500);
            $('#box1').fadeIn(1500);

            $('#page-4').fadeOut();
            $('#page-1').fadeIn();
        }, 3000);  
    }

    $('#page1').click(function(){
        $('#page-1').show();
        $('#page-2').hide();
        $('#page-3').hide();
        $('#page-4').hide();
        $('#box1').fadeIn(700);
        $('#box2').fadeOut(1000);
        $('#box3').fadeOut(1000);
        $('#box4').fadeOut(1000);
        clearTimeout(slide1);
        clearTimeout(slide2);
        clearInterval(slide);
 });

 $('#page2').click(function(){
    $('#page-1').hide();
    $('#page-2').show();
    $('#page-3').hide();
    $('#page-4').hide();
    $('#box2').fadeIn(700);
    $('#box3').fadeOut(1000);
    $('#box4').fadeOut(1000);
    clearTimeout(slide2);
    clearTimeout(slide3);
    clearInterval(slide);
});

$('#page3').click(function(){ 
    $('#page-1').hide();
    $('#page-2').hide();
    $('#page-3').show();
    $('#page-4').hide();
    $('#box3').fadeIn(700);
    $('#box4').fadeOut(1000);
    $('#box1').fadeOut(1000);
    clearTimeout(slide3);
    clearTimeout(slide4);
    clearInterval(slide);
});

$('#page4').click(function(){
    $('#page-1').hide();
    $('#page-2').hide();
    $('#page-3').hide();
    $('#page-4').show();
    $('#box4').fadeIn(700);
    $('#box1').fadeOut(1500);
    $('#box2').fadeOut(1500);
    clearTimeout(slide4);
    clearTimeout(slide1);
    clearInterval(slide);
});

   }, 10)
});
    
$(window).scroll(function(){
    if ($(document).scrollTop() > 600) {
        $('#scrollMenu').slideDown();
    }
    else {
        $('#scrollMenu').hide();
    }
});

$("#close").mouseover(function(){
    $( this ).css("color", "black");
  });

  $("#close").mouseout(function(){
    $( this ).css("color", "rgb(133, 133, 133)");
  });

  $('#menu').click(
    function(){
        if ($(window).width() > 769) {
            $('#right-menu').css("width", "22.5%");
            $('#right-menu').css("margin-left", "77.5%");
            } 

            else if ($(window).width() < 481 ) {
                $('#right-menu').css("width", "67.5%");
                $('#right-menu').css("margin-left", "32.5%");
                } 

            else {
                $('#right-menu').css("width", "42%");
                $('#right-menu').css("margin-left", "58%");
            }
    });

    $('#scrollMenu span').click(
        function(){
            if ($(window).width() > 769) {
            $('#right-menu').css("width", "22.5%");
            $('#right-menu').css("margin-left", "77.5%");
            } 

            else if ($(window).width() < 481 ) {
                $('#right-menu').css("width", "67.5%");
                $('#right-menu').css("margin-left", "32.5%");
                } 

            else {
                $('#right-menu').css("width", "42%");
                $('#right-menu').css("margin-left", "58%");
            }
        });
  
        $('#close').click(
            function(){
               
                    $('#right-menu').css("width", "0");
                    $('#right-menu').css("margin-left", "100%");  
            });
          