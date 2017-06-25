var timeCounter = 0;

function anim(object){
    var text = object.textContent;
        object.textContent = "";
        var porcentTo     = parseInt(text);
        var porcentFrom   = 0;
        
        var timeO = setTimeout(function(){
              var interval  = setInterval(function() { 
            
              if ( porcentFrom < porcentTo  ) {
                porcentFrom += 2;
                object.style.width = porcentFrom + "%";
              }else {
                object.textContent = text;
                clearInterval(interval);
                clearTimeout(timeO);
                timeCounter-=30;
              }

            }, 20 + parseInt(10 * Math.random()));
        }, timeCounter);
		
    timeCounter+= 30;
}

[].forEach.call($('.skils_type'),function(a){
	a.done = false;
});

$('.skils_type').on('scrollSpy:enter', function() {
	if (!this.done) {
		this.done = true;
		anim(this.children[1])
	}else{
	}
});

$('.skils_type').scrollSpy();