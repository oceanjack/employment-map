var menuInfo = function() {
  var menu = document.getElementsByClassName('menu')[0];
  var menuItem = document.getElementsByClassName('menuItem');
  var info = function(data) {
    if(data['ad']) {
      menuItem[2].classList.remove('hidden');
      menuItem[3].classList.remove('hidden');
    }
  };
  postMsg([], '', function(data) {
    info(JSON.parse(data));
  })
}();
