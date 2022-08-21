/*let isMobile = {
  Android: function() {
    return navigator.userAgent.match(/Android/i)
  },
  BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i)
  },
  iOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i)
  },
  Opera: function() {
    return navigator.userAgent.match(/Opera Mini/i)
  },
  Windows: function() {
    return navigator.userAgent.match(/IEMobile/i)
  },
  any: function() {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows())
  }
};*/

/*let mobileMenuOutsideClick = function() {
  $(document).click(function (e) {
    let container = $("#colorlib-offcanvas, .js-colorlib-nav-toggle")
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($('body').hasClass('offcanvas') ) {
        $(this).removeClass('offcanvas')
        $('.js-colorlib-nav-toggle').removeClass('active')
      }
    }
  });
};*/

// Go to top
/*let goToTop = function() {
  $('.js-gotop').click(function(event) {
    event.preventDefault()
    $('html, body').animate({
      scrollTop: $('html').offset().top
    }, 500, 'easeInOutExpo')
    return false
  });

  $(window).scroll(function() {
    let $win = $(window);
    if ($win.scrollTop() > 200) {
      $('.js-top').addClass('active')
    } else {
      $('.js-top').removeClass('active')
    }
  });
};*/


/*let parallax = function() {
  if (!isMobile.any()) {
    $(window).stellar({
      horizontalScrolling: false,
      hideDistantElements: false,
      responsive: true
    })
  }
};*/

// Loading page
let loaderPage = function () {
    $('.loader').fadeOut(1000)
}

$(function () {
  'use strict'
  // mobileMenuOutsideClick()
  // goToTop()
  loaderPage()
  // parallax()
})
