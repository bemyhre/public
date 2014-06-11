function Model() {

}

Model.prototype = {
	makeNewList: function(list, last){
	   	var item = document.querySelector(".slider li")
	    list.insertBefore(last,item)
	    // console.log(list)
	    // return list
	}


}