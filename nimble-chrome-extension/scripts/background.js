chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["scripts/jquery.js", "scripts/content.js"],
  });
});
