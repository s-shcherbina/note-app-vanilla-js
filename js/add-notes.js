import { headers, categoryIcon } from './moks.js';
import {
  base,
  $activeBar,
  $activeNotes,
  $archiveBar,
  $archiveNotes,
} from './index.js';
import { $modalEl, openModal, $titleModal } from './modal.js';

export const $noteForm = document.querySelector('.note-form'),
  $name = $noteForm.querySelector('#name'),
  $category = $noteForm.querySelector('#category'),
  $content = $noteForm.querySelector('#content'),
  $formBtn = $noteForm.querySelector('#form-btn');

export const createNote = () => {
  $formBtn.innerText = 'Create Note';
  $titleModal.innerText = 'Create Note';

  openModal();

  $noteForm.addEventListener('submit', addNote);
};

export const addNote = (e) => {
  e.preventDefault();

  base.addNote($name.value, $category.value, $content.value);
  $modalEl.style.opacity = 0;
  setTimeout(() => {
    $modalEl.style.visibility = 'hidden';
  }, 300);

  $noteForm.reset();
  $noteForm.removeEventListener('submit', addNote);
};

export const createNoteEl = (note) => {
  const noteItem = `
    <article class="note-data">
      <div class="img-wrapper">
        <div class="icon-wrapper">
          <span class="material-icons md-36">${categoryIcon(
            note.category
          )}</span>
        </div>
      </div>
      <p class="width-name crop">${note.name}</p>
      ${Object.values(note)
        .slice(2, -1)
        .map((value) => `<p class='width-item tone crop'>${value}</p>`)
        .join('')}
    </article>
    <div class="icon-btns tone">
      <span class="material-icons md-36">edit</span>
      <span class="material-icons md-36">${
        note.archived ? 'unarchive' : 'archive'
      }</span>
      <span class="material-icons md-36">delete</span>
    </div>
  `;

  const li = document.createElement('li');
  li.classList.add('shell', 'note');
  li.dataset.id = note.id;
  li.innerHTML = noteItem;

  return li;
};

export const renderNotes = (archived) => {
  const titles = `
    <div class='headers'>
      <p class='width-name'>Name</p>
      ${headers.map((value) => `<p class='width-item'>${value}</p>`).join('')}
    </div>
    <div class="icon-btns">
      <span class="material-icons md-36">${
        archived ? 'unarchive' : 'archive'
      }</span>
      <span class="material-icons md-36">delete</span>
    </div>
  `;

  archived ? ($archiveBar.innerHTML = titles) : ($activeBar.innerHTML = titles);
  base.notes
    .filter((note) => note.archived === !!archived)
    .forEach((note) =>
      archived
        ? $archiveNotes.append(createNoteEl(note))
        : $activeNotes.append(createNoteEl(note))
    );
};
