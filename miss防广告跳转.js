// ==UserScript==
// @name         missav防广告跳转助手
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  修改页面中的指定div元素
// @author       你
// @match        *://misav.ws/*
// @icon https://www.google.com/s2/favicons?sz=64&domain=missav.ws
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 获取所有 div 元素
    const divs = document.querySelectorAll('div');

    // 遍历每个 div
    divs.forEach(div => {
        // 如果 div 中包含 @click 和 @keyup.space.window 属性
        if (div.hasAttribute('@click') && div.hasAttribute('@keyup.space.window')) {
            // 移除这两个属性
            div.removeAttribute('@click');
            div.removeAttribute('@keyup.space.window');
        }
    });
})();
