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
		let st = 'width='+width+'px,height='height'}px'
		window.open(url, '_blank', st)
	}
}

