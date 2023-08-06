import { base, $archiveBtn } from './index.js';

export const removeNote = (e) => {
  const deleteBtn = e.target;
  if (deleteBtn.innerText === 'delete') {
    base.removeNote(deleteBtn);
    base.hideBtn();
  }
};

export const removeActiveNotes = (e) => {
  const deleteActiveBtn = e.target;
  if (deleteActiveBtn.innerText === 'delete') {
    base.removeNotes();
    base.hideBar();
  }
};

export const removeArchiveNotes = (e) => {
  const deleteArchivedBtn = e.target;
  if (deleteArchivedBtn.innerText === 'delete') {
    base.removeNotes(true);
    base.hideBar(true);
    $archiveBtn.classList.add('hidden');
  }
};
