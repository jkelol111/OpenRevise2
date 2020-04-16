function closeHamburgerMenu () {
  $('.navbar-burger').toggleClass('is-active')
  $('.navbar-menu').toggleClass('is-active')
}

function navigatePage (page) {
  $('.master-main').animate({
    opacity: 0.1
  }, 250, function () {
    $('.master-main').load(page + ".html", function () {
      $('.master-main').animate({
        opacity: 1
      }, 250)
    })
  })
}

$(document).ready(function () {
  $(".master-main").load("home.html")
  var currentPage = 'home'
  $('.navbar-burger').click(function () {
    $('.navbar-burger').toggleClass('is-active')
    $('.navbar-menu').toggleClass('is-active')
  })
  $('#master-navbar-item-home').click(function () {
    if (currentPage !== 'home') {
      $('#master-navbar-item-home').addClass('is-active')
      $('#master-navbar-item-revision').removeClass('is-active')
      $('#master-navbar-item-settings').removeClass('is-active')
      currentPage = 'home'
      closeHamburgerMenu()
      navigatePage('home')
    }
  })
  $('#master-navbar-item-revision').click(function () {
    if (currentPage !== 'revision') {
      $('#master-navbar-item-home').removeClass('is-active')
      $('#master-navbar-item-revision').addClass('is-active')
      $('#master-navbar-item-settings').removeClass('is-active')
      currentPage = 'revision'
      navigatePage('revision')
      closeHamburgerMenu()
    }
  })
  $('#master-navbar-item-settings').click(function () {
    if (currentPage !== 'settings') {
      $('#master-navbar-item-home').removeClass('is-active')
      $('#master-navbar-item-revision').removeClass('is-active')
      $('#master-navbar-item-settings').addClass('is-active')
      currentPage = 'settings'
      //navigatePage('settings')
      closeHamburgerMenu()
    }
  })
})
