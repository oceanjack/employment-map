var showInfo = function() {
  var father = document.getElementsByClassName('group')[0];
  var info = function(data) {
    var str = "";
    str += "" +
      "<div class='groupInfo'>" +
        "<p class='groupMsg'>" + data['start'] + "</p>" +
        "<p class='groupMsgR'>&nbsp;~&nbsp;</p>" +
        "<p class='groupMsg'>" + data['end'] + "</p>" +
        "<button class='groupDel'>-</button>" +
      "</div>";
    father.innerHTML += str;
  };
}();
