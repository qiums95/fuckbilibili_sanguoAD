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

    // 等待页面加载完毕
    window.addEventListener('load', function() {
        // 获取所有带有 data-v-c6402956 属性的 div 元素
        const divs = document.querySelectorAll('div[data-v-c6402956]');

        // 遍历并删除每个匹配的 div 元素
        divs.forEach(div => {
            div.remove();
        });
    }, false);
})();