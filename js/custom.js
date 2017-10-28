/* Example show-more-items */
$( document ).ready(function(){
  var numberOfItemsToShow = 6;

  $('.showMore').click(function() {

    if (window.isScroll) {
      $('html, body').animate({ scrollTop: $(".showMore").offset().top }, 500);
    } else {
      $('.content').animate({ scrollTop: $(".showMore").position().top }, 500);
    }

    if ($('.items-container li.hidden').size() <= numberOfItemsToShow){
      $('.showMore').remove();
    }

    $('.items-container li.hidden:lt('+numberOfItemsToShow+')').removeClass('hidden').find('.done').removeClass('done');
  });
});


  $(function(){
    if (window.preload){

      window.progressInterval = setInterval(function(){

        //loading
        var progress = window.loadingProgress/window.images;
        $('.progress').css('width',progress * 100 + "%");

        //loaded
        if (window.loadingProgress == window.images) {
          clearInterval(window.progressInterval);
          $('.progress').addClass('loaded');
          setTimeout(function(){ $('.progress').remove(); }, 1000);
        }
      },100);
    }
  });








