(function(exports){

  var TableView = function(){}

  TableView.prototype.tableHeading = function(titles) {
    var string = '';
    for(i in titles) {
      string += '<th>' + titles[i] + '</th>';
    }
    return string;
  }

  TableView.prototype.tableRow = function(string) {
    return '<tr>' + string + '</tr>';
  }

  TableView.prototype.build = function(titles, body) {
    var string = ''

    string += '<table>';

    var tableHeading = this.tableHeading(titles)
    string += this.tableRow(tableHeading);

    for (i in body) {
      rowString = '<td>' + body[i].title + '</td>' +
                  '<td>' + body[i].date + '</td>'
      string += this.tableRow(rowString);
    }

    string += '</table>';

    return string;
  }

  exports.TableView = TableView;

})(this);
