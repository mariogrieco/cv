var nav = document.getElementById("menu");
var btn = document.getElementById("menu-btn");
	
btn.status = false;

btn.addEventListener("click",function(){

		if (!btn.status) {
			nav.style.paddingBottom = "0.5em";
			nav.style.height = "150px";
			
		}else{
			nav.style.paddingBottom = "0em";
			nav.style.height = "0px";
		}

		btn.status = !btn.status;
});