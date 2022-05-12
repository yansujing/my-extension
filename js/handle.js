// 自动注入到打开的网页中
document.addEventListener("DOMContentLoaded", () => {
  if (location.href === 'https://www.baidu.com/') {
    let kw = document.querySelector('#kw');
    kw.value = "自动搜索";
    var su = document.querySelector('#su');
    su.click();
  }
  // 网页能够调用插件的代码
  // console.log('handle页面')
  // jsPath = 'js/inject.js';
  // var temp = document.createElement('script');
  // temp.setAttribute('type', 'text/javascript');
  // // 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
  // temp.src = chrome.extension.getURL(jsPath);
  // // temp.onload = function () {
  // //   // 放在页面不好看，执行完后移除掉
  // //   this.parentNode.removeChild(this);
  // // };
  // document.head.appendChild(temp);
})