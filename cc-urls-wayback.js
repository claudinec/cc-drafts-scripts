/**
 * @file Drafts script that checks availability of the given URL in the Wayback Machine and opens the closest snapshot in Safari if found.
 * @author Claudine Chionh <info@claudinec.net>
 * @version 0.1.0
 */

const availQuery = 'https://archive.org/wayback/available?url='
const availUrl = availQuery + draft.content

const http = HTTP.create()

const response = http.request({
  'url': availUrl,
  'method': 'GET'
})

if (response.success) {
  const data = response.responseData
  if (data.archived_snapshots.closest) {
    app.openURL(data.archived_snapshots.closest.url, useSafari = false)
  }
  else {
    alert('No snapshot available')
  }
}
else {
  alert(response.statusCode + response.error)
}
