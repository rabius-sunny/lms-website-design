// Re-usable component fetching
const reuseComponent = (path, domElementId) =>
  document.addEventListener('DOMContentLoaded', function () {
    fetch(path)
      .then((response) => response.text())
      .then((data) => {
        const target = document.getElementById(domElementId)
        target && (target.innerHTML = data)
      })
  })

// Screen break points
const isMobile = window.innerWidth <= 572
const isTablet = window.innerWidth > 572 && window.innerWidth <= 1200
const isDesktop = window.innerWidth > 1200

reuseComponent('../components/header.html', 'navbar-placeholder')
reuseComponent('../components/footer.html', 'footer-placeholder')

// Setting the active path in the navbar
document.addEventListener('DOMContentLoaded', function () {
  var pathname = window.location.pathname
  var page = pathname.split('/').pop()

  if (!page) {
    page = 'index.html'
  }

  var linkMap = {
    'index.html': 'home',
    'about-us.html': 'aboutus',
    'admission.html': 'admission',
    'all-courses.html': 'allcourse',
    'others.html': 'others'
  }

  var linkId = linkMap[page]

  if (linkId) {
    var linkElement = document.getElementById(linkId)
    if (linkElement) {
      linkElement.classList.add('active')
    }
  }
})

// Toggling show more button
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

// Handling sidebar of dashboard
const sidebarToggler = document.getElementById('toggleSidebar')
sidebarToggler?.addEventListener('click', function () {
  const sidebar = document.getElementById('sidebar')
  if (sidebar.classList.contains('sidebar-visible')) {
    sidebar.classList.remove('sidebar-visible')
    sidebarToggler.innerHTML = '<i class="bi bi-text-indent-left fs-3"></i>'
    sidebarToggler.classList.remove('toggle-active')
  } else {
    sidebar.classList.add('sidebar-visible')
    sidebarToggler.innerHTML = 'X'
    sidebarToggler.classList.add('toggle-active')
  }
})
