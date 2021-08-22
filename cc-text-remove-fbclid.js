// Remove Facebook tracking from URL.
const regex = /\?fbclid.*/ ;
var textOld = draft.content;
var textNew = textOld.replace(regex, '');
draft.content = textNew;
