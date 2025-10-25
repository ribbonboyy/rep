document.addEventListener('DOMContentLoaded', () => {
  const pfp = document.getElementById('pfp');
  const card = document.getElementById('card');
  const close = document.getElementById('close');

  if (!pfp || !card || !close) return;

  const openCard = () => {
    card.classList.add('visible');
    card.setAttribute('aria-hidden', 'false');
  };

  const closeCard = () => {
    card.classList.remove('visible');
    card.setAttribute('aria-hidden', 'true');
  };

  pfp.addEventListener('click', openCard);
  close.addEventListener('click', closeCard);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCard();
  });

  document.addEventListener('click', (e) => {
    if (!card.classList.contains('visible')) return;
    const inside = card.contains(e.target) || pfp.contains(e.target);
    if (!inside) closeCard();
  });
});
