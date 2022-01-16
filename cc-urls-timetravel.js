/**
 * @file Drafts script that checks availability of the given URL in Memento Time Travel and opens the closest snapshot in Safari if found.
 * @author Claudine Chionh <info@claudinec.net>
 * @version 0.1.0
 */

const currentDate = new Date().getFullYear()
const timetravelQuery = "http://timetravel.mementoweb.org/api/json/" + currentDate + "/"

const selection = editor.getSelectedText()
if (selection == "") {
  var draftUrl = draft.content
} else {
  var draftUrl = selection
}

const timetravelUrl = timetravelQuery + draftUrl

const http = HTTP.create()

const response = http.request({
  "url": timetravelUrl,
  "method": "GET"
})

if (response.success) {
  const data = response.responseData
  if (data.mementos.closest) {
    app.openURL(data.mementos.closest.uri[0], useSafari = false)
  }
  else {
    alert("No mementos available")
  }
}
else {
  alert(response.statusCode + response.error)
}
