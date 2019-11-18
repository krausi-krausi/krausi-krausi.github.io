$(document).ready(function(){
    $(this).scrollTop(0);
});

window.setInterval(function(){
    $('#h').slideToggle(700)
    $('#t').slideToggle(900)
    $('#m').slideToggle(1100)
    $('#l').slideToggle(1300)
}, 4200);

window.setTimeout(function(){
    window.setInterval(function(){
        $('#c').slideToggle(700)
        $('#s').slideToggle(900)
        $('#s1').slideToggle(1100)
    }, 4200);
}, 4200);


    $(window).scroll(function(){
        if ($(window).scrollTop() >= 660) {
          $('.second-footer').addClass('fixed');
          $('.move-bottom').addClass('top');
          $('.my-works').addClass('left');
         }
         else {
          $('.second-footer').removeClass('fixed');
          $('.move-bottom').removeClass('top');
          $('.my-works').removeClass('left');
         }
      });



      $('.footer-icon').click(function(){
        if ($('#one').css('display') == 'block' && $('#html').css('display') == 'none'){
        $('#one').hide();
        $('#two').addClass('rotate-two');
        $('#three').addClass('rotate-one');
        $('#two').removeClass('rotate-three');
        $('#three').removeClass('rotate-four');
        $('.menu').slideDown();
        $('#css').slideUp(200);
        $('#html').slideDown(200);
        }


        else {
            $('#one').show();
            $('#two').addClass('rotate-three');
            $('#three').addClass('rotate-four');
            $('#two').removeClass('rotate-two');
            $('#three').removeClass('rotate-one');
            $('.menu').slideUp();
            $('#css').slideDown(200);
            $('#html').slideUp(200);
        }
      })

$('#first').click(function(){
    $('.works').show();
    $('.contact').hide();
    $('.about').hide();
    $(window).scrollTop(660);
});

$('#second').click(function(){
    $('.contact').hide();
    $('.works').hide();
    $('.about').show();
    $(window).scrollTop(660);
});

$('#third').click(function(){
    $('.contact').show();
    $('.about').hide();
    $('.works').hide();
    $(window).scrollTop(660);
});
      
$('.css-logo').click(function(){
    $(window).scrollTop(0);
});

$('#template').click(function(){
    window.location.href='responsive template.html';
 });

$('#main').click(function(){
    window.location.href='main.html';
 });

 $('#quiz').click(function(){
    window.location.href='Quiz.html';
 });

 $('#game').click(function(){
    window.location.href='My Game.html';
 });

 $('#website').click(function(){
    window.location.href='website.html';
 });
