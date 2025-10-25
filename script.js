const pfp = document.getElementById('pfp');
const card = document.getElementById('profile-card');
const closeBtn = document.getElementById('close-btn');

pfp.addEventListener('click', () => {
  card.classList.remove('hidden');
  setTimeout(() => card.classList.add('visible'), 50);
});

closeBtn.addEventListener('click', () => {
  card.classList.remove('visible');
  setTimeout(() => card.classList.add('hidden'), 400);
});
