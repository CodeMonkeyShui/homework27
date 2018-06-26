window.jQuery = function (selectorOrElements) {
	var array = []
	// elements is not a array
	// elements is like a array
	if(typeof selectorOrElements ==='string'){
		var elements = document.querySelectorAll(selectorOrElements)

		for(var i=0; i<elements.length; i++){
			array.push(elements[i])
		}
	}else if(selectorOrElements instanceof Array){
		for(var i=0; i<selectorOrElements.length; i++){
			array.push(selectorOrElements[i])
		}
		array.previousSelection = selectorOrElements['previousSelection']
	}



	array.on = function(eventType, fn){
		for(var i=0; i<array.length; i++){
			array[i].addEventListener(eventType, fn)
		}
		return array
	}
	array.addClass = function(className){
		for(var i=0; i<array.length; i++){
			array[i].classList.add(className)
		}
		return array
	}
	array.removeClass = function(className){	
		for(var i=0; i<array.length; i++){
			array[i].classList.remove(className)
		}
		return array
	}
	array.toggleClass = function(className){
		for(var i=0; i<array.length; i++){
			array[i].classList.toggle(className)
		}
		return array
	}
	array.text = function(value){
		if(value === undefined){
			var result = []
			for(var i=0; i<array.length; i++){
				result.push(array[i].textContent)
			}
			return result
		}else{
			for(var i=0; i<array.length; i++){
				array[i].textContent = value
			}
			return array
		}
	}
	array.html = function(value){
		if(value === undefined){
			var result = []
			for(var i=0; i<array.length; i++){
				result.push(array[i].innerHTML)
			}
			return result
		}else{
			for(var i=0; i<array.length; i++){
				array[i].innerHTML = value
			}
			return array
		}
	}

	array.find = function(selectorOrElements){
		var array2 = []
		for(var i = 0; i<array.length; i++){
			var elements = array[i].querySelectorAll(selectorOrElements)
			for(var j = 0; j<elements.length; j++){
				array2.push(elements[j])
			}
		}
		array2['previousSelection'] = array
		// var 添加了各种APO的Array = jQuery(array2)
		return jQuery(array2)
	}

	array.end = function(){
		return array.previousSelection
	}
	return array
}

window.$ = window.jQuery