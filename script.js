
$(function(){
  // Smooth scroll for anchor links
  $('a[href^="#"]').on('click', function(e){
    var target = $($(this).attr('href'));
    if(target.length){
      e.preventDefault();
      $('html,body').animate({scrollTop: target.offset().top - 60}, 600);
    }
  });
});
