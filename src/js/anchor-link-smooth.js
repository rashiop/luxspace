const smoothScrollAnchor = document.querySelectorAll("a[href^='#']");

for (let idx = 0; idx < smoothScrollAnchor.length; idx++) {
  const el = smoothScrollAnchor[idx];

  el.addEventListener('click', function(event) {
    event.preventDefault();
    if (document.getElementById(this.getAttribute('href').replace('#', ''))) {
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      })
    }
  })
}