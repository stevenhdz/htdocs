chrome.browserAction.onClicked.addListener(function (tabs) {
  chrome.tabs.executeScript(null, { file: "checked.js" });
});