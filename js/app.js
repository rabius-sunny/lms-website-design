const reuseComponent = (path, domElementId) =>
  document.addEventListener('DOMContentLoaded', function () {
    fetch(path)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById(domElementId).innerHTML = data
      })
  })

const isMobile = window.innerWidth <= 572
const isTablet = window.innerWidth > 572 && window.innerWidth <= 1200
const isDesktop = window.innerWidth > 1200

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: isMobile ? 1 : isTablet ? 2 : isDesktop ? 3 : 2,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})

reuseComponent('../components/header.html', 'navbar-placeholder')
reuseComponent('../components/footer.html', 'footer-placeholder')

document.getElementById('show-more')?.addEventListener('click', function () {
  var textContainer = document.getElementById('text-container')

  if (textContainer.classList.contains('expanded')) {
    textContainer.classList.remove('expanded')
    this.innerHTML = `<div
    class="show-more d-flex align-items-center gap-2"
    id="show-more"
  >
    Show More
    <i class="bi bi-chevron-down"></i>
  </div>`
  } else {
    textContainer.classList.add('expanded')
    this.innerHTML = `<div
    class="show-more d-flex align-items-center gap-2"
    id="show-more"
  >
    Show More
    <i class="bi bi-chevron-up"></i>
  </div>`
  }
})
