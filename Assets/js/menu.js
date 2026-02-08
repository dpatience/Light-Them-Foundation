// Responsive menu toggle for small screens only
// This script assumes the menu icon has id 'menuIcon' and nav has id 'mainNav'
document.addEventListener('DOMContentLoaded', function() {
  var menuIcon = document.getElementById('menuIcon');
  var nav = document.getElementById('mainNav');
  function isSmallScreen() {
    return window.innerWidth <= 768;
  }
  if (menuIcon && nav) {
    menuIcon.addEventListener('click', function() {
      if (isSmallScreen()) {
        nav.classList.toggle('show');
      }
    });
    // Hide menu when clicking outside nav or resizing to large screen
    document.addEventListener('click', function(e) {
      if (isSmallScreen() && nav.classList.contains('show')) {
        if (!nav.contains(e.target) && e.target !== menuIcon) {
          nav.classList.remove('show');
        }
      }
    });
    window.addEventListener('resize', function() {
      if (!isSmallScreen()) {
        nav.classList.remove('show');
      }
    });
  }
});
