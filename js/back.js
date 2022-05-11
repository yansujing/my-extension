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

chrome.contextMenus.create({
  id: "1",
  title: '一级菜单',
  contexts: ['editable', 'selection'],//editable编辑控件，selection选择控件
  onclick: function () {
    chrome.tabs.executeScript(null, { code: "let kw = document.querySelector('#kw');kw.value = '自动搜索';var su = document.querySelector('#su');su.click();" })
  },
  documentUrlPatterns: ["https://*.baidu.com/*"]
})

chrome.contextMenus.create({
  type: 'radio',
  parentId: "1",
  title: '二级菜单1',
  contexts: ['editable', 'selection'],//editable编辑控件，selection选择控件
  onclick: function () {
    chrome.tabs.executeScript(null, { code: "let kw = document.querySelector('#kw');kw.value = '自动搜索';var su = document.querySelector('#su');su.click();" })
  },
  documentUrlPatterns: ["https://*.baidu.com/*"]
})

chrome.contextMenus.create({
  type: 'radio',
  parentId: "1",
  title: '二级菜单2',
  contexts: ['editable', 'selection'],//editable编辑控件，selection选择控件
  onclick: function () {
    chrome.tabs.executeScript(null, { code: "let kw = document.querySelector('#kw');kw.value = '自动搜索';var su = document.querySelector('#su');su.click();" })
  },
  documentUrlPatterns: ["https://*.baidu.com/*"]
})