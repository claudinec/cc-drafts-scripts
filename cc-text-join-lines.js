// Join all lines, separated by spaces.
const regex = /\n/g
const textOld = draft.content
const textNew = textOld.replaceAll(regex, " ")
draft.content = textNew

