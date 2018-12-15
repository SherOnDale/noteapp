const notes = [
  {
    Title: 'my Next Trip',
    Body: 'I would like to go to Spain'
  },
  {
    Title: 'Habits to work on',
    Body: 'Exercise. Eating Better'
  },
  {
    Title: 'Office Modifications',
    Body: 'Get a new seat'
  }
];

const filters = {
  searchText: ''
};

const renderNotes = function(notes, filters) {
  const filteredNotes = notes.filter(function(note) {
    return note.Title.toLowerCase().includes(filters.searchText.toLowerCase());
  });
  document.querySelector('#notes').innerHTML = '';
  filteredNotes.forEach(function(note) {
    const noteEl = document.createElement('p');
    noteEl.textContent = note.Title;
    document.querySelector('#notes').appendChild(noteEl);
  });
};
document.querySelector('#filter-by').addEventListener('change', function(e) {});
renderNotes(notes, filters);
document.querySelector('#create-note').addEventListener('click', function(e) {
  notes.push({ Title: filters.searchText, Body: filters.searchText });
  renderNotes(notes, '');
});

document.querySelector('#search-text').addEventListener('input', function(e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});
