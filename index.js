
  // Initialize AOS
  AOS.init({
    once: true,
  });

  // Typing Animation
  const text = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
  ];
  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";

  (function type() {
    if (count === text.length) {
      count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".text-animation").textContent = letter;
    if (letter.length === currentText.length) {
      count++;
      index = 0;
      setTimeout(type, 1500); // Pause at end of word
    } else {
      setTimeout(type, 100); // Typing speed
    }
  })();

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth",
        });
      }
    });
  });

  // Download CV buttons
  const download1 = document.getElementById("download1");
  const download2 = document.getElementById("download2");
  const btn3 = document.getElementById("btn3");

  [download1, download2, btn3].forEach((btn) => {
    btn.addEventListener("click", () => {
      // Replace with your actual CV file path
      window.open("./Chidanandam_ece2025Reume.pdf");
    });
  });

  // Contact form submission
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const mailtoLink = `mailto:kchidanandam000@gmail.com?subject=Message from ${name}&body=${message}%0D%0A%0D%0AFrom: ${email}`;
    window.location.href = mailtoLink;

    // Show success message
    alert("Thank you for your message! I'll get back to you soon.");
    contactForm.reset();
  });

  // Add animation to elements when they come into view
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(
      ".project-card, .about-card, .contact-card"
    );

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (elementPosition < screenPosition) {
        element.classList.add("animate__animated", "animate__fadeInUp");
      }
    });
  };

  window.addEventListener("scroll", animateOnScroll);

  // Initial check in case elements are already in view
  animateOnScroll();

  // Wave animation for hero section
  const wave = document.querySelector(".wave-animation");
  let scrollPosition = 0;

  window.addEventListener("scroll", function () {
    scrollPosition = window.scrollY;
    if (wave) {
      wave.style.backgroundPositionX = -scrollPosition * 0.5 + "px";
    }
  });
