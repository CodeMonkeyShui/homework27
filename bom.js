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
		window.open(url, '_blank', 'width=${width}px,height=${height}px')
	}
}

