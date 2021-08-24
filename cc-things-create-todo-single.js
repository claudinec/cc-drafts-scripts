/**
 * @file Drafts script to create a single todo item in Things, using the draft's title, body, and tags. The tags must already be known to Things.
 * @author Claudine Chionh <info@claudinec.net>
 * @version 0.1.0
 */

require('cc-things-functions.js')

const emptyLine = /^$/
const lines = draft.content.split('\n')
lines.shift()
if (lines[0].match(emptyLine)) {
  lines.shift()
}
const body = lines.join('\n')

const todo = TJSTodo.create()
todo.title = draft.title
todo.notes = body
for (var tagNum in draft.tags) {
  todo.addTag(draft.tags[tagNum])
}
const message = thingsContainer([todo])
alert(message)
