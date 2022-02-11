var _browser = chrome;

// New tab
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

_browser.contextMenus.onClicked.addListener(function(info, tab) {
  var url = 'https://fastdic.com/word/' + info.selectionText;
  openNewTab(url);
});



// Toolbar button
_browser.browserAction.onClicked.addListener(function () {
  openNewTab('https://fastdic.com');
});