(async function() {
  var results = {};

  // Check main page headers
  try {
    var r1 = await fetch('/', {method: 'HEAD'});
    var h1 = {};
    r1.headers.forEach(function(v,k) {
      h1[k] = v;
    });
    results.mainPage = {
      status: r1.status,
      headers: h1
    };
  } catch(e) {
    results.mainPageError = e.message;
  }

  // Check app.js headers
  try {
    var r2 = await fetch('/js/app.js');
    var h2 = {};
    r2.headers.forEach(function(v,k) {
      h2[k] = v;
    });
    results.appJs = {
      status: r2.status,
      headers: h2
    };
  } catch(e) {
    results.appJsError = e.message;
  }

  // Check /api/config headers
  try {
    var r3 = await fetch('/api/config');
    var h3 = {};
    r3.headers.forEach(function(v,k) {
      h3[k] = v;
    });
    results.apiConfig = {
      status: r3.status,
      headers: h3
    };
  } catch(e) {
    results.apiConfigError = e.message;
  }

  return JSON.stringify(results);
})()