document.addEventListener("DOMContentLoaded", function () {
  /* Smooth Scrolling */
  const menuLinks = document.querySelectorAll("nav ul li a");

  menuLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 60,
          behavior: "smooth",
        });
      }
    });
  });

  /* Testimonial Slider */
  const testimonials = document.querySelectorAll(".testimonial");
  let index = 0;

  function showTestimonial() {
    testimonials.forEach((testimonial, i) => {
      testimonial.style.display = i === index ? "block" : "none";
    });
    index = (index + 1) % testimonials.length;
  }

  setInterval(showTestimonial, 3000);

  /* Scroll Reveal Animation */
  const revealElements = document.querySelectorAll(
    ".about, .achievements, .testimonials, .contact"
  );

  function revealOnScroll() {
    revealElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < window.innerHeight - 100) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Initial check

  /* Back to Top Button */
  const backToTopBtn = document.createElement("button");
  backToTopBtn.innerHTML = "↑";
  backToTopBtn.classList.add("back-to-top");
  document.body.appendChild(backToTopBtn);

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  /* WhatsApp Floating Button */
  const whatsappButton = document.createElement("a");
  whatsappButton.href = "https://wa.me/27123456789";
  whatsappButton.classList.add("whatsapp-float");
  whatsappButton.innerHTML = `<i class="fab fa-whatsapp"></i>`;
  whatsappButton.target = "_blank";
  document.body.appendChild(whatsappButton);
});
