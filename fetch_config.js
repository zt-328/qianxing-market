(function() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/api/config', false);
  xhr.send();
  return JSON.stringify({
    status: xhr.status,
    headers: xhr.getAllResponseHeaders(),
    body: xhr.responseText.substring(0, 1000)
  });
})()