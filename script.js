// Smooth Parallax Effect for Hero Background
let targetX = 50,
  targetY = 50;
let currentX = 50,
  currentY = 50;

document.addEventListener("mousemove", (e) => {
  targetX = 50 + (e.clientX / window.innerWidth - 0.5) * 20;
  targetY = 50 + (e.clientY / window.innerHeight - 0.5) * 20;
});

function animateParallax() {
  currentX += (targetX - currentX) * 0.05;
  currentY += (targetY - currentY) * 0.05;
  document
    .querySelector(".hero")
    .style.setProperty("--bg-pos", `${currentX}% ${currentY}%`);
  requestAnimationFrame(animateParallax);
}

animateParallax();

// Simple Email Send (mailto fallback)
function sendEmail(event) {
  event.preventDefault();
  const form = event.target;
  const name = form[0].value;
  const email = form[1].value;
  const message = form[2].value;
  const subject = encodeURIComponent(`Message from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );
  window.location.href = `mailto:info@ethiopiancoffee.com?subject=${subject}&body=${body}`;
  form.reset();
  alert("Your message is ready to send via your email client.");
}
