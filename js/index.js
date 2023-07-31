const notesEl = document.querySelector('.notes');

const months = [
  'Jan',
  'Feb',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Nov',
  'Dec',
];
const date = new Date();

const base = {
  // months: [
  //   'Jan',
  //   'Feb',
  //   'March',
  //   'April',
  //   'May',
  //   'June',
  //   'July',
  //   'Aug',
  //   'Sep',
  //   'Nov',
  //   'Dec',
  // ],
  notes: [
    {
      id: 'note1',
      name: 'Shopping List',
      date: 'Sep 20, 2022',
      category: 'Task',
      content: 'Tomatoes, bread',
      dates: { prev: 'Sep 20, 2022', next: 'Sep 20, 2022' },
      archived: false,
    },
    {
      id: 'note2',
      name: 'The theory of evolution',
      date: 'Sep 21, 2022',
      category: 'Random Thought',
      content: 'The evoluton has a lot of theories',
      dates: { prev: 'Sep 20, 2022', next: 'April 20, 2021' },
      archived: false,
    },
    {
      id: 'note3',
      name: 'New Feature',
      date: 'Sep 22, 2022',
      category: 'Idea',
      content: 'Implement new feature',
      dates: { prev: 'April 20, 2021', next: 'Sep 22, 2022' },
      archived: false,
    },
    {
      id: 'note4',
      name: 'William Gaddis',
      date: 'Sep 23, 2022',
      category: 'Quote',
      content: `Power doesn't connection to..`,
      dates: { prev: 'April 20, 2021', next: 'April 20, 2021' },
      archived: false,
    },
    {
      id: 'note5',
      name: 'Books',
      date: 'Sep 23, 2022',
      category: 'Task',
      content: 'The Lean Startup',
      dates: { prev: 'April 20, 2021', next: 'Sep 20, 2022' },
      archived: false,
    },
    {
      id: 'note6',
      name: 'William ',
      date: 'Sep 18, 2022',
      category: 'Quote',
      content: 'Bread, milk',
      dates: { prev: 'April 20, 2021', next: 'Sep 20, 2022' },
      archived: true,
    },
    {
      id: 'note6',
      name: 'Old Shopping List',
      date: 'Sep 19, 2022',
      category: 'Task',
      content: 'Bread, milk, meat',
      dates: { prev: 'April 20, 2021', next: 'April 20, 2021' },
      archived: true,
    },
  ],
  addNote(name, category, content) {
    const note = {
      id: `note${base.notes.length + 1}`,
      name,
      date: `${
        months[date.getMonth()]
      } ${date.getDate()}, ${date.getFullYear()}`,
      category,
      content,
      dates: { prev: date, next: date },
      archived: false,
    };

    this.notes.push(note);

    console.log(this.notes);
  },
};

base.addNote('New Shopping List', 'Task', 'Bread, meat');
