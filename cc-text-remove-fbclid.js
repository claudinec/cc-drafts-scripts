// Remove Facebook tracking from URL.
const regex = /(http.*)(\?|\&)fbclid=.*$/;
var textOld = draft.content;
var textNew = textOld.replace(regex, "$1");
draft.content = textNew;
