document.addEventListener('DOMContentLoaded', function () {
  var menuIcon = document.getElementById('menuIcon');
  var nav = document.getElementById('mainNav');
  var header = document.querySelector('.header');

  function isSmallScreen() {
    return window.innerWidth <= 768;
  }

  function setMenuState(isOpen) {
    if (!nav || !menuIcon) {
      return;
    }
    nav.classList.toggle('show', isOpen);
    menuIcon.setAttribute('aria-expanded', String(isOpen));
  }

  if (menuIcon && nav) {
    menuIcon.setAttribute('aria-expanded', 'false');
    menuIcon.addEventListener('click', function () {
      if (isSmallScreen()) {
        setMenuState(!nav.classList.contains('show'));
      }
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (isSmallScreen()) {
          setMenuState(false);
        }
      });
    });

    document.addEventListener('click', function (e) {
      if (isSmallScreen() && nav.classList.contains('show')) {
        if (!nav.contains(e.target) && e.target !== menuIcon) {
          setMenuState(false);
        }
      }
    });

    window.addEventListener('resize', function () {
      if (!isSmallScreen()) {
        setMenuState(false);
      }
    });
  }

  document.querySelectorAll('.nav a').forEach(function (link) {
    var href = link.getAttribute('href');
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  if (!document.querySelector('.skip-link')) {
    var skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to content';
    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  var mainContent = document.querySelector('.content-wrapper, .page-hero, main');
  if (mainContent && !mainContent.id) {
    mainContent.id = 'main-content';
  }

  if (!document.querySelector('.back-to-top')) {
    var backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.setAttribute('aria-label', 'Back to top');
    backToTop.innerHTML = '↑';
    document.body.appendChild(backToTop);

    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  var backToTopButton = document.querySelector('.back-to-top');
  if (backToTopButton) {
    window.addEventListener('scroll', function () {
      if (header) {
        header.classList.toggle('scrolled', window.scrollY > 12);
      }
      backToTopButton.classList.toggle('visible', window.scrollY > 500);
    });
  }

  var revealItems = document.querySelectorAll('.why, .feature, .program, .news-card, .impact-box, .story, .academic-impact, .impact-cta, .page-hero, .contact-info, .contact-form, .contact-map');
  if ('IntersectionObserver' in window && revealItems.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealItems.forEach(function (item, index) {
      item.classList.add('reveal');
      item.style.transitionDelay = (index * 70) + 'ms';
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add('is-visible');
    });
  }

  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      var status = form.querySelector('.form-success');
      if (status) {
        status.style.display = 'none';
      }

      try {
        var response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
        });

        if (response.ok) {
          if (status) {
            status.textContent = "Thank you! We'll be in touch soon.";
            status.style.color = '#28a745';
            status.style.display = 'block';
          }
          form.reset();
        } else {
          if (status) {
            status.textContent = 'Sorry, there was a problem. Please try again later.';
            status.style.color = '#e63946';
            status.style.display = 'block';
          }
        }
      } catch (err) {
        if (status) {
          status.textContent = 'Sorry, there was a problem. Please try again later.';
          status.style.color = '#e63946';
          status.style.display = 'block';
        }
      }

      if (status) {
        setTimeout(function () {
          status.style.display = 'none';
        }, 4000);
      }
    });
  }
});
