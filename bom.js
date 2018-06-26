let on = function () {
	// body...
}

window.$ = function(){
	let array = []
	array.on = on
	return array
}

$.bom = {
	openAtCenter: function(width, height, url){
		let st = 'width='+width+'px,height='+height+'}px,screenX='+(screen.width/2-width/2)+'px,screenY='+(screen.height/2-height/2)+'px'
		window.open(url, '_blank', st)
	}
}

