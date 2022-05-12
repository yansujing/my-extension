// 打开后台页面
document.getElementById('openBackPage').onclick = function () {
  window.open(chrome.extension.getURL('background.html'));
}

// 获取后台页标题
document.getElementById('getBackTitle').onclick = function () {
  let page = chrome.extension.getBackgroundPage();
  alert(page.document.title);
}

// 修改后台页标题
document.getElementById('setBackTitle').onclick = function () {
  let getTitle = prompt('请修改后台页标题');
  let page = chrome.extension.getBackgroundPage();
  page.document.title = getTitle;
  alert(getTitle);
}

// 调用后台页js
document.getElementById('callBackJS').onclick = function () {
  let page = chrome.extension.getBackgroundPage();
  page.callBackJS('调到后台的js了，并传参了。。。')
}

// 获取跨域的网页标题
document.getElementById('otherPageInfo').onclick = function () {
  let page = chrome.extension.getBackgroundPage();
  page.getOtherTitle()
}

document.getElementById('baiduSearch').onclick = function () {
  chrome.tabs.getSelected(null, function (tab) {
    document.querySelector
    chrome.tabs.executeScript(null, { code: "var kw=document.querySelector('#kw');kw.value='北辰';var button=document.querySelector('#su');button.click()" })
  })
}

// 设置插件标记
document.getElementById('setBadge').onclick = function () {
  chrome.browserAction.setBadgeText({ text: '标记' })
  chrome.browserAction.setBadgeBackgroundColor({ color: [0, 255, 0, 50] })
}

// 取消插件标记
document.getElementById('cancelBadge').onclick = function () {
  chrome.browserAction.setBadgeText({ text: '' })
  chrome.browserAction.setBadgeBackgroundColor({ 'color': [0, 0, 0, 0] })
}

// 桌面底部弹出插件消息
document.getElementById('notify').onclick = function () {
  chrome.notifications.create(null, {
    type: "image",
    iconUrl: 'img/cat2.png',
    title: "插件标题",
    message: '插件内容',
    imageUrl: 'img/cat.png'
  })
}

// 动态注入到网页的css
document.getElementById('dynamicEnterCss').onclick = function () {
  executeScriptToCurrentTab('document.body.style.background="yellow"')
}

function getCurrentTabId (callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (callback) callback(tabs.length ? tabs[0].id : null)
  })
}

function executeScriptToCurrentTab (scriptcode) {
  getCurrentTabId(tabId => {
    chrome.tabs.executeScript(tabId, { code: scriptcode })
  })
}