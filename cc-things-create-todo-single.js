// Create a single todo item in Things.
// Uses draft title, body, tags.
// Tags must already be known to Things.

require('cc-things-functions.js');

const emptyLine = /^$/ ;
var lines = draft.content.split('\n');
lines.shift();
if (lines[0].match(emptyLine)) {
  lines.shift();
}
var body = lines.join('\n');

var todo = TJSTodo.create();
todo.title = draft.title;
todo.notes = body;
for (n in draft.tags) {
  todo.addTag(draft.tags[n]);
}
message = thingsContainer([todo]);
alert(message);
