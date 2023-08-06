import { base } from './index.js';
import { categories } from './moks.js';
import { summary } from './moks.js';

const $summaryBar = document.querySelector('#summary-bar'),
  $summaryList = document.querySelector('#summary');

export const statistics = () => {
  if (base.notes.length && $summaryBar.classList.contains('hidden'))
    $summaryBar.classList.remove('hidden');

  categories.forEach((category) => {
    const categoryNotes = base.notes.filter(
      (note) => note.category === category
    );

    const $activeNumEl = document.querySelector(
      `#active${category.slice(0, 4)}`
    );
    const $categoryEl = $activeNumEl.closest('.note');

    if (categoryNotes.length) {
      if ($categoryEl.classList.contains('hidden'))
        $categoryEl.classList.remove('hidden');

      const activeNum = categoryNotes.filter(
        (note) => note.archived === false
      ).length;
      $activeNumEl.innerText = activeNum ? activeNum : '';

      const archiveNum = categoryNotes.filter(
        (note) => note.archived === true
      ).length;
      document.querySelector(`#archive${category.slice(0, 4)}`).innerText =
        archiveNum ? archiveNum : '';
    } else {
      $categoryEl.classList.add('hidden');
    }
  });
  if (!base.notes.length) $summaryBar.classList.add('hidden');
};

const createSummaryEl = (category, icon) => {
  const summaryItem = `
    <article class="note-data">
      <div class="img-wrapper">
        <div class="icon-wrapper">
          <span class="material-icons md-36">${icon}</span>
        </div>
      </div>
      <p class="width-category crop">${category}</p>
      <p class="width-name tone" id="active${category.slice(0, 4)}"></p>
      <p class="width-name tone" id="archive${category.slice(0, 4)}"></p>
    </article>
  `;

  const li = document.createElement('li');
  li.classList.add('shell', 'note');
  li.innerHTML = summaryItem;

  return li;
};

export const renderSummary = () => {
  summary.forEach((item) =>
    $summaryList.append(createSummaryEl(item.category, item.icon))
  );
};
