$(document).ready(function() {
  $('#age').html(getAge("Jan 18, 1978"))
  $(".fancybox").fancybox({
    padding : 0
  });
  $('.flexslider').flexslider({
    animation: "slide",
    animationLoop: true,
    itemWidth: 180,
    itemMargin: 200,
    minItems: 2,
    maxItems: 3
  });
  // $('.icons li').mousemove(function(e){
  //     tooltip = $(document).createElement('div')
  //     tooltip.addClass('tooltip')
  //     console.log(e.pageX +', '+ e.pageY);
  //  }); 
  $("#goToForm").click(function(event){   
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
  });
});


function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function toolTip(){
  
}
