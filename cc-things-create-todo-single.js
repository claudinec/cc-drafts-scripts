// Create a single todo item in Things.
// Uses draft title, body, tags.
// Tags must already be known to Things.

require('cc-things-functions.js');

var todo = TJSTodo.create();
todo.title = draft.title;
todo.notes = draft.content;
for (n in draft.tags) {
    todo.addTag(draft.tags[n]);
}
message = thingsContainer([todo]);
alert(message);
