var port;

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.captureVisibleTab(null,{format:"png",quality:100},function(img) {
    port.postMessage(img);
  });
});

chrome.extension.onConnect.addListener(function(portName) {
  port = portName;
  //console.assert(portName.name == "screenshot");
  port.onMessage.addListener(function(msg) {
    if (msg.request == "screenshot"){
    }
  });
});
