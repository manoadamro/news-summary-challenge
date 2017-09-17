
(function(exports){

  var url = 'https://content.guardianapis.com/search';
  var key = 'ca1f1493-7322-4f60-b0ca-9c0c1c825d1e';

  var Query = function(callback){
    this.execute(callback)
  }

  Query.prototype.execute = function (callback) {
    $.ajax({
        url: url,
        data: {'api-key': key},
        dataType: 'json',
        success: callback
    });
  }

  exports.Query = Query;

})(this);
