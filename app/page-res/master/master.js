'use strict'

const OpenReviseMaster = {
  swapAppTheme: function (selectedTheme) {
    switch (selectedTheme) {
      case 'cyborg':
        $('#master-theme').attr('href', 'page-res/global/bulma/bulmaswatch-cyborg.min.css')
        $('#master-logo').removeClass('master-logo-light')
        break
      case 'bulma':
        $('#master-theme').attr('href', 'page-res/global/bulma/bulmaswatch-bulma.min.css')
        $('#master-logo').addClass('master-logo-light')
        break
    }
  },
  navigatePage: function (page) {
    $('.navbar-burger').removeClass('is-active')
    $('.navbar-menu').removeClass('is-active')
    $('.master-main').animate({
      opacity: 0.4
    }, 200, function () {
      $('.master-main').load(page + ".html", function () {
        $('.master-main').animate({
            opacity: 1
        }, 200)
      })
    })
  }
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
      OpenReviseMaster.navigatePage('home')
    }
  })
  $('#master-navbar-item-revision').click(function () {
    if (currentPage !== 'revision') {
      $('#master-navbar-item-home').removeClass('is-active')
      $('#master-navbar-item-revision').addClass('is-active')
      $('#master-navbar-item-settings').removeClass('is-active')
      currentPage = 'revision'
      OpenReviseMaster.navigatePage('revision')
    }
  })
  $('#master-navbar-item-settings').click(function () {
    if (currentPage !== 'settings') {
      $('#master-navbar-item-home').removeClass('is-active')
      $('#master-navbar-item-revision').removeClass('is-active')
      $('#master-navbar-item-settings').addClass('is-active')
      currentPage = 'settings'
      OpenReviseMaster.navigatePage('settings')
    }
  })
  if (localStorage.getItem('OpenRevise2.selectedTheme') === null) {
    localStorage.setItem('OpenRevise2.selectedTheme', 'bulma')
  } else {
    OpenReviseMaster.swapAppTheme(localStorage.getItem('OpenRevise2.selectedTheme'))
  }
})
