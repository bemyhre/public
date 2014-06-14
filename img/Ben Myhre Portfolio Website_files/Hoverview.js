function Hoverview(){

}

Hoverview.prototype = {
	getAllList: function(){
		return $("#image-container li")
	},

	displayTheDeets: function(){
		big=$(".project-details")
		thisClass=$(this).attr("class")
	    $(big).find("." + thisClass).show()
	},

	originalDeets: function(){
		big=$(".project-details")
		thisClass=$(this).attr("class")
	    $(big).find("." + thisClass).hide()
	}

}