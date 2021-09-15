// Remove blank lines from text.
const regex = /\n\n/g
const textOld = draft.content
const textNew = textOld.replaceAll(regex, '\n')
draft.content = textNew

