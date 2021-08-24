// Remove internal spaces from text.
const regex = /\s/g
const textOld = draft.content
const textNew = textOld.replace(regex, '')
draft.content = textNew

