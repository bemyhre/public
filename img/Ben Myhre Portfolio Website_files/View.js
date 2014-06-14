function View() {
}

View.prototype = {
	getPreviousArrow: function(){
		return document.querySelector(".previous")
	},

	getNextArrow: function(){
		return document.querySelector(".next")
	},

	getList: function(){
		return document.querySelector(".carasoul ul #image-container")
	},

	removeFirst: function(list, itemToMove, image){
		//removed=list.removeChild(itemToMove)
		//console.log(removed)
		$(list).toggleClass('clicked');
	},

	appendToEnd: function(list, itemToMove){
		list.appendChild(itemToMove)
	},
	getFirst: function(list){

		first=list.querySelector("li")
		return first

	},

	getLast: function(list){
		return list.getLast
	},

	removeLast: function(list){
		return list.removeChild(list.lastElementChild)
	},
	makeNewList: function(list, last){
	   	var item = document.querySelector(".slider li")
	    list.insertBefore(last,item)
	},

	clickEffectOn: function(list){
		original=$(list).find("img:first").attr("src")
		$(list).find("img:first").attr("src","img/blank_pic.jpg")
		$(list).toggleClass('clicked');
		return original
		//$("#image-container").css("margin-left","200px");
		//setTimeout(function(){$(list).toggleClass('clicked')}, 200);
		//$(list).find("li").css("display","inline");


	}

}

