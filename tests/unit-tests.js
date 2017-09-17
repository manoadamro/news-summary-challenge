
// var jsonResponseDouble = "json response data"
//
// var QueryDouble = function(callback) {
//   callback(jsonResponseDouble);
// }

(function(){

  var tests = {

    TableView: defineTest,

    returns_correct_html: function(title) {

        var tableView = new TableView();

        var titleArray = ['title', 'date']
        var titleBody = [
          {title: 'test-title1', date: 'test-date1'},
          {title: 'test-title2', date: 'test-date2'}
        ]

        var expected = "<table>" +
                       "<tr><th>title</th><th>date</th></tr>" +
                       "<tr><td>test-title1</td><td>test-date1</td></tr>" +
                       "<tr><td>test-title2</td><td>test-date2</td></tr>" +
                       "</table>"

        test(title)
          .assert(tableView.build(titleArray, titleBody))
          .isEqualTo(expected);
      },

      Table: defineTest,

      builds_table_on_update: function(title) {

        var TestObj = function() {
          this.built = false;
          return {
            build: function(h, b) { this.built = true; }
          }
        };

        table = new Table(TestObj);
        table.update();

        test(title)
          .assert(table.view.built)
          .isEqualTo(true)
      }
  }

  runTestSet(tests);

})();
