
(function(exports){

  var Table = function(view, name, cells){
    this.view = new view();
    this.headerCells = cells;
  }

  Table.prototype.cellsFromData = function (data) {
    
  }

  Table.prototype.update = function (data) {
    body = cellsFromData(data);
    this.view.build(this.headerCells, body)
  }

  exports.Table = Table;

})(this);
