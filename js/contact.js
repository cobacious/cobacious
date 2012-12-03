$(document).ready(function() {
  $("#gitSumbit").click(function(e) {
    e.preventDefault();
    var formvalid = true;    
    $('#getintouch :input').each(function() {      
      var val = $(this).val();
      var id = $(this).attr('id');
      var email_check = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i;
      if(val == '' || (id == 'gitEmail' && !email_check.test(val))) {
        formvalid = false;
        $(this).addClass('error');
        $(this).prev().addClass('red');
      } else {
        $(this).removeClass('error');
        $(this).prev().removeClass('red');
      }
    });    
    if (!formvalid) {
        $('.error').wobble();
    } else {
      fields = $('#getintouch').serializeArray();
      $.ajax({  
        type: "POST",
        dataType : 'json',
        url: "getintouch.php",  
        data: fields,
        success: function(txt) {
          var space = txt.name.indexOf(' ') 
          var stop = space >= 0 ? space : txt.name.length;
          var fname = txt.name.substring(0,stop)
          var thanks = "Thanks " + fname + ". I'll get back to you shortly.";
          $('#response').html(thanks).fadeIn(500);
          $('#getintouch :input').each(function() {
            $(this).val('');
          })
        }
      });
      return false;
    }    
  });
});


(function( $ ) {

  $.fn.wobble = function() {

    // $this = this;

    return this.each(function() {

      for(i=0;i<3;i++) {
        $(this).animate({
          'margin-left' : '-2px'
        }, 50)
        .animate({
          'margin-left' : '2px'
        }, 50, function() {
          i++; 
          $(this).animate({'margin-left' : 0}, 50)
        });
      }

    });

  }

})( jQuery );