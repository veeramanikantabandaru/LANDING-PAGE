function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('active');
}

function toggleDark() {
  const body = document.body;
  const icon = document.getElementById('modeIcon');
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  icon.textContent = isDark ? '☀️' : '🌙';
}