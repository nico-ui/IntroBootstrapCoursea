$(document).ready(function() {
  $("#mycarousel").carousel({
    interval: 2000
  });
  $("#carouselButton").click(function() {
    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
      $("#mycarousel").carousel('pause');
      $("#carouselButton").children("span").removeClass('fa-pause');
      $("#carouselButton").children("span").addClass('fa-play');
    } else if ($("#carouselButton").children("span").hasClass('fa-play')) {
      $("#mycarousel").carousel('cycle');
      $("#carouselButton").children("span").removeClass('fa-play');
      $("#carouselButton").children("span").addClass('fa-pause');
    }
  });
});
$(document).ready(function() {
  $('#btnReserveTable').click(function() {
    $('#reservemodal').modal('show');
  });
  $('#btnCancelReserveModal').click(function() {
    $('#reservemodal').modal('hide');
  });
});
$(document).ready(function() {
  $('#linkLoginModal').click(function() {
    $('#loginModal').modal('show');
  });
  $('#btnCancelLoginModal').click(function() {
    $('#loginModal').modal('hide');
  });
});
