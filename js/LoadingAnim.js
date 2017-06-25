"use strict";

// function loadingAnim() {
//     var a = document.getElementsByClassName("loading");
//     [].forEach.call(a, function(c, a) {
//         var b = c.textContent;
//         c.textContent = "";
//         var d = parseInt(b),
//             e = 0,
//             f = setInterval(function() { 
//             	if (e + 2 < d  ) {
//             		e += 2;
//             		c.style.width = e + "%";
//             	else {
//            	 	  c.textContent = b;
//            	 	  clearInterval(f);
//             	}

//             }, 20 + parseInt(10 * Math.random())})
//      }

// loadingAnim();
"use strict";

function anim(object){

		var text = object.textContent;
        object.textContent = "";
        var porcentTo     = parseInt(text);
        var porcentFrom   = 0;
        
        var interval      = setInterval(function() { 
          	
          	  	if ( porcentFrom + 2 < porcentTo  ) {
            		porcentFrom += 2;
            		object.style.width = porcentFrom + "%";
            	}
            	else {
           	 	  object.textContent = text;
           	 	  clearInterval(interval);
            	}

            }, 20 + parseInt(10 * Math.random()));

}


$('.skils_type').on('scrollSpy:enter', function() {
	console.log('enter:', this.children[1]);
	anim(this.children[1])
});

$('.skils_type').scrollSpy();



// anim(a[0]);