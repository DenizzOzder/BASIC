  document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger');
    const navbarItems = document.querySelector('.navbar-items');

    burger.addEventListener('click', () => {
      navbarItems.classList.toggle('active');
      burger.classList.toggle('active');
    });
  });

  // Edu BTN

  document.addEventListener('DOMContentLoaded', function () {
    const eduBTN = document.getElementById('edu-button');
    const details = document.getElementById('detail-btn');

    eduBTN.addEventListener('click', () => {
      details.classList.toggle('shown');
      eduBTN.classList.toggle('activebtn');
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");
    const interest = document.getElementById('Interest');

    function getOffsetByDevice() {
      const width = window.innerWidth;

      if (width < 576) return 455;           // Mobile
      if (width >= 576 && width < 992) return 150;   // Tablet
      return 150;                           // Desktop
      }

    function onScroll() {
      const scrollY = window.pageYOffset;
      const offset = getOffsetByDevice();

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - offset;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          const currentId = section.getAttribute("id");

          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentId}`) {
              link.classList.add("active");
            }
          });
        }
      });
    }

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll); // Ekran boyutu değişince yeniden hesapla
  });

  window.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById('theme-toggle');
  const body = document.body;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light-theme');
  }

  toggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isLight = body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const eduListItems = document.querySelectorAll('.edu-lesson');

  eduListItems.forEach(item => {
    const iconRotate = item.querySelector('.icon-lesson');
    const eduLessons = item.querySelector('.item-list');

    item.addEventListener('click', () => {
      iconRotate.classList.toggle('rotated');
      eduLessons.classList.toggle('visible');
    });
  });
});