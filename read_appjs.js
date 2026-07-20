(function() {
  var scripts = document.getElementsByTagName('script');
  var result = [];
  for (var i = 0; i < scripts.length; i++) {
    var s = scripts[i];
    if (s.src) {
      result.push({src: s.src, inline: false});
    } else {
      result.push({src: '(inline)', inline: true, length: s.textContent.length, preview: s.textContent.substring(0,200)});
    }
  }
  return JSON.stringify(result);
})()