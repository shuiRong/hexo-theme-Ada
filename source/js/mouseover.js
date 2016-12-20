window.onload=function(){
	$('links').onmouseover = mouseOver;
	$('links').onmouseout = mouseOut;
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