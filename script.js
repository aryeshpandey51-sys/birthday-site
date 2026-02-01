function goNext() {
  confettiBurst();
  setTimeout(() => {
    window.location.href = "menu.html";
  }, 1200);
}

function confettiBurst() {
  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 }
  });
}

window.onload = () => {
  confetti({
    particleCount: 120,
    spread: 70,
    origin: { y: 0.7 }
  });
};
