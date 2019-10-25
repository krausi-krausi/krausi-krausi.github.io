window.setInterval(function(){
    $('#h').slideToggle(700)
    $('#t').slideToggle(700)
    $('#m').slideToggle(700)
    $('#l').slideToggle(700)
}, 4200);


window.setTimeout(function(){
    window.setInterval(function(){
        $('#c').slideToggle(700)
        $('#s').slideToggle(700)
        $('#s1').slideToggle(700)
    }, 4200);
}, 4200);


     $(window).scroll(function(){
        if ($(window).scrollTop() >= 655) {
          $('.second-footer').addClass('fixed');
         }
         else {
          $('.second-footer').removeClass('fixed');
         }
      });

      $('.footer-icon').click(function(){
        if($('#one').css('display') == 'none') {
            $('#one').show();
            $('#two').addClass('rotate-three');
            $('#three').addClass('rotate-four');
            $('#two').removeClass('rotate-two');
            $('#three').removeClass('rotate-one');
            $('.menu').slideUp();
        }

        else {

        $('#one').hide();
        $('#two').addClass('rotate-two');
        $('#three').addClass('rotate-one');
        $('#two').removeClass('rotate-three');
        $('#three').removeClass('rotate-four');
        $('.menu').slideDown();
        }
      })


      

    

