var showInfo = function() {
  var btn = document.getElementsByClassName('editBtn')[0];
  var input = document.getElementsByClassName('editItemInput'); 
  btn = btn.addEventListener('click', function() {
    var href = "http://ditu.google.cn/maps/api/geocode/json?address=" + input[3].value + "&sensor=false";
    postMsg([], href, function(data) {
      data = JSON.parse(data);
      data = data['results'][0]['geometry']['location'];
      postMsg({
        'id': input[0].value, 
        'name': input[1].vaule,
        'tel': input[2].value,
        'location': input[3].value,
        'pos': data,
        'msg': input[4].value
      }, '', function(res) {
        alert(res);
      })
    });
    
  }, false);
}();
