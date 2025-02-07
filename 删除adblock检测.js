// ==UserScript==
// @name         删除adblock检测
// @namespace    http://tampermonkey.net/
// @version      2025-02-07
// @description  try to take over the world!
// @author       You
// @match        *://sexkbj.top/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=sexkbj.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //删除adblock检测
    function removeElementByXPath(xpath) {
        const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        const node = result.singleNodeValue;
        if (node) {
            node.remove();
        }
    }
    removeElementByXPath('//*[@id="adbd"]');
    removeElementByXPath('/html/body/div[2]');

    // 等待页面完全加载后执行
    window.addEventListener('load', () => removeElementByXPath('//*[@id="adbd"]'));
    window.addEventListener('load', () => removeElementByXPath('/html/body/div[2]'));
})();
