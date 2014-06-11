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
		return document.querySelector(".slider")
	},

	removeFirst: function(list, itemToMove){
		list.removeChild(itemToMove)
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
	}

}

