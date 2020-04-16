$(document).ready(function () {
  $('.navbar-burger').click(function () {
    $('.navbar-burger').toggleClass('is-active')
    $('.navbar-menu').toggleClass('is-active')
  })
  $('#navbar-item-home').click(function () {
    $('#navbar-item-home').addClass('is-active')
    $('#navbar-item-revision').removeClass('is-active')
    $('#navbar-item-settings').removeClass('is-active')
    $('.master-main').attr('src', '../home/home.html')
  })
  $('#navbar-item-revision').click(function () {
    $('#navbar-item-home').removeClass('is-active')
    $('#navbar-item-revision').addClass('is-active')
    $('#navbar-item-settings').removeClass('is-active')
    $('.master-main').attr('src', '../revision/revision.html')
  })
})
