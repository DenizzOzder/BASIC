  document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger');
    const navbarItems = document.querySelector('.navbar-items');

    burger.addEventListener('click', () => {
      navbarItems.classList.toggle('active');
      burger.classList.toggle('active');
    });
  });