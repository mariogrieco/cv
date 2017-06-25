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
    		var menu_mobile = $('.movile__menu');

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
                textos.css("color", "#666");
            }
            scroll = true;
        }

    } else {
        if (scroll) {
            var item = $(".header__fixed");
    		var textos = $(".ite");
    		var menu_mobile = $('.movile__menu');
    		
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
