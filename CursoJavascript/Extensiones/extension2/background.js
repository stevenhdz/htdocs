// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onInstalled

chrome.runtime.onInstalled.addListener(() => {
  try {
    const apiUrl = "https://api.example.com/blocklist";

    const fetchAndUpdateRules = () => {
      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            errorHandler("Network response was not ok");
          }
          return response.json();
        })
        .then((rules) => {
          chrome.declarativeNetRequest.updateDynamicRules({
            addRules: rules,
            removeRuleIds: [],
          });
        })
        .catch((error) => error);
    };

    fetchAndUpdateRules();

    setInterval(fetchAndUpdateRules, 5000);
  } catch (error) {
    errorHandler(error);
  }
});

function errorHandler(error) {
  throw new Error(error);
}
