(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $('.dropdown-button').dropdown();
    $('.dropdown-taglist').dropdown();
    $('.materialboxed').materialbox();
    $('.parallax').parallax();
    $('#search').focusin(function() {
      $(this).css('width', '200px');
    });
    $('#search').focusout(function() {
      $(this).css('width', '0');
    });
  });
})(jQuery);
