window.onload=function(){
	console.log('Hello,Friend !');
	$('links').onmouseover = mouseOver;
	$('links').onmouseout = mouseOut;

	/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js','js/particles.json', function() {
    	//console.log('加载particles.js');
    });
}

function $(id){
	return document.getElementById(id);
}

function mouseOver(){
	$('github').style.visibility = 'visible';
	$('zhihu').style.visibility = 'visible';
}

function mouseOut(){
	$('github').style.visibility = 'hidden';
	$('zhihu').style.visibility = 'hidden';
}
