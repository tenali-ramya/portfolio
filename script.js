// ===== Smooth Skill Bar Animation =====
document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll('.skill-bar span');

  bars.forEach(bar => {
    const finalWidth = bar.style.width;
    bar.style.width = '0%';
    setTimeout(() => {
      bar.style.width = finalWidth;
    }, 300);
  });
});

// ===== Responsive Mobile Navbar Toggle =====
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.createElement('div');
  menuToggle.classList.add('menu-toggle');
  menuToggle.innerHTML = '&#9776;'; // Hamburger icon
  document.querySelector('nav').appendChild(menuToggle);

  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});

// ===== Contact Form Submission Handling =====
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const name = form.querySelector('input[type="text"]').value.trim();
      const email = form.querySelector('input[type="email"]').value.trim();
      const message = form.querySelector('textarea').value.trim();

      if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
      }

      // For now, just show a confirmation alert
      alert(`Thank you, ${name}! Your message has been sent.`);
      form.reset();
    });
  }
});

// ===== Scroll to Top Button =====
document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.createElement('button');
  scrollBtn.textContent = "↑";
  scrollBtn.classList.add('scroll-top-btn');
  document.body.appendChild(scrollBtn);

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  });
});
