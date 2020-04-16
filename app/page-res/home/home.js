$('#home-button-start').click(function () {
  $('#master-navbar-item-home').removeClass('is-active')
  $('#master-navbar-item-revision').addClass('is-active')
  $('#master-navbar-item-settings').removeClass('is-active')
  $('.master-main').load('revision.html')
})
$('#home-button-github').click(function () {
  window.open('https://github.com/openrevise/web')
})