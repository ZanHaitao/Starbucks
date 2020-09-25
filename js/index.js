(function () {
  $('#showBtn').on('click', function () {
    $('.showView').removeClass('hide').addClass('show');
    showView();
  });
  $('#hideBtn').on('click', function () {
    $('.showView').removeClass('show').addClass('hide');
    showView();
  });

  $(window).resize(showView);

  function showView() {
    if ($(window).outerWidth() <= 992 && $('.showView').hasClass('show')) {
      $('body')
        .css({
          overflowY: 'hidden',
        })
        .addClass('show-bg');
    } else {
      $('body')
        .css({
          overflowY: 'auto',
        })
        .removeClass('show-bg');
    }
    if ($(window).innerWidth() <= 576) {
      var width = $(window).innerWidth();
      $('.footer-nav').css({
        width: width,
      });
    }
  }
})();
