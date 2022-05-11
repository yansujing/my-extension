// 打开后台页面
document.getElementById('openBackPage').onclick = function () {
  window.open(chrome.extension.getURL('back.html'));
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