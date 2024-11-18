// ==UserScript==
// @name         去除狗屎三国谋定天下广告
// @namespace    bilibili.com Remove ads
// @version      1.0
// @description  Remove ads with the specific class and data attribute
// @author       ChatGPT
// @match        *://*.bilibili.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 等待页面加载完成
    window.addEventListener('load', function() {
        // 通过 class 或 data 属性选择要去掉的 div 元素
        let adDiv = document.querySelector('div.adcard-content[data-v-c6402956]');

        // 如果找到这个 div，删除它
        if (adDiv) {
            adDiv.remove();
        }
    });
})();