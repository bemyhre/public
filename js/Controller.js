
window.onload = function() {
  var view = new View()
  var hoverList = new Hoverview() 
  var model = new Model()
  var controller = new Controller(view,model, hoverList)
  controller.bindListeners()
}


function Controller(display,model,hoverable) {
  this.display = display;
  this.model = model;
  this.hoverable = hoverable;
}

Controller.prototype = {
  bindListeners:  function() {
    var previous= this.display.getPreviousArrow()
    var next = this.display.getNextArrow()
    var hoverList = this.hoverable.getAllList()
    hoverList.mouseover(this.hoverable.displayTheDeets)
    hoverList.mouseout(this.hoverable.originalDeets)
    previous.addEventListener('click',this.moveBack.bind(this))
    next.addEventListener('click',this.moveAhead.bind(this))
  },

  moveBack: function(){
    var list = this.display.getList()
    var itemToMove = this.display.getFirst(list)
    this.display.removeFirst(list, itemToMove)
    this.display.appendToEnd(list,itemToMove)
  },

  moveAhead: function(){
    var list = this.display.getList()
    var last = this.display.removeLast(list)
    returned = this.model.makeNewList(list, last)

  }

}

