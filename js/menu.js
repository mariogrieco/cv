var nav = document.getElementById("menu");
var btn = document.getElementById("menu-btn");

btn.status = false;

btn.addEventListener("click", function() {

    if (!btn.status) {
        nav.style.paddingBottom = "0.5em";
        nav.style.height = "150px";

    } else {
        nav.style.paddingBottom = "0em";
        nav.style.height = "0px";
    }

    btn.status = !btn.status;
});

/*
	esto es lo otro. a lo es machetao.
*/

var scroll = false;

$(window).scroll(function() {
    var scrolled_val = $(document).scrollTop().valueOf();

    if (scrolled_val >= 40) {
        if (!scroll) {
            var item = $(".header__fixed");
    		var textos = $(".ite");
    		var menu_mobile = $('.mobile__menu');

            if (item) {
                item.css("position", "fixed");
                item.css("background-color", "#fff");
                item.css("border-bottom", "2px solid #fafafa");
            }
            if (menu_mobile) {
                menu_mobile.css("background-color", "#fff");
                menu_mobile.css("border-bottom", "5px solid #fafafa");
            }

            if (textos) {
                textos.css("color", "#434343");
            }
            scroll = true;
        }

    } else {
        if (scroll) {
            var item = $(".header__fixed");
    		var textos = $(".ite");
    		var menu_mobile = $('.mobile__menu');
    		
            if (item) {
                item.css("position", "absolute");
                item.css("background-color", "transparent");
                item.css("border-bottom", "1px solid rgba(188, 188, 188, 0.1)");
            }

            if (menu_mobile) {
                menu_mobile.css("background-color", "transparent");
                menu_mobile.css("border-bottom", "0px");
            }

            if (textos) {
                textos.css("color", "#fff");
            }
            scroll = false;
        }
    }
});


/* 
    el alto
*/

var item = document.getElementById("header");
var alto = item.offsetHeight || item.clientHeight || 0;
var defecto = 81;
var restante = 0;
var tipo =  document.documentElement.clientHeight || window.innerHeight || 0;
    

    console.log(item,alto)
    console.log("tipo",tipo);

    var mddle = (tipo-(150+81)-50)/2;
    console.log(mddle); 

    if ( mddle > 0 ) {

        item.style.padding = (mddle+81)+"px 0px "+ mddle+"px 0px";
    }
