var _browser = chrome;

// New Tab
function openNewTab (url) {
  _browser.tabs.create({
    url: url
  });
}


// Context Menu
_browser.contextMenus.create({
  title: 'To Fastdic',
  contexts: ["selection"]
});


// To Fastdic
_browser.contextMenus.onClicked.addListener(function(info, tab) {
  var url = 'https://fastdic.com/word/' + info.selectionText;
  openNewTab(url);
});


// Toolbar Button
_browser.browserAction.onClicked.addListener(function () {
  openNewTab('https://fastdic.com');
});
