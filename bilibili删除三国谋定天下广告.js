// ==UserScript==
// @name         去除狗屎三国谋定天下广告
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove ads with the specific class and data attribute
// @author       ChatGPT
// @match        *://*.bilibili.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 定义一个函数来删除目标元素
    function removeAdElements() {
        // 查找所有符合条件的 div 元素
        const adElements = document.querySelectorAll('div[data-v-c6402956].btn-ad');

        // 遍历并删除这些元素
        adElements.forEach(function(ad) {
            ad.remove();
        });
    }

    // 立即执行删除操作
    removeAdElements();

    // 在页面内容加载后，也执行删除操作，防止动态加载的广告
    window.addEventListener('load', removeAdElements);

    // 可选：如果页面有动态更新内容，可以使用 MutationObserver 来监听 DOM 变化
    const observer = new MutationObserver(removeAdElements);
    observer.observe(document.body, { childList: true, subtree: true });
})();
