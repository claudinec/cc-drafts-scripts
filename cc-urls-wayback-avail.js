// Check availability of URL in Wayback Machine.
// https://archive.org/help/wayback_api.php

const availQuery = 'https://archive.org/wayback/available?url=';
var availUrl = availQuery + draft.content;

var http = HTTP.create();

var response = http.request({
  "url": availUrl,
  "method": "GET"
});

if (response.success) {
  var data = response.responseData;
  if (data.archived_snapshots.closest) {
    app.openURL(data.archived_snapshots.closest.url, useSafari=false);
  }
  else {
    alert('No snapshot available');
  }
}
else {
  alert(response.statusCode + response.error);
}