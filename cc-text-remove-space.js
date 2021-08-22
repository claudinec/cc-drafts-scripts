// Remove internal spaces from text.
const regex = /\s/g ;
var textOld = draft.content;
var textNew = textOld.replace(regex, '');
draft.append(textNew);
