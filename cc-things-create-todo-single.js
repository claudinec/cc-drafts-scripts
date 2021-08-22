// Create a single todo item in Things.
// Uses draft title, body, tags.

require('cc-things-functions.js');

var todo = TJSTodo.create();
todo.title = draft.title;    // string
todo.notes = draft.content;  // string
todo.tags = draft.tags;     // array of strings
thingsContainer([todo]);
