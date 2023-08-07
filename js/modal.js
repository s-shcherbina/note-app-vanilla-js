export const $modalEl = document.querySelector('.modal'),
  $closeBtn = $modalEl.querySelector('.modal-close'),
  $titleModal = $modalEl.querySelector('.modal-title');

export const openModal = () => {
  $modalEl.style.visibility = 'visible';
  $modalEl.style.opacity = 1;
};

export const closeModal = (e) => {
  if (
    e.target === $modalEl ||
    ($closeBtn && e.target.closest('.modal-close'))
  ) {
    $modalEl.style.opacity = 0;
    setTimeout(() => {
      $modalEl.style.visibility = 'hidden';
    }, 300);
  }
};

$modalEl.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
  `;
