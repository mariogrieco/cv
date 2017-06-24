"use strict";

function loadingAnim() {
    var a = document.getElementsByClassName("loading");
    [].forEach.call(a, function(c, a) {
        var b = c.textContent;
        c.textContent = "";
        var d = parseInt(b),
            e = 0,
            f = setInterval(function() { e + 2 < d ? (e += 2, c.style.width = e + "%") : (c.textContent = b, document.getElementsByClassName("text")[a].style.color = "#FFF", clearInterval(f)) }, 20 + parseInt(10 * Math.random())) }) }
loadingAnim();
