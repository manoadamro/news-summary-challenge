(function(exports){

  var monkeyTest = function(title) {

    var assert = function (objA) {

      var equal = function (objB) {
        var pass = objA === objB;
        var note = testOutput.expectationNote(objA, objB, 'equal');
        testOutput.format(title, pass, note);
      }

      var notEqual = function (objB) {
        var pass = objA !== objB;
        var note = testOutput.expectationNote(objA, objB, 'not equal');
        testOutput.format(title, pass, note);
      }

      var includes = function(objB){
        var pass = objA.includes(objB);
        var note = testOutput.expectationNote(objA, objB, 'include');
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

  var runTestSet = function(tests) {
    for (var key in tests){
      tests[key](key.replace(/_/g, ' '))
    }
  }

  exports.monkeyDefine = monkeyDefine;
  exports.monkeyTest = monkeyTest;
  exports.runTestSet = runTestSet

})(this);
