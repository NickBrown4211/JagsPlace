// ==UserScript==
// @name         Jacksonville Jaguars Place
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Jags
// @author       Purpose
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @updateURL    https://github.com/NickBrown4211/JagsPlace/raw/main/jags_place_overlay.user.js
// @downloadURL  https://github.com/NickBrown4211/JagsPlace/raw/main/jags_place_overlay.user.js
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://github.com/Nickbrown4211/JagsPlace/raw/main/new_overlay16.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 1000px;";
            console.log(i);
            return i;
        })())

    }, false);

}
