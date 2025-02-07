// ==UserScript==
// @name         biz播放广告删除助手
// @namespace    https://sexbjcam.com/
// @version      0.1
// @description  删除跳转元素
// @match        *://*.biz/*
// @grant        none
// @icon         https://www.google.com/s2/favicons?sz=64&domain=sexbjcam.com

// ==/UserScript==

(function() {
    'use strict';

    // biz删除广告函数
    function removeElementByXPath(xpath) {
        const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        const node = result.singleNodeValue;
        if (node) {
            node.remove();
        }
    }
    removeElementByXPath('/html/body/div[2]');
    // 等待页面完全加载后执行
    window.addEventListener('load', () => removeElementByXPath('/html/body/div[2]'));
})();
