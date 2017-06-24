"use strict";
var wordAnime = function() {
    var a = document.getElementsByClassName("animbox_text")[0],
        b = document.getElementsByClassName("animbox_blink")[0],
        c = ["...Arquitecto ...Front-End", "...Desarrollador ...JavaScript", "Groot"],
        d = -1,
        e = function(e) {
            var f = c[d].length,
                g = c[d],
                h = 0,
                i = "";
            b.textContent = "|";
            var j = setInterval(function() { i += g[h].replace(".", ""), h + 1 < f ? (a.textContent = i, h++) : (b.textContent = "", a.textContent = i + ".", setTimeout(e, 2200), clearInterval(j)) }, 80) };
    return { anim: function f() { d + 1 >= c.length ? d = 0 : d++;
            var g = a.textContent,
                h = g.length - 1;
            b.textContent = "|";
            var i = setInterval(function() { a.textContent = g.slice(0, h), 1 < h ? h -= 1 : (clearInterval(i), e(f)) }, 60) } } }();

wordAnime.anim();