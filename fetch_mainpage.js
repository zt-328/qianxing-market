(function() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/', false);
  xhr.send();
  return JSON.stringify({
    status: xhr.status,
    headers: xhr.getAllResponseHeaders()
  });
})()