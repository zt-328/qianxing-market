(function() {
  // Get resource timing entries to determine server info
  var resources = performance.getEntriesByType('resource');
  var result = resources.map(function(r) {
    return {
      name: r.name,
      type: r.initiatorType,
      transferSize: r.transferSize,
      duration: r.duration,
      nextHopProtocol: r.nextHopProtocol
    };
  });

  // Also get navigation entry
  var nav = performance.getEntriesByType('navigation')[0];
  var navResult = nav ? {
    name: nav.name,
    type: nav.type,
    transferSize: nav.transferSize,
    nextHopProtocol: nav.nextHopProtocol,
    serverTiming: nav.serverTiming
  } : null;

  // Try to read response headers via performance observer
  return JSON.stringify({
    nav: navResult,
    resources: result.slice(0, 5)
  });
})()