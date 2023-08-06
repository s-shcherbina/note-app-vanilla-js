import { notes, months, categoryIcon, createdAt } from './moks.js';
import { statistics, renderSummary } from './statistics.js';
import { renderNotes, createNoteEl, createNote } from './add-notes.js';
import {
  archivedNote,
  unArchivedNote,
  archivedNotes,
  unArchivedNotes,
  toggleArchiveVisible,
} from './archive-notes.js';
import {
  removeNote,
  removeActiveNotes,
  removeArchiveNotes,
} from './remove-notes.js';
import { editData } from './edit-notes.js';
import { $modalEl, closeModal } from './modal.js';

export const $activeNotes = document.querySelector('.notes'),
  $activeBar = document.querySelector('.top-bar'),
  $archiveBar = document.querySelector('#archive-bar'),
  $archiveNotes = document.querySelector('#archive-notes'),
  $archiveBtn = document.querySelector('#archive-btn'),
  $createBtn = document.querySelector('#create-btn');

export const base = {
  notes,
  findNote(id) {
    return this.notes.find((note) => note.id === id);
  },
  tempVars: { id: '', date: '' },
  addNote(name, category, content) {
    const note = {
      id: Date.now().toString(),
      name,
      date: `${
        months[createdAt.getMonth()]
      } ${createdAt.getDate()}, ${createdAt.getFullYear()}`,
      category,
      content,
      dates: '',
      archived: false,
    };

    this.notes.push(note);

    $activeNotes.append(createNoteEl(note));
    this.showBar();
    statistics();
  },

  hideBar(archived) {
    const elem = archived ? $archiveBar : $activeBar;
    if (
      !this.notes.filter((note) => note.archived === !!archived).length &&
      !elem.classList.contains('hidden')
    )
      elem.classList.add('hidden');
  },

  showBar(archived) {
    const elem = archived ? $archiveBar : $activeBar;
    if (
      this.notes.filter((note) => note.archived === !!archived).length &&
      elem.classList.contains('hidden')
    )
      elem.classList.remove('hidden');
  },

  hideBtn() {
    if (
      !this.notes.filter((note) => note.archived === true).length &&
      !$archiveBtn.classList.contains('hidden')
    )
      $archiveBtn.classList.add('hidden');
  },

  showBtn() {
    if (
      this.notes.filter((note) => note.archived === true).length &&
      $archiveBtn.classList.contains('hidden')
    )
      $archiveBtn.classList.remove('hidden');
  },

  toggleArchiveNote(btn, elem) {
    const noteEl = btn.closest('.note');
    const note = this.findNote(noteEl.dataset.id);
    note.archived = !note.archived;
    elem.append(noteEl);

    statistics();
  },

  removeNote(btn) {
    const noteEl = btn.closest('.note');
    noteEl.remove();

    this.notes = this.notes.filter((note) => note.id !== noteEl.dataset.id);

    this.hideBar(true);
    this.hideBar(false);

    statistics();
  },

  toggleArchivedNotes(archived) {
    [...(archived ? $activeNotes : $archiveNotes).children].forEach((node) => {
      node.lastElementChild.children[1].innerText = archived
        ? 'unarchive'
        : 'archive';
      (archived ? $archiveNotes : $activeNotes).append(node);
    });

    this.notes
      .filter((note) => note.archived !== archived)
      .map((note) => (note.archived = !!archived));

    statistics();
  },

  removeNotes(archived) {
    [...(archived ? $archiveNotes : $activeNotes).children].forEach((node) =>
      node.remove()
    );

    this.notes = this.notes.filter((note) => note.archived !== !!archived);

    statistics();
  },

  editNote(id, date, name, category, content) {
    const note = this.findNote(id);

    note.name = name;
    note.category = category;
    note.content = content;
    note.date = `${
      months[createdAt.getMonth()]
    } ${createdAt.getDate()}, ${createdAt.getFullYear()}`;

    note.dates = `${date.slice(date.indexOf(' '), date.indexOf(','))}/${
      months.indexOf(date.slice(0, date.indexOf(' '))) + 1
    }/${date.slice(date.indexOf(',') + 2)}, ${createdAt.getDate()}/${
      createdAt.getMonth() + 1
    }/${createdAt.getFullYear()}`;

    const noteData = Object.values(note).slice(1, -1);

    const $noteLi = document.querySelector(`.note[data-id="${id}"]`);
    $noteLi.querySelector('.material-icons').innerText = categoryIcon(
      note.category
    );

    $noteLi
      .querySelectorAll('.crop')
      .forEach((elem, indx) => (elem.innerText = noteData[indx]));
  },
};

renderNotes();
renderSummary();
renderNotes(true);
statistics();

$activeNotes.addEventListener('click', archivedNote);
$archiveNotes.addEventListener('click', unArchivedNote);
$activeNotes.addEventListener('click', removeNote);
$archiveNotes.addEventListener('click', removeNote);
$activeNotes.addEventListener('click', editData);
$archiveNotes.addEventListener('click', editData);
$activeBar.addEventListener('click', archivedNotes);
$archiveBar.addEventListener('click', unArchivedNotes);
$activeBar.addEventListener('click', removeActiveNotes);
$archiveBar.addEventListener('click', removeArchiveNotes);
$archiveBtn.addEventListener('click', toggleArchiveVisible);
$createBtn.addEventListener('click', createNote);
$modalEl.addEventListener('click', closeModal);
