// function callBackJS (a) {
//   alert(a)
// }

// function getOtherTitle () {
//   chrome.tabs.getSelected(null, function (tab) {
//     var title = tab.title
//     alert(title)
//   })
// }


// 右键点击菜单配置 2.2
// 1.实现右键点击出现菜单（标题，事件）
// chrome.contextMenus.create({
//   title: '自动搜索北辰',
//   onclick: function () {
//     chrome.tabs.executeScript(null, { code: "let kw = document.querySelector('#kw');kw.value = '自动搜索';var su = document.querySelector('#su');su.click();" })
//   }
// })

// 2.配置右键展示的网页
// chrome.contextMenus.create({
//   title: '只在百度网展示',
//   onclick: function () {
//     chrome.tabs.executeScript(null, { code: "let kw = document.querySelector('#kw');kw.value = '自动搜索';var su = document.querySelector('#su');su.click();" })
//   },
//   documentUrlPatterns: ["https://*.baidu.com/*"]
// })

// 3.在百度网的某个区域展示
// chrome.contextMenus.create({
//   title: '只在百度网的编辑，选择控件上展示',
//   contexts: ['editable', 'selection'],//editable编辑控件，selection选择控件
//   onclick: function () {
//     chrome.tabs.executeScript(null, { code: "let kw = document.querySelector('#kw');kw.value = '自动搜索';var su = document.querySelector('#su');su.click();" })
//   },
//   documentUrlPatterns: ["https://*.baidu.com/*"]
// })

/**
 * 右击多级菜单
 * 相关配置
 *    type：radio/checkbox(radio，单选；checkbox:多选；)
 *    id搭配parentId一起使用，
 */

// chrome.contextMenus.create({
//   id: "1",
//   title: '一级菜单',
//   contexts: ['editable', 'selection'],//editable编辑控件，selection选择控件
//   onclick: function () {
//     chrome.tabs.executeScript(null, { code: "let kw = document.querySelector('#kw');kw.value = '自动搜索';var su = document.querySelector('#su');su.click();" })
//   },
//   documentUrlPatterns: ["https://*.baidu.com/*"]
// })

// chrome.contextMenus.create({
//   type: 'radio',
//   parentId: "1",
//   title: '二级菜单1',
//   contexts: ['editable', 'selection'],//editable编辑控件，selection选择控件
//   onclick: function () {
//     chrome.tabs.executeScript(null, { code: "let kw = document.querySelector('#kw');kw.value = '自动搜索';var su = document.querySelector('#su');su.click();" })
//   },
//   documentUrlPatterns: ["https://*.baidu.com/*"]
// })

// chrome.contextMenus.create({
//   type: 'radio',
//   parentId: "1",
//   title: '二级菜单2',
//   contexts: ['editable', 'selection'],//editable编辑控件，selection选择控件
//   onclick: function () {
//     chrome.tabs.executeScript(null, { code: "let kw = document.querySelector('#kw');kw.value = '自动搜索';var su = document.querySelector('#su');su.click();" })
//   },
//   documentUrlPatterns: ["https://*.baidu.com/*"]
// })

// 网址栏上实现百度传参搜索功能
// chrome.omnibox.onInputChanged.addListener((text, suggest) => {
//   if (!text) return;
//   if (text === '北辰') {
//     suggest([
//       { content: text + '视频', description: '你要找北辰视频？' },
//       { content: text + '网页', description: '你要找北辰网页？' },
//       { content: text + '人', description: '你要找北辰人？' },
//     ])
//   }
// })
chrome.omnibox.onInputChanged.addListener((text, suggest) => {
  // console.log('inputChanged: ' + text);
  if (!text) return;
  if (text == '美女') {
    suggest([
      { content: '中国' + text, description: '你要找“中国美女”吗？' },
      { content: '日本' + text, description: '你要找“日本美女”吗？' },
      { content: '泰国' + text, description: '你要找“泰国美女或人妖”吗？' },
      { content: '韩国' + text, description: '你要找“韩国美女”吗？' }
    ]);
  } 0
});

chrome.omnibox.onInputEntered.addListener((text) => {
  // console.log('onInputEntered', text)
  if (!text) return;
  var href = '';
  if (text.endsWith('美女')) href = 'http://image.baidu.com/search/index?tn=baiduimage&ie=utf-8&word=' + text;
  openUrlCurrentTab(href)
})


function getCurrentTabId (callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (callback) callback(tabs.length ? tabs[0].id : null);
  });
}


// 当前标签打开某个链接
function openUrlCurrentTab (url) {
  getCurrentTabId(tabId => {
    chrome.tabs.update(tabId, { url: url });
  })
}

// 控制插件在哪些网页激活
// chrome.runtime.onInstalled.addListener(function () {
//   chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
//     chrome.declarativeContent.onPageChanged.addRules([{
//       conditions: [new chrome.declarativeContent.PagestateMatcher({
//         pageUrl: { urlContains: 'baidu.com' }
//       })],
//       actions: [new chrom.declarativeContent.showPageAction()]
//     }])
//   })
// })

chrome.runtime.onInstalled.addListener(function () {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          // 只有打开百度才显示pageAction
          new chrome.declarativeContent.PageStateMatcher({ pageUrl: { urlContains: 'baidu.com' } })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
    ]);
  });
});