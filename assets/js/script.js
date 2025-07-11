document.addEventListener('DOMContentLoaded', function () {
  // Animate stat cards on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, observerOptions);

  document.querySelectorAll('.stat-card').forEach(card => {
    observer.observe(card);
  });

  // Add hover effects to feature boxes
  document.querySelectorAll('.feature-box').forEach(box => {
    box.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-10px) scale(1.05)';
    });

    box.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Floating shapes (metal balls and hexagons)
  const shapeCount = 10;
  const shapeImages = ["assets/images/sphere.png", "assets/images/hex.png"];

  for (let i = 0; i < shapeCount; i++) {
    const img = document.createElement("img");
    img.src = shapeImages[Math.floor(Math.random() * shapeImages.length)];
    img.classList.add("floating-shape");

    // Random size
    const size = Math.floor(Math.random() * 40) + 20;
    img.style.width = `${size}px`;
    img.style.height = `${size}px`;

    // Random horizontal position
    img.style.left = `${Math.floor(Math.random() * 100)}vw`;

    // Set initial position at bottom
    img.style.bottom = `-100px`;
    img.style.top = "auto";

    // Animation delay and duration
    const duration = Math.random() * 10 + 5;
    const delay = Math.random() * 5;

    img.style.animation = `floatUp ${duration}s linear infinite`;
    img.style.animationDelay = `${delay}s`;

    document.body.appendChild(img);
  }
});
