(function() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/js/app.js', false);  // synchronous
  xhr.send();
  var headers = xhr.getAllResponseHeaders();
  var body = xhr.responseText;
  return JSON.stringify({
    status: xhr.status,
    headers: headers,
    bodyLen: body.length,
    bodyPreview: body.substring(0, 2000)
  });
})()