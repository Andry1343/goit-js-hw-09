!function(){var t={startButton:document.querySelector("[data-start]"),stopButton:document.querySelector("[data-stop]"),body:document.querySelector("body")};t.stopButton.disabled=!0;var o=null;t.startButton.addEventListener("click",(function(){o=setInterval((function(){var o="#".concat(Math.floor(16777215*Math.random()).toString(16));t.body.style.backgroundColor=o}),1e3),t.startButton.disabled=!0,t.stopButton.disabled=!1})),t.stopButton.addEventListener("click",(function(){clearInterval(o),t.startButton.disabled=!1,t.stopButton.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.67fe01c4.js.map