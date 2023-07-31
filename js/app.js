// const notesEl = document.querySelector('.notes');
// const addBtn = document.querySelector('.note-add');

const createNote = (title, text) => {
  const noteEl = document.createElement('div');
  noteEl.classList.add('note');
  noteEl.innerHTML = `
    <div class="note-header">
      <p id="note-title">${title}</p>
      <textarea id="note-title-input" class="hidden">${title}</textarea>
      <div>
        <button class="note-edit"><span class="material-icons md-dark">edit</span></i></button>
        <button class="note-archived"><span class="material-icons md-dark">archive</span></button>
        <button class="note-delete"><span class="material-icons md-dark">delete</span></button>
      </div>
    </div>
    <p id="note-text">${text}</p>
    <textarea id="note-textarea" class="hidden">${text}</textarea>
    `;

  const editBtn = noteEl.querySelector('.note-edit');
  const deleteBtn = noteEl.querySelector('.note-delete');
  // const titleEl = noteEl.querySelector('#note-title');
  // const textEl = noteEl.querySelector('#note-text');
  // const titleInputEl = noteEl.querySelector('#note-title-input');
  // const textInputEl = noteEl.querySelector('#note-textarea');
  // const titleEl = noteEl.querySelector('#note-title');
  // const textEl = noteEl.querySelector('#note-text');
  // const titleInputEl = noteEl.querySelector('#note-title-input');
  // const textInputEl = noteEl.querySelector('#note-textarea');

  editBtn.addEventListener('click', (e) => {
    titleEl.classList.toggle('hidden');
    textEl.classList.toggle('hidden');

    titleInputEl.classList.toggle('hidden');
    textInputEl.classList.toggle('hidden');
  });

  deleteBtn.addEventListener('click', (e) => {
    noteEl.remove();
  });
  return noteEl;
};

addBtn.addEventListener('click', (e) => {
  const el = createNote('Заголовок', 'Ваш текст');
  notesEl.appendChild(el);
});
