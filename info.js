var showInfo = function() {
  var father = document.getElementsByClassName('info')[0];
  var info = function(data) {
    var str = "";
    str += "" +
      "<div class='infoItem'>" +
        "<div class='infoBlock'>" +
          "<div class='infoLeft'>" +
            "<img class='infoHead' src='" + data['url'] + "/>" +
            "<p class='infoId'>" + data['id'] + "</p>" +
          "</div>" +
          "<div class='infoMid'>" +
            "<p class='infoName'>姓名: " + data['name'] + "</p>" +
            "<p class='infoMore'>就业地: " + data['location'] + "</p>" +
            "<p class='infoMore'>联系方式: " + data['con'] + "</p>" +
          "</div>" +
          "<div class='infoRight'>" +
            "<img class='infoHeart' src='img/heart.png' />" +
            "<p class='infoMsg'>心情: " + data['msg'] + "</p>" +
          "</div>" +
        "</div>" +
      "</div>";
    father.innerHTML += str;
  };
}();
