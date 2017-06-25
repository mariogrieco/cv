var timeCounter = 0;

function anim(object){
		timeCounter+= 40;
		var text = object.textContent;
        object.textContent = "";
        var porcentTo     = parseInt(text);
        var porcentFrom   = 0;
        
        setTimeout(function(){
        	    var interval      = setInterval(function() { 
          	
          	  	if ( porcentFrom + 2 < porcentTo  ) {
            		porcentFrom += 2;
            		object.style.width = porcentFrom + "%";
            	}
            	else {
           	 	  object.textContent = text;
           	 	  clearInterval(interval);
           	 	  timeCounter-=40;
            	}

            }, 20 + parseInt(10 * Math.random()));
        },timeCounter);
}


$('.skils_type').on('scrollSpy:enter', function() {
	if (!this.done) {
		this.done = true;
		anim(this.children[1])
	}else{
		
	}
});

$('.skils_type').scrollSpy();