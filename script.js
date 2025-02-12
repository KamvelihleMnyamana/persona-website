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
  whatsappButton.href = "https://wa.me/+27762731851";
  whatsappButton.classList.add("whatsapp-float");
  whatsappButton.innerHTML = `<i class="fab fa-whatsapp"></i>`;
  whatsappButton.target = "_blank";
  document.body.appendChild(whatsappButton);
});

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-links a"); 
    const content = document.getElementById("content"); 

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent full page reload
            const page = this.getAttribute("href"); // Get the link href
            
            // Fetch the requested page content
            fetch(page)
                .then(response => response.text())
                .then(data => {
                    content.innerHTML = data; // Load content inside #content div
                    updateActiveLink(this); // Update active link styling
                })
                .catch(error => console.error("Error loading page:", error));
        });
    });

    // Function to highlight active link
    function updateActiveLink(activeLink) {
        links.forEach(link => link.classList.remove("active"));
        activeLink.classList.add("active");
    }
});