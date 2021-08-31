// Remove Google tracking from URL.
const regex = /(http.*)(\?|\&)(utm_[a-z]+=.*)/g
const textOld = draft.content
const textNew = textOld.replace(regex, "$1")
draft.content = textNew
