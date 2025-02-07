// ==UserScript==
// @name         Identify and Click Different Color
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  等待 #box 元素出现后操作
// @author       贝克林
// @match        *://*/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    // 定义循环执行的命令
    const intervalId = setInterval(() => {
        console.log("这是一个循环执行的命令");

        // 在每次执行命令时，检测页面是否有 #box 元素
        const container = document.querySelector('#box');
        if (container) {
            processSpans(container); // 如果找到了 #box，执行脚本的核心逻辑
        }
    }, 50); // 每隔 1 秒执行一次命令

    // 控制暂停的标志
    let isPaused = false;

    // 暂停循环
    function pauseInterval() {
        if (!isPaused) {
            clearInterval(intervalId); // 停止定时器
            console.log('循环已暂停');
            isPaused = true;
        }
    }

    // 恢复循环
    function resumeInterval() {
        if (isPaused) {
            intervalId = setInterval(() => {
                console.log("这是一个循环执行的命令");
                const container = document.querySelector('#box');
                if (container) {
                    processSpans(container);
                }
            }, 300); // 每隔 1 秒执行一次命令
            console.log('循环已恢复');
            isPaused = false;
        }
    }

    // 核心逻辑：处理 span 元素
    function processSpans(container) {
        const spans = container.querySelectorAll('span');
        const colors = Array.from(spans).map(span => ({
            element: span,
            color: getComputedStyle(span).backgroundColor
        }));

        const colorCounts = {};
        colors.forEach(({ color }) => {
            colorCounts[color] = (colorCounts[color] || 0) + 1;
        });

        const differentColor = Object.keys(colorCounts).find(color => colorCounts[color] === 1);

        if (differentColor) {
            console.log(`不同的颜色是: ${differentColor}`);
            const targetSpan = colors.find(({ color }) => color === differentColor).element;
            targetSpan.style.border = '2px solid red';
            targetSpan.click?.();
        } else {
            console.log('未找到不同的颜色或所有颜色均相同。');
        }
    }

    // 例子：5秒后暂停循环，10秒后恢复
    setTimeout(pauseInterval,600000); // 5秒后暂停
    setTimeout(resumeInterval, 10000); // 10秒后恢复
})();
