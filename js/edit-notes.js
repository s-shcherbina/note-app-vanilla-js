import { base } from './index.js';
import { openModal, $modalEl } from './modal.js';
import {
  $noteForm,
  $name,
  $category,
  $content,
  $formBtn,
} from './add-notes.js';

export const editData = (e) => {
  const editBtn = e.target;
  if (editBtn.innerText === 'edit') {
    const li = editBtn.closest('.note');
    $formBtn.innerText = 'Edit Note';

    $name.value = li.firstElementChild.children[1].textContent;
    $category.value = li.firstElementChild.children[3].textContent;
    $content.value = li.firstElementChild.children[4].textContent;

    base.tempVars.id = li.dataset.id;
    base.tempVars.date = li.firstElementChild.children[2].textContent;

    openModal();
    $noteForm.addEventListener('submit', editNote);
  }
};

const editNote = (e) => {
  e.preventDefault();
  $modalEl.style.opacity = 0;
  setTimeout(() => {
    $modalEl.style.visibility = 'hidden';
  }, 300);

  base.editNote(
    base.tempVars.id,
    base.tempVars.date,
    $name.value,
    $category.value,
    $content.value
  );

  $noteForm.reset();
  $noteForm.removeEventListener('submit', editNote);
};
