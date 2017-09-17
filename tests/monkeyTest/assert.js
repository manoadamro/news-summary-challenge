(function(exports){

  var monkeyTest = function(title) {

    var assert = function (objA) {

      var equal = function (objB) {
        var pass = objA === objB;
        var note = testOutput.expectationNote(objA, objB);
        testOutput.format(title, pass, note);
      }

      var notEqual = function (objB) {
        var pass = objA !== objB;
        var note = testOutput.expectationNote(objA, objB);
        testOutput.format(title, pass, note);
      }

      return {
        isEqualTo: equal,
        isNotEqualTo: notEqual
      }
    }

    return {
      assert: assert
    }
  }

  var monkeyDefine = function(title) {
    document.write("<br /><span class='monkey-define'>" + title + "</span><br />");
  }

  exports.monkeyDefine = monkeyDefine;
  exports.monkeyTest = monkeyTest;

})(this);
