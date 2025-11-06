document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector('.menu-btn');
  const closeBtn = document.querySelector('#closeMenu');
  const sideMenu = document.querySelector('#sideMenu');
  const backdrop = document.querySelector('#menuBackdrop');

  menuBtn.addEventListener('click', () => {
    sideMenu.classList.add('active');
    backdrop.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('active');
    backdrop.classList.remove('active');
  });

  backdrop.addEventListener('click', () => {
    sideMenu.classList.remove('active');
    backdrop.classList.remove('active');
  });
});
