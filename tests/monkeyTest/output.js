(function(exports){

    function getTitle(title){
      return '<div class="output">' + title + '</div>: ';
    }

    function getStyle(pass){
      if (pass) {
        color = 'green';
        output = 'PASS';
      }
      else {
        color = 'red';
        output = 'FAIL';
      }
      return '<span class="output" style="color: ' + color + ';">' + output + '</span><br />';
    }

    var formatOutput = function (title, pass, notes) {
      var string = '';
      string += getTitle(title);
      string += getStyle(pass);

      if (!pass) {
        string += notes + "<br />";
      }

      document.write(string);
    }

    var expectationNote = function(a, b, expectation) {
      return "<span class='monkey-expect'>- expected \"" + a + "\"<br />- to " + expectation + " \"" + b + "\"</span>";
    }

  exports.testOutput = {
    expectationNote: expectationNote,
    format: formatOutput
  }

})(this);
