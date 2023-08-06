import { $activeNotes, $archiveNotes, base } from './index.js';

const $archive = document.querySelector('#archive');

export const archivedNote = (e) => {
  const archiveBtn = e.target;
  if (archiveBtn.textContent === 'archive') {
    archiveBtn.innerText = 'unarchive';

    base.toggleArchiveNote(archiveBtn, $archiveNotes);
    base.hideBar(false);
    base.showBar(true);
    base.showBtn();
  }
};

export const unArchivedNote = (e) => {
  const unArchiveBtn = e.target;
  if (unArchiveBtn.innerText === 'unarchive') {
    unArchiveBtn.innerText = 'archive';

    base.toggleArchiveNote(unArchiveBtn, $activeNotes);
    base.hideBar(true);
    base.showBar();
    base.hideBtn();
  }
};

export const archivedNotes = (e) => {
  const archiveBtn = e.target;
  if (archiveBtn.innerText === 'archive') {
    base.toggleArchivedNotes(true);
    base.hideBar();
    base.showBar(true);
    base.showBtn();
  }
};

export const unArchivedNotes = (e) => {
  const unArchiveBtn = e.target;
  if (unArchiveBtn.innerText === 'unarchive') {
    base.toggleArchivedNotes();
    base.hideBar(true);
    base.showBar();
    base.hideBtn();
  }
};

export const toggleArchiveVisible = (e) => {
  e.target.innerText =
    e.target.innerText === 'Show Archive' ? 'Hide Archive' : 'Show Archive';
  $archive.classList.toggle('hidden');
};

// $activeNotes.addEventListener('click', archivedNote);
// $archiveNotes.addEventListener('click', unArchivedNote);
// $activeBar.addEventListener('click', archivedNotes);
// $archiveBar.addEventListener('click', unArchivedNotes);
// $archiveBtn.addEventListener('click', toggleArchiveVisible);
