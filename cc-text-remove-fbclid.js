// Remove Facebook tracking from URL.
const regex = /(http.*)(\?|\&)fbclid=.*$/
const textOld = draft.content
const textNew = textOld.replace(regex, "$1")
draft.content = textNew
